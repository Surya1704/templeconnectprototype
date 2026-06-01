# FaithConnect

Editorial platform for discovering India's temples, donating via official trust portals, and onboarding temple boards.

## Quick start

```bash
npm install
cp .env.example .env   # add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
npm run dev
```

Open **http://localhost:8080** (Vite default port in `vite.config.ts`).

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/explore` | Map + temple list |
| `/explore/:slug` | Temple detail |
| `/donate` | Donations & transparency |
| `/list-your-temple` | Trust onboarding form |
| `/about` | About, press, privacy, terms, contact |

Legacy paths (`/temples`, `/donations`, etc.) redirect to the routes above.

## Supabase

1. Create a Supabase project.
2. Run **`supabase-schema.sql`** in the SQL Editor (creates tables, RLS, seeds 12 Jyotirlingas + sample transparency report).
3. Copy project URL and anon key into `.env`.

Without Supabase, the app runs in **demo mode**: bundled Jyotirlingas and OpenStreetMap data still work; inquiries and transparency need the backend.

## Stack

- React 18 + Vite 5 + TypeScript
- Tailwind CSS 3
- Leaflet (CARTO Voyager tiles) + Overpass API
- Framer Motion + React Three Fiber (hero)
- Supabase (optional)

## Map data policy

- Base map: [CARTO Voyager](https://carto.com/) (not raw `tile.openstreetmap.org`)
- Temple POIs: Overpass API (debounced, cached)
- Geocoding: Nominatim with `User-Agent: FaithConnect/1.0`
