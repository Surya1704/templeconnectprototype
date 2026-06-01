/**
 * Temple data layer.
 * IMPORTANT: We use CARTO Voyager tiles, NOT raw tile.openstreetmap.org.
 * OSM's tile usage policy disallows high-volume commercial use.
 * CARTO Voyager is free for reasonable use and matches our sandstone palette.
 * Overpass API rate limits: ~2 requests/second. We debounce viewport queries at 400ms.
 * Nominatim usage policy: max 1 request/second, requires User-Agent header.
 */
import { jyotirlingas, type Jyotirlinga } from "@/data/jyotirlingas";
import { fetchTemples as fetchSupabaseTemples, type Temple as SupabaseTemple } from "@/lib/supabase";

export interface Temple {
  osmId: string; name: string; nameLocal?: string; lat: number; lng: number;
  deity?: string; state?: string; district?: string; town?: string;
  isJyotirlinga?: boolean; source: "bundled" | "supabase" | "osm";
  slug?: string; blurb?: string; imageUrl?: string; donationLink?: string;
  officialWebsite?: string; hrceManaged?: boolean; hrceDepartment?: string;
  whatsappLink?: string; telegramLink?: string;
  nearestAirport?: string; nearestRailway?: string; localTransport?: string;
}
export type LatLngBoundsLiteral = [[number, number], [number, number]];

const overpassCache = new Map<string, { temples: Temple[]; timestamp: number }>();
const CACHE_TTL = 60 * 60 * 1000;
const nominatimCacheKey = (osmId: string) => `fc_nominatim_${osmId}`;

const OVERPASS_SERVERS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
] as const;

export function getBundledJyotirlingas(): Temple[] {
  return jyotirlingas.map((j: Jyotirlinga) => ({
    osmId: `bundled/${j.slug}`, name: j.name, lat: j.lat, lng: j.lng,
    deity: j.deity, state: j.state, isJyotirlinga: true, source: "bundled" as const,
    slug: j.slug, blurb: j.blurb, imageUrl: j.imageUrl, donationLink: j.donationLink, officialWebsite: j.officialWebsite,
    whatsappLink: j.whatsappLink, telegramLink: j.telegramLink,
    nearestAirport: j.nearestAirport, nearestRailway: j.nearestRailway, localTransport: j.localTransport,
  }));
}

export async function fetchSupabaseTemplesList(filters?: { state?: string; deity?: string; search?: string; limit?: number; }): Promise<Temple[]> {
  const { data } = await fetchSupabaseTemples(filters);
  if (!data) return [];
  return data.map((t: SupabaseTemple) => ({
    osmId: t.osm_id || `supabase/${t.id}`, name: t.name, nameLocal: t.name_local || undefined,
    lat: t.lat, lng: t.lng, deity: t.deity || undefined, state: t.state,
    district: t.district || undefined, town: t.town || undefined, isJyotirlinga: t.is_jyotirlinga,
    source: "supabase" as const, slug: t.slug, blurb: t.blurb || undefined,
    imageUrl: t.hero_image || (t.image_urls?.[0]) || undefined, donationLink: t.donation_link || undefined,
    officialWebsite: t.official_website || undefined, hrceManaged: t.hrce_managed, hrceDepartment: t.hrce_department || undefined,
    whatsappLink: t.whatsapp_link || undefined, telegramLink: t.telegram_link || undefined,
    nearestAirport: t.nearest_airport || undefined, nearestRailway: t.nearest_railway || undefined,
    localTransport: t.local_transport || undefined,
  }));
}

function buildOverpassQuery(bbox: LatLngBoundsLiteral): string {
  const [south, west] = bbox[0]; const [north, east] = bbox[1];
  return `[out:json][timeout:25];(node["amenity"="place_of_worship"]["religion"="hindu"](${south},${west},${north},${east});way["amenity"="place_of_worship"]["religion"="hindu"](${south},${west},${north},${east});relation["amenity"="place_of_worship"]["religion"="hindu"](${south},${west},${north},${east}););out center tags;`;
}
function bboxCacheKey(bbox: LatLngBoundsLiteral): string {
  const r = (n: number) => Math.round(n * 20) / 20;
  return `${r(bbox[0][0])},${r(bbox[0][1])},${r(bbox[1][0])},${r(bbox[1][1])}`;
}
function parseOverpassResponse(elements: Array<Record<string, unknown>>): Temple[] {
  return elements.map((el) => {
    const tags = (el.tags || {}) as Record<string, string>;
    const center = el.center as { lat?: number; lon?: number } | undefined;
    const lat = el.lat ?? center?.lat; const lng = el.lon ?? center?.lon;
    if (!lat || !lng) return null;
    if (tags.religion && tags.religion !== "hindu") return null;
    return { osmId: `${el.type}/${el.id}`, name: tags.name || tags["name:en"] || "Unnamed temple",
      nameLocal: tags["name:hi"] || tags["name:ta"] || undefined, lat: Number(lat), lng: Number(lng),
      deity: tags.deity || undefined, state: undefined, source: "osm" as const };
  }).filter((t): t is Temple => t !== null);
}
function mergeWithBundled(osmTemples: Temple[], bbox: LatLngBoundsLiteral): Temple[] {
  const bundled = getBundledJyotirlingas().filter((t) => t.lat >= bbox[0][0] && t.lng >= bbox[0][1] && t.lat <= bbox[1][0] && t.lng <= bbox[1][1]);
  const isNearBundled = (t: Temple) => bundled.some((b) => Math.abs(t.lat - b.lat) < 0.002 && Math.abs(t.lng - b.lng) < 0.002);
  return [...bundled, ...osmTemples.filter((t) => !isNearBundled(t))];
}

