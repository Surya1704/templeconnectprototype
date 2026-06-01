create extension if not exists pgcrypto;
create extension if not exists postgis;
create extension if not exists pg_trgm;

create type public.donation_status as enum ('draft', 'payment_pending', 'completed', 'failed');
create type public.inquiry_status as enum ('new', 'contacted', 'pilot', 'closed');

create table public.temple_profiles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  name_local text,
  deity text,
  state text not null,
  district text,
  town text,
  location geography(point, 4326),
  source text not null default 'curated',
  is_jyotirlinga boolean not null default false,
  trust_name text,
  verification_status text not null default 'unverified',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.osm_temples (
  osm_id text primary key,
  name text not null,
  name_local text,
  deity text,
  state text,
  district text,
  town text,
  location geography(point, 4326) not null,
  raw_tags jsonb not null default '{}'::jsonb,
  fetched_at timestamptz not null default now()
);

create table public.donation_intents (
  id uuid primary key default gen_random_uuid(),
  temple_ref text not null,
  amount_inr integer not null check (amount_inr > 0),
  donor_email text,
  status public.donation_status not null default 'draft',
  payment_provider text default 'razorpay',
  provider_order_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.temple_inquiries (
  id uuid primary key default gen_random_uuid(),
  trust_name text not null,
  contact_name text not null,
  state text not null,
  donation_volume text not null,
  phone text not null,
  note text,
  status public.inquiry_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.transparency_reports (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  quarter text not null,
  published_on date not null,
  pdf_url text,
  totals jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.crm_audit_events (
  id uuid primary key default gen_random_uuid(),
  temple_profile_id uuid references public.temple_profiles(id) on delete cascade,
  actor_id uuid,
  event_type text not null,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index temple_profiles_location_idx on public.temple_profiles using gist (location);
create index temple_profiles_name_trgm_idx on public.temple_profiles using gin (name gin_trgm_ops);
create index temple_profiles_state_idx on public.temple_profiles (state);
create index osm_temples_location_idx on public.osm_temples using gist (location);
create index osm_temples_name_trgm_idx on public.osm_temples using gin (name gin_trgm_ops);
create index donation_intents_status_idx on public.donation_intents (status, created_at desc);
create index temple_inquiries_status_idx on public.temple_inquiries (status, created_at desc);

alter table public.temple_profiles enable row level security;
alter table public.osm_temples enable row level security;
alter table public.donation_intents enable row level security;
alter table public.temple_inquiries enable row level security;
alter table public.transparency_reports enable row level security;
alter table public.crm_audit_events enable row level security;

create policy "Public can read verified temple profiles"
  on public.temple_profiles for select
  using (verification_status = 'verified' or is_jyotirlinga = true);

create policy "Public can read cached OSM temples"
  on public.osm_temples for select
  using (true);

create policy "Public can create donation intents"
  on public.donation_intents for insert
  with check (amount_inr > 0);

create policy "Public can create temple inquiries"
  on public.temple_inquiries for insert
  with check (length(trust_name) > 1 and length(phone) >= 8);

create policy "Public can read transparency reports"
  on public.transparency_reports for select
  using (true);

create policy "Service role owns CRM audit events"
  on public.crm_audit_events for all
  using (auth.role() = 'service_role')
  with check (auth.role() = 'service_role');
