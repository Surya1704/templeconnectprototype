import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Loader2, MapPin } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { SectionReveal } from "@/components/SectionReveal";
import { TempleMap } from "@/components/TempleMap";
import {
  getAllTemplesForViewport,
  getBundledJyotirlingas,
  searchTemples,
  type Temple,
  type LatLngBoundsLiteral,
} from "@/lib/templeData";

const DEFAULT_BOUNDS: LatLngBoundsLiteral = [[6.5, 68.0], [35.5, 97.5]];
const DEFAULT_ZOOM = 5;

export default function AllTemples() {
  const [searchParams] = useSearchParams();
  const jyotirlingaOnly = searchParams.get("tag") === "jyotirlinga";

  const [temples, setTemples] = useState<Temple[]>(getBundledJyotirlingas());
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Temple[] | null>(null);
  const [selected, setSelected] = useState<Temple | null>(null);
  const [bounds, setBounds] = useState<LatLngBoundsLiteral>(DEFAULT_BOUNDS);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loadViewport = useCallback(async (bbox: LatLngBoundsLiteral, z: number) => {
    setLoading(true);
    try {
      let list = await getAllTemplesForViewport(bbox, z);
      if (jyotirlingaOnly) list = list.filter((t) => t.isJyotirlinga);
      setTemples(list);
    } finally {
      setLoading(false);
    }
  }, [jyotirlingaOnly]);

  const onViewportChange = useCallback((bbox: LatLngBoundsLiteral, z: number) => {
    setBounds(bbox);
    setZoom(z);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => loadViewport(bbox, z), 400);
  }, [loadViewport]);

  useEffect(() => {
    loadViewport(bounds, zoom);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [jyotirlingaOnly]);

  useEffect(() => {
    if (!searchQuery.trim() || searchQuery.length < 3) {
      setSearchResults(null);
      return;
    }
    const t = setTimeout(async () => {
      const results = await searchTemples(searchQuery);
      setSearchResults(results);
    }, 500);
    return () => clearTimeout(t);
  }, [searchQuery]);

  const displayList = searchResults ?? temples;

  return (
    <div className="bg-bg-primary pt-16 min-h-screen">
      <section className="max-w-container mx-auto px-5 md:px-8 py-10 md:py-14">
        <Eyebrow>DISCOVER</Eyebrow>
        <h1 className="mt-4 font-serif text-[36px] md:text-[48px] font-normal leading-[1.1] tracking-[-0.018em] text-ink-primary">
          {jyotirlingaOnly ? "The twelve Jyotirlingas" : "Explore temples across India"}
        </h1>
        <p className="mt-3 font-serif text-[17px] text-ink-secondary leading-[1.65] max-w-[560px]">
          Pan and zoom the map. Verified temples from Supabase merge with OpenStreetMap data at closer zoom levels.
        </p>
        <div className="mt-6 relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-tertiary" size={16} strokeWidth={1.5} />
          <input
            type="search"
            placeholder="Search by name or place (min. 3 characters)…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-pill border border-line-soft bg-bg-card font-sans text-[14px] text-ink-primary placeholder:text-ink-muted focus:outline-none focus:border-accent/40"
          />
        </div>
      </section>

      <div className="max-w-container mx-auto px-5 md:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 order-2 lg:order-1 max-h-[520px] overflow-y-auto rounded-[20px] border border-line-hair bg-bg-card">
            <div className="sticky top-0 bg-bg-card border-b border-line-hair px-4 py-3 flex items-center justify-between z-10">
              <span className="font-sans text-[12px] uppercase tracking-[0.08em] text-ink-tertiary">
                {displayList.length} temples
              </span>
              {loading && <Loader2 className="animate-spin text-accent" size={16} />}
            </div>
            <ul className="divide-y divide-line-hair">
              {displayList.length === 0 && !loading && (
                <li className="p-8 text-center font-serif text-ink-tertiary">No temples match your search.</li>
              )}
              {displayList.map((t) => (
                <li key={t.osmId}>
                  <button
                    type="button"
                    onClick={() => setSelected(t)}
                    className={`w-full text-left px-4 py-4 hover:bg-bg-secondary/60 transition-colors duration-160 ${selected?.osmId === t.osmId ? "bg-bg-secondary/80" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-serif text-[18px] text-ink-primary leading-snug">{t.name}</h3>
                        {t.deity && <p className="font-sans text-[11px] uppercase tracking-wide text-ink-tertiary mt-0.5">{t.deity}</p>}
                        {t.state && (
                          <p className="font-sans text-[12px] text-ink-secondary mt-1 flex items-center gap-1">
                            <MapPin size={12} /> {t.state}
                          </p>
                        )}
                      </div>
                      {t.isJyotirlinga && (
                        <span className="shrink-0 font-sans text-[10px] uppercase tracking-wide text-accent border border-accent/30 rounded-pill px-2 py-0.5">
                          Jyotirlinga
                        </span>
                      )}
                    </div>
                    {t.slug && (
                      <Link
                        to={`/explore/${t.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block mt-2 font-sans text-[12px] text-accent hover:underline"
                      >
                        View details →
                      </Link>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <SectionReveal className="lg:col-span-7 order-1 lg:order-2">
            <div className="rounded-[20px] overflow-hidden border border-line-hair h-[400px] lg:h-[520px] relative">
              <TempleMap
                temples={displayList}
                onViewportChange={onViewportChange}
                onTempleClick={setSelected}
                className="w-full h-full z-0"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}
