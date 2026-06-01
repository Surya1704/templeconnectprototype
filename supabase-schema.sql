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
  image_urls text[] default '{}',
  hero_image text,
  accessibility_notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

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

create index if not exists temples_slug_idx on public.temples (slug);
create index if not exists temples_state_idx on public.temples (state);
create index if not exists temples_verified_idx on public.temples (is_verified) where is_verified;
create index if not exists inquiries_status_idx on public.inquiries (status, created_at desc);

-- ─── RLS ──────────────────────────────────────────────────────────────

alter table public.temples enable row level security;
alter table public.inquiries enable row level security;
alter table public.transparency_reports enable row level security;

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

-- ─── Seed: 12 Jyotirlingas ────────────────────────────────────────────

insert into public.temples (
  slug, name, deity, state, lat, lng, blurb,
  is_jyotirlinga, is_verified, source, donation_link, official_website, hero_image,
  hrce_managed, hrce_department
) values
  ('somnath', 'Somnath', 'Shiva', 'Gujarat', 20.888, 70.4011,
   'The first among the twelve, destroyed and rebuilt across millennia.',
   true, true, 'bundled', 'https://somnath.org/donate', 'https://somnath.org',
   '/lovable-uploads/006968a1-560a-479d-8493-50f8639dce12.png', false, null),
  ('mallikarjuna', 'Mallikarjuna', 'Shiva & Parvati', 'Andhra Pradesh', 16.0739, 78.8687,
   'Nestled on the Sri Sailam hill, a revered Shakti Peetha alongside a Jyotirlinga.',
   true, true, 'bundled', 'https://srisailamonline.com/donate', 'https://srisailamonline.com',
   '/lovable-uploads/b27d0b3a-4090-4b23-804a-b569ee1c971b.png', false, null),
  ('mahakaleshwar', 'Mahakaleshwar', 'Shiva', 'Madhya Pradesh', 23.1828, 75.7682,
   'The only Jyotirlinga facing south. The Bhasma Aarti here is legendary.',
   true, true, 'bundled', 'https://mahakaleshwar.nic.in/donate', 'https://mahakaleshwar.nic.in',
   '/lovable-uploads/b668b893-dac5-4d67-9be0-425045941429.png', false, null),
  ('omkareshwar', 'Omkareshwar', 'Shiva', 'Madhya Pradesh', 22.2473, 76.1502,
   'Shaped like the Om symbol, an island in the Narmada.',
   true, true, 'bundled', 'https://omkareshwar.temple.org.in/donate', 'https://omkareshwar.temple.org.in',
   '/lovable-uploads/bff90acf-434f-4b5d-a02a-f8cd060e2ec9.png', false, null),
  ('kedarnath', 'Kedarnath', 'Shiva', 'Uttarakhand', 30.7352, 79.0669,
   'At 3,583m in the Garhwal Himalayas. One of the Char Dhams.',
   true, true, 'bundled', 'https://badarinath-kedarnath.gov.in/donation', 'https://badarinath-kedarnath.gov.in',
   '/lovable-uploads/8a415d87-63d9-44f9-bb8e-583856ad0fa5.png', false, null),
  ('bhimashankar', 'Bhimashankar', 'Shiva', 'Maharashtra', 19.0728, 73.5354,
   'In the Sahyadri hills, source of the Bhima river.',
   true, true, 'bundled', 'https://bhimashankar.temple.org.in/donate', 'https://bhimashankar.temple.org.in',
   '/lovable-uploads/bed64bd3-3688-44d2-9bad-a6918b67c9a6.png', false, null),
  ('kashi-vishwanath', 'Kashi Vishwanath', 'Shiva', 'Uttar Pradesh', 25.3109, 83.0107,
   'In the oldest living city on Earth.',
   true, true, 'bundled', 'https://shrikashivishwanath.org/donation', 'https://shrikashivishwanath.org',
   '/lovable-uploads/ea8558eb-ef06-4c98-8f0c-23095bb29074.png', false, null),
  ('trimbakeshwar', 'Trimbakeshwar', 'Shiva', 'Maharashtra', 19.9322, 73.5292,
   'Source of the Godavari. Three faces embodying Brahma, Vishnu, and Shiva.',
   true, true, 'bundled', 'https://trimbakeshwar.temple.org.in/donate', 'https://trimbakeshwar.temple.org.in',
   '/lovable-uploads/3c73bbb4-d8d9-439c-bac6-16dfc1940d71.png', false, null),
  ('vaidyanath', 'Baidyanath', 'Shiva', 'Jharkhand', 24.492, 86.7,
   'The healer. In Deoghar, a major eastern pilgrimage site.',
   true, true, 'bundled', 'https://baidyanathdham.in/donate', 'https://baidyanathdham.in',
   '/lovable-uploads/3e630441-b218-447f-a772-6d16110739b2.png', false, null),
  ('nageshvara', 'Nageshvara', 'Shiva', 'Gujarat', 22.407, 69.0823,
   'Near Dwarka, on the coast of Saurashtra.',
   true, true, 'bundled', 'https://nageshwar.temple.org.in/donate', 'https://nageshwar.temple.org.in',
   '/lovable-uploads/f6e17f2f-fd67-45c1-8f9b-bdd05ef346ce.png', false, null),
  ('rameshwaram', 'Rameshwaram', 'Shiva', 'Tamil Nadu', 9.2881, 79.3174,
   'The southernmost Char Dham. Longest corridor of any Hindu temple.',
   true, true, 'bundled', 'https://hrce.tn.gov.in/hrceadmin/donation', 'https://hrce.tn.gov.in',
   '/lovable-uploads/c868ae47-1318-4239-9e0b-8e11ffd2ab53.png', true, 'HR&CE Tamil Nadu'),
  ('grishneshwar', 'Grishneshwar', 'Shiva', 'Maharashtra', 20.0269, 75.1791,
   'The smallest and last of the twelve. Near the Ellora caves.',
   true, true, 'bundled', 'https://grishneshwar.temple.org.in/donate', 'https://grishneshwar.temple.org.in',
   '/lovable-uploads/55fb5f1f-b855-4295-a028-e2385fe97d48.png', false, null)
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
