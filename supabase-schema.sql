-- FaithConnect core schema (run in Supabase SQL Editor)
-- Matches src/lib/supabase.ts types. Safe to re-run: uses IF NOT EXISTS / ON CONFLICT.

create extension if not exists "pgcrypto";

-- ─── Tables ───────────────────────────────────────────────────────────

create table if not exists public.temples (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  name_local text,
  deity text,
  state text not null,
  district text,
  town text,
  lat double precision not null,
  lng double precision not null,
  description text,
  blurb text,
  architecture_style text,
  temple_type text[] default '{}',
  festival_tags text[] default '{}',
  opening_time text,
  closing_time text,
  is_jyotirlinga boolean not null default false,
  is_verified boolean not null default false,
  osm_id text,
  source text not null default 'manual' check (source in ('manual', 'osm', 'bundled')),
  trust_id uuid,
  official_website text,
  hrce_managed boolean not null default false,
  hrce_department text,
  donation_link text,
  whatsapp_link text,
  telegram_link text,
  nearest_airport text,
  nearest_railway text,
  local_transport text,
  image_urls text[] default '{}',
  hero_image text,
  accessibility_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Backfill community + transport columns on existing installations.
alter table public.temples add column if not exists whatsapp_link text;
alter table public.temples add column if not exists telegram_link text;
alter table public.temples add column if not exists nearest_airport text;
alter table public.temples add column if not exists nearest_railway text;
alter table public.temples add column if not exists local_transport text;

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  temple_trust_name text not null,
  contact_name text not null,
  contact_role text,
  state text not null,
  annual_donation_volume text,
  phone text not null,
  notes text,
  status text not null default 'new' check (status in (
    'new', 'contacted', 'walkthrough_scheduled', 'pilot_started', 'closed'
  )),
  assigned_to uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.transparency_reports (
  id uuid primary key default gen_random_uuid(),
  quarter text not null,
  temple_id uuid references public.temples(id) on delete set null,
  total_donations numeric not null default 0,
  restoration_maintenance_pct numeric not null default 0,
  priest_stipends_pct numeric not null default 0,
  festivals_seva_pct numeric not null default 0,
  community_kitchens_pct numeric not null default 0,
  education_pct numeric not null default 0,
  report_url text,
  published_at timestamptz not null default now()
);

-- Waitlists: write-only lead capture for product + devotee interest.
-- NOTE FOR ADMINS: there is intentionally NO public SELECT policy on this table.
-- Submissions are insert-only from the client; read these leads from the
-- Supabase dashboard Table Editor (Database → waitlists) or via the service role.
create table if not exists public.waitlists (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('crm', 'donation_software', 'website', 'devotee')),
  name text,
  organization text,
  email text,
  phone text,
  state text,
  notes text,
  source text,
  created_at timestamptz not null default now()
);

create index if not exists temples_slug_idx on public.temples (slug);
create index if not exists temples_state_idx on public.temples (state);
create index if not exists temples_verified_idx on public.temples (is_verified) where is_verified;
create index if not exists inquiries_status_idx on public.inquiries (status, created_at desc);

-- ─── RLS ──────────────────────────────────────────────────────────────

alter table public.temples enable row level security;
alter table public.inquiries enable row level security;
alter table public.transparency_reports enable row level security;
alter table public.waitlists enable row level security;

drop policy if exists "Public read verified temples" on public.temples;
create policy "Public read verified temples"
  on public.temples for select
  using (is_verified = true or is_jyotirlinga = true);

drop policy if exists "Public insert inquiries" on public.inquiries;
create policy "Public insert inquiries"
  on public.inquiries for insert
  with check (char_length(temple_trust_name) > 1 and char_length(phone) >= 8);

drop policy if exists "Public read transparency reports" on public.transparency_reports;
create policy "Public read transparency reports"
  on public.transparency_reports for select
  using (true);

-- Anyone may submit a waitlist row; no one may read them back over the API.
drop policy if exists "Public insert waitlist" on public.waitlists;
create policy "Public insert waitlist"
  on public.waitlists for insert to anon
  with check (true);

-- ─── Seed: 12 Jyotirlingas ────────────────────────────────────────────