export async function fetchTemplesInBounds(bbox: LatLngBoundsLiteral): Promise<Temple[]> {
  const key = bboxCacheKey(bbox);
  const cached = overpassCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) return mergeWithBundled(cached.temples, bbox);
  const query = buildOverpassQuery(bbox); let lastError: Error | null = null;
  for (const server of OVERPASS_SERVERS) {
    try {
      const response = await fetch(server, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: `data=${encodeURIComponent(query)}` });
      if (response.status === 429 || response.status === 504) { lastError = new Error(`Rate limited: ${response.status}`); continue; }
      if (!response.ok) { lastError = new Error(`HTTP ${response.status}`); continue; }
      const data = await response.json(); const temples = parseOverpassResponse(data.elements || []);
      overpassCache.set(key, { temples, timestamp: Date.now() }); return mergeWithBundled(temples, bbox);
    } catch (err) { lastError = err instanceof Error ? err : new Error(String(err)); continue; }
  }
  console.warn("[FaithConnect] Overpass API unavailable.", lastError?.message);
  return getBundledJyotirlingas().filter((t) => t.lat >= bbox[0][0] && t.lng >= bbox[0][1] && t.lat <= bbox[1][0] && t.lng <= bbox[1][1]);
}

export async function enrichTemple(temple: Temple): Promise<Temple> {
  const cacheKey = nominatimCacheKey(temple.osmId);
  try { const cached = localStorage.getItem(cacheKey); if (cached) return { ...temple, ...JSON.parse(cached) }; } catch { /* ignore */ }
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${temple.lat}&lon=${temple.lng}`, { headers: { "User-Agent": "FaithConnect/1.0 (contact: hello@faithconnect.in)" } });
    if (!response.ok) return temple; const data = await response.json(); const address = data.address || {};
    const enriched = { state: address.state || temple.state, district: address.county || temple.district, town: address.city || temple.town };
    try { localStorage.setItem(cacheKey, JSON.stringify(enriched)); } catch { /* ignore */ }
    return { ...temple, ...enriched };
  } catch { return temple; }
}

export async function searchTemples(query: string): Promise<Temple[]> {
  if (!query.trim() || query.length < 3) return [];
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query + " temple india")}&countrycodes=in&limit=20`, { headers: { "User-Agent": "FaithConnect/1.0 (contact: hello@faithconnect.in)" } });
    if (!response.ok) return []; const data = await response.json();
    return data.map((item: Record<string, unknown>) => ({ osmId: `search/${item.osm_type}/${item.osm_id}`, name: (item.name as string) || "Unnamed temple", lat: Number(item.lat), lng: Number(item.lon), state: (item.address as Record<string, string>)?.state, source: "osm" as const }));
  } catch { return []; }
}

export async function getAllTemplesForViewport(bbox: LatLngBoundsLiteral, zoom: number): Promise<Temple[]> {
  const bundled = getBundledJyotirlingas().filter((t) => t.lat >= bbox[0][0] && t.lng >= bbox[0][1] && t.lat <= bbox[1][0] && t.lng <= bbox[1][1]);
  let supabaseTemples: Temple[] = [];
  try { supabaseTemples = await fetchSupabaseTemplesList({ limit: 200 }); supabaseTemples = supabaseTemples.filter((t) => t.lat >= bbox[0][0] && t.lng >= bbox[0][1] && t.lat <= bbox[1][0] && t.lng <= bbox[1][1]); } catch { /* demo mode */ }
  if (zoom >= 7) { try { return await fetchTemplesInBounds(bbox); } catch { /* fallback */ } }
  const allTemples = [...bundled];
  for (const st of supabaseTemples) { if (!allTemples.some((t) => Math.abs(t.lat - st.lat) < 0.002 && Math.abs(t.lng - st.lng) < 0.002)) allTemples.push(st); }
  return allTemples;
}
