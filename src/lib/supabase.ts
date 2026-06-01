import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

const isConfigured =
  Boolean(supabaseUrl) &&
  Boolean(supabaseAnonKey) &&
  !supabaseUrl!.includes("your_supabase") &&
  supabaseAnonKey !== "your_supabase_anon_key_here";

if (!isConfigured) {
  console.warn("[FaithConnect] Supabase not configured — using demo mode for backend features.");
}

export const supabase: SupabaseClient | null = isConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!, {
      auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true },
    })
  : null;

export type UserRole = "devotee" | "trust_admin" | "trust_member" | "hrce_officer" | "superadmin";

export interface Temple {
  id: string;
  slug: string;
  name: string;
  name_local: string | null;
  deity: string | null;
  state: string;
  district: string | null;
  town: string | null;
  lat: number;
  lng: number;
  description: string | null;
  blurb: string | null;
  architecture_style: string | null;
  temple_type: string[];
  festival_tags: string[];
  opening_time: string | null;
  closing_time: string | null;
  is_jyotirlinga: boolean;
  is_verified: boolean;
  osm_id: string | null;
  source: "manual" | "osm" | "bundled";
  trust_id: string | null;
  official_website: string | null;
  hrce_managed: boolean;
  hrce_department: string | null;
  donation_link: string | null;
  whatsapp_link: string | null;
  telegram_link: string | null;
  nearest_airport: string | null;
  nearest_railway: string | null;
  local_transport: string | null;
  image_urls: string[];
  hero_image: string | null;
  accessibility_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface Inquiry {
  id: string;
  temple_trust_name: string;
  contact_name: string;
  contact_role: string | null;
  state: string;
  annual_donation_volume: string | null;
  phone: string;
  notes: string | null;
  status: "new" | "contacted" | "walkthrough_scheduled" | "pilot_started" | "closed";
  assigned_to: string | null;
  created_at: string;
  updated_at: string;
}

export interface TransparencyReport {
  id: string;
  quarter: string;
  temple_id: string | null;
  total_donations: number;
  restoration_maintenance_pct: number;
  priest_stipends_pct: number;
  festivals_seva_pct: number;
  community_kitchens_pct: number;
  education_pct: number;
  report_url: string | null;
  published_at: string;
}

export async function fetchTemples(filters?: {
  state?: string;
  deity?: string;
  isJyotirlinga?: boolean;
  search?: string;
  limit?: number;
  offset?: number;
}): Promise<{ data: Temple[] | null; error: string | null }> {
  if (!supabase) return { data: null, error: null };
  let query = supabase.from("temples").select("*").eq("is_verified", true).order("name", { ascending: true });
  if (filters?.state) query = query.eq("state", filters.state);
  if (filters?.deity) query = query.eq("deity", filters.deity);
  if (filters?.isJyotirlinga) query = query.eq("is_jyotirlinga", true);
  if (filters?.search) query = query.ilike("name", `%${filters.search}%`);
  if (filters?.limit) query = query.limit(filters.limit);
  if (filters?.offset) query = query.range(filters.offset, filters.offset + (filters.limit || 20) - 1);
  const { data, error } = await query;
  return { data, error: error?.message ?? null };
}

export async function fetchTempleBySlug(slug: string): Promise<{ data: Temple | null; error: string | null }> {
  if (!supabase) return { data: null, error: null };
  const { data, error } = await supabase.from("temples").select("*").eq("slug", slug).single();
  return { data, error: error?.message ?? null };
}

export async function submitInquiry(inquiry: {
  temple_trust_name: string;
  contact_name: string;
  contact_role?: string;
  state: string;
  annual_donation_volume?: string;
  phone: string;
  notes?: string;
}): Promise<{ data: Inquiry | null; error: string | null }> {
  if (!supabase) {
    return { data: null, error: "Supabase is not configured. Add credentials to .env to enable submissions." };
  }
  const { data, error } = await supabase.from("inquiries").insert(inquiry).select().single();
  return { data, error: error?.message ?? null };
}

export type WaitlistType = "crm" | "donation_software" | "website" | "devotee";

export interface WaitlistEntry {
  id: string;
  type: WaitlistType;
  name: string | null;
  organization: string | null;
  email: string | null;
  phone: string | null;
  state: string | null;
  notes: string | null;
  source: string | null;
  created_at: string;
}

export async function submitWaitlist(input: {
  type: WaitlistType;
  name?: string;
  organization?: string;
  email?: string;
  phone?: string;
  state?: string;
  notes?: string;
  source?: string;
}): Promise<{ data: WaitlistEntry | null; error: string | null }> {
  if (!supabase) {
    return { data: null, error: "Backend not configured." };
  }
  const { data, error } = await supabase.from("waitlists").insert(input).select().single();
  return { data, error: error?.message ?? null };
}

export async function fetchLatestTransparencyReport(): Promise<{
  data: TransparencyReport | null;
  error: string | null;
}> {
  if (!supabase) return { data: null, error: null };
  const { data, error } = await supabase
    .from("transparency_reports")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(1)
    .single();
  return { data, error: error?.message ?? null };
}