insert into public.temples (
  slug, name, deity, state, lat, lng, blurb,
  is_jyotirlinga, is_verified, source, donation_link, official_website, hero_image,
  hrce_managed, hrce_department,
  nearest_airport, nearest_railway, local_transport
) values
  ('somnath', 'Somnath', 'Shiva', 'Gujarat', 20.888, 70.4011,
   'The first among the twelve, destroyed and rebuilt across millennia.',
   true, true, 'bundled', 'https://somnath.org', 'https://somnath.org',
   '/jyotirlingas/somnath.png', false, null,
   'Rajkot Airport (130 km)', 'Veraval Railway Station (5 km)',
   'Auto-rickshaws and taxis run regularly from Veraval to Somnath.'),
  ('mallikarjuna', 'Mallikarjuna', 'Shiva & Parvati', 'Andhra Pradesh', 16.0739, 78.8687,
   'Nestled on the Sri Sailam hill, a revered Shakti Peetha alongside a Jyotirlinga.',
   true, true, 'bundled', 'https://www.srisailamonline.com', 'https://www.srisailamonline.com',
   '/jyotirlingas/mallikarjuna.png', false, null,
   'Rajiv Gandhi Intl, Hyderabad (215 km)', 'Markapur Road Railway Station (80 km)',
   'APSRTC buses run from nearby towns; taxis available from Srisailam.'),
  ('mahakaleshwar', 'Mahakaleshwar', 'Shiva', 'Madhya Pradesh', 23.1828, 75.7682,
   'The only Jyotirlinga facing south. The Bhasma Aarti here is legendary.',
   true, true, 'bundled', 'https://www.shrimahakaleshwar.mp.gov.in/services/donation', 'https://www.shrimahakaleshwar.mp.gov.in',
   '/jyotirlingas/mahakaleshwar.png', false, null,
   'Indore Airport (55 km)', 'Ujjain Junction (3 km)',
   'Auto-rickshaws, taxis, and city buses serve the temple from Ujjain.'),
  ('omkareshwar', 'Omkareshwar', 'Shiva', 'Madhya Pradesh', 22.2473, 76.1502,
   'Shaped like the Om symbol, an island in the Narmada.',
   true, true, 'bundled', 'https://shriomkareshwar.org/Donation.aspx', 'https://shriomkareshwar.org',
   '/jyotirlingas/omkareshwar.png', false, null,
   'Indore Airport (77 km)', 'Omkareshwar Road Railway Station (12 km)',
   'Auto-rickshaws and local buses run from Omkareshwar Road to the temple.'),
  ('kedarnath', 'Kedarnath', 'Shiva', 'Uttarakhand', 30.7352, 79.0669,
   'At 3,583m in the Garhwal Himalayas. One of the Char Dhams.',
   true, true, 'bundled', 'https://badrinath-kedarnath.gov.in', 'https://badrinath-kedarnath.gov.in',
   '/jyotirlingas/kedarnath.png', false, null,
   'Jolly Grant Airport, Dehradun (238 km)', 'Rishikesh Railway Station (216 km)',
   'Road to Gaurikund, then a 16 km trek; helicopter services from Phata and Guptkashi in season.'),
  ('bhimashankar', 'Bhimashankar', 'Shiva', 'Maharashtra', 19.0728, 73.5354,
   'In the Sahyadri hills, source of the Bhima river.',
   true, true, 'bundled', 'https://shreebhimashankar.com/en/', 'https://shreebhimashankar.com/en/',
   '/jyotirlingas/bhimashankar.png', false, null,
   'Pune International Airport (125 km)', 'Pune Railway Station (110 km)',
   'Local buses and shared taxis run from Manchar to Bhimashankar.'),
  ('kashi-vishwanath', 'Kashi Vishwanath', 'Shiva', 'Uttar Pradesh', 25.3109, 83.0107,
   'In the oldest living city on Earth.',
   true, true, 'bundled', 'https://shrikashivishwanath.org', 'https://shrikashivishwanath.org',
   '/jyotirlingas/kashi-vishwanath.png', false, null,
   'Lal Bahadur Shastri Airport, Varanasi (25 km)', 'Varanasi Junction (6 km)',
   'Auto and e-rickshaws reach the lanes; the final approach to the sanctum is on foot.'),
  ('trimbakeshwar', 'Trimbakeshwar', 'Shiva', 'Maharashtra', 19.9322, 73.5292,
   'Source of the Godavari. Three faces embodying Brahma, Vishnu, and Shiva.',
   true, true, 'bundled', 'https://trimbakeshwartrust.com/donate', 'https://trimbakeshwartrust.com',
   '/jyotirlingas/trimbakeshwar.png', false, null,
   'Nashik Airport (30 km)', 'Nashik Road Railway Station (28 km)',
   'Buses, taxis, and auto-rickshaws run from Nashik to Trimbakeshwar.'),
  ('vaidyanath', 'Baidyanath', 'Shiva', 'Jharkhand', 24.492, 86.7,
   'The healer. In Deoghar, a major eastern pilgrimage site.',
   true, true, 'bundled', 'https://babadham.org/donate/', 'https://babadham.org',
   '/jyotirlingas/vaidyanath.png', false, null,
   'Deoghar Airport (12 km); Ranchi (250 km)', 'Jasidih Junction (7 km)',
   'Auto-rickshaws, taxis, and cycle rickshaws run from Jasidih to Deoghar.'),
  ('nageshvara', 'Nageshvara', 'Shiva', 'Gujarat', 22.407, 69.0823,
   'Near Dwarka, on the coast of Saurashtra.',
   true, true, 'bundled', 'https://devbhumidwarka.nic.in/tourist-place/nageshwar-temple/', 'https://devbhumidwarka.nic.in/tourist-place/nageshwar-temple/',
   '/jyotirlingas/nageshvara.png', false, null,
   'Jamnagar Airport (137 km)', 'Dwarka Railway Station (16 km)',
   'Auto-rickshaws and taxis run from Dwarka town along NH-947.'),
  ('rameshwaram', 'Rameshwaram', 'Shiva', 'Tamil Nadu', 9.2881, 79.3174,
   'The southernmost Char Dham. Longest corridor of any Hindu temple.',
   true, true, 'bundled', 'https://hrce.tn.gov.in', 'https://hrce.tn.gov.in',
   '/jyotirlingas/rameshwaram.png', true, 'HR&CE Tamil Nadu',
   'Madurai Airport (174 km)', 'Rameswaram Railway Station (2 km)',
   'Auto-rickshaws, cycle rickshaws, and local buses serve the island.'),
  ('grishneshwar', 'Grishneshwar', 'Shiva', 'Maharashtra', 20.0269, 75.1791,
   'The smallest and last of the twelve. Near the Ellora caves.',
   true, true, 'bundled', 'https://maharashtratourism.gov.in', 'https://maharashtratourism.gov.in',
   '/jyotirlingas/grishneshwar.png', false, null,
   'Chhatrapati Sambhajinagar Airport (30 km)', 'Chhatrapati Sambhajinagar Railway Station (30 km)',
   'Auto-rickshaws, taxis, and buses run from Chhatrapati Sambhajinagar to Verul (Ellora).')
on conflict (slug) do update set
  name = excluded.name,
  deity = excluded.deity,
  state = excluded.state,
  lat = excluded.lat,
  lng = excluded.lng,
  blurb = excluded.blurb,
  donation_link = excluded.donation_link,
  official_website = excluded.official_website,
  hero_image = excluded.hero_image,
  is_jyotirlinga = excluded.is_jyotirlinga,
  is_verified = excluded.is_verified,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  local_transport = excluded.local_transport,
  updated_at = now();

-- ─── Seed: notable non-Jyotirlinga temples ────────────────────────────
-- A curated, structured set of widely-visited temples so the directory and
-- map are useful out of the box. All link-out only (no payment processing).

insert into public.temples (
  slug, name, deity, state, lat, lng, blurb,
  is_jyotirlinga, is_verified, source, official_website, hero_image,
  hrce_managed, hrce_department, nearest_airport, nearest_railway
) values
  ('tirupati-balaji', 'Tirupati Balaji', 'Vishnu', 'Andhra Pradesh', 13.6833, 79.3472,
   'Sri Venkateswara on the Tirumala hills — among the most visited temples on Earth.',
   false, true, 'manual', 'https://www.tirumala.org',
   '/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png', false, null,
   'Tirupati Airport (16 km)', 'Tirupati Railway Station (22 km)'),
  ('meenakshi-amman', 'Meenakshi Amman', 'Parvati', 'Tamil Nadu', 9.9195, 78.1193,
   'The towering gopurams of Madurai, dedicated to Meenakshi and Sundareshwar.',
   false, true, 'manual', 'https://hrce.tn.gov.in',
   '/lovable-uploads/c868ae47-1318-4239-9e0b-8e11ffd2ab53.png', true, 'HR&CE Tamil Nadu',
   'Madurai Airport (12 km)', 'Madurai Junction (2 km)'),
  ('jagannath-puri', 'Jagannath Temple', 'Vishnu', 'Odisha', 19.8048, 85.8180,
   'The seat of the Rath Yatra, one of the Char Dham on the Bay of Bengal.',
   false, true, 'manual', 'https://www.shreejagannatha.in',
   '/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png', false, null,
   'Biju Patnaik Airport, Bhubaneswar (60 km)', 'Puri Railway Station (3 km)'),
  ('badrinath', 'Badrinath', 'Vishnu', 'Uttarakhand', 30.7433, 79.4938,
   'A Char Dham in the Garhwal Himalayas, open only in the warmer months.',
   false, true, 'manual', 'https://badrinath-kedarnath.gov.in',
   '/jyotirlingas/kedarnath.png', false, null,
   'Jolly Grant Airport, Dehradun (317 km)', 'Rishikesh Railway Station (295 km)'),
  ('kamakhya', 'Kamakhya', 'Shakti', 'Assam', 26.1664, 91.7055,
   'One of the oldest Shakti Peethas, on the Nilachal hill above Guwahati.',
   false, true, 'manual', null,
   '/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png', false, null,
   'Guwahati Airport (20 km)', 'Kamakhya Railway Station (7 km)'),
  ('vaishno-devi', 'Vaishno Devi', 'Shakti', 'Jammu and Kashmir', 33.0308, 74.9490,
   'A cave shrine in the Trikuta hills reached by a pilgrim trek from Katra.',
   false, true, 'manual', 'https://www.maavaishnodevi.org',
   '/jyotirlingas/kedarnath.png', false, null,
   'Jammu Airport (50 km)', 'Shri Mata Vaishno Devi Katra (14 km)'),
  ('siddhivinayak', 'Siddhivinayak', 'Ganesha', 'Maharashtra', 19.0169, 72.8302,
   'Mumbai''s beloved Ganesha temple, busiest on Tuesdays and Sankashti.',
   false, true, 'manual', 'https://www.siddhivinayak.org',
   '/lovable-uploads/bed64bd3-3688-44d2-9bad-a6918b67c9a6.png', false, null,
   'Mumbai Airport (8 km)', 'Dadar Railway Station (3 km)'),
  ('shirdi-sai', 'Shirdi Sai Baba', 'Sai Baba', 'Maharashtra', 19.7667, 74.4769,
   'The samadhi shrine of Sai Baba, revered across faiths.',
   false, true, 'manual', 'https://www.sai.org.in',
   '/lovable-uploads/3c73bbb4-d8d9-439c-bac6-16dfc1940d71.png', false, null,
   'Shirdi Airport (14 km)', 'Sainagar Shirdi Railway Station (3 km)'),
  ('padmanabhaswamy', 'Padmanabhaswamy', 'Vishnu', 'Kerala', 8.4828, 76.9436,
   'The reclining Vishnu of Thiruvananthapuram, in Kerala temple architecture.',
   false, true, 'manual', null,
   '/lovable-uploads/55fb5f1f-b855-4295-a028-e2385fe97d48.png', false, null,
   'Trivandrum Airport (6 km)', 'Thiruvananthapuram Central (1 km)'),
  ('brihadeeswarar', 'Brihadeeswarar', 'Shiva', 'Tamil Nadu', 10.7828, 79.1318,
   'The Great Living Chola temple at Thanjavur — a UNESCO World Heritage Site.',
   false, true, 'manual', 'https://hrce.tn.gov.in',
   '/jyotirlingas/grishneshwar.png', true, 'HR&CE Tamil Nadu',
   'Tiruchirappalli Airport (58 km)', 'Thanjavur Railway Station (3 km)'),
  ('dwarkadhish', 'Dwarkadhish', 'Krishna', 'Gujarat', 22.2378, 68.9685,
   'The Char Dham seat of Krishna as king, on the Gomti at Dwarka.',
   false, true, 'manual', null,
   '/jyotirlingas/nageshvara.png', false, null,
   'Jamnagar Airport (137 km)', 'Dwarka Railway Station (2 km)'),
  ('akshardham-delhi', 'Akshardham', 'Swaminarayan', 'Delhi', 28.6127, 77.2773,
   'A modern Swaminarayan campus of carved sandstone on the Yamuna bank.',
   false, true, 'manual', 'https://akshardham.com',
   '/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png', false, null,
   'Delhi Airport (24 km)', 'Akshardham Metro (0.5 km)')
on conflict (slug) do update set
  name = excluded.name,
  deity = excluded.deity,
  state = excluded.state,
  lat = excluded.lat,
  lng = excluded.lng,
  blurb = excluded.blurb,
  official_website = excluded.official_website,
  hero_image = excluded.hero_image,
  is_verified = excluded.is_verified,
  nearest_airport = excluded.nearest_airport,
  nearest_railway = excluded.nearest_railway,
  updated_at = now();

-- ─── Seed: sample transparency report ─────────────────────────────────

insert into public.transparency_reports (
  quarter, total_donations,
  restoration_maintenance_pct, priest_stipends_pct, festivals_seva_pct,
  community_kitchens_pct, education_pct, published_at
)
select
  'Q1 2026', 12000000,
  42, 22, 18, 12, 6, now()
where not exists (
  select 1 from public.transparency_reports where quarter = 'Q1 2026'
);
