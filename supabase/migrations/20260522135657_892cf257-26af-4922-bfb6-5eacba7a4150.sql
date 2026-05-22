
CREATE TABLE public.temples (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  location TEXT NOT NULL,
  state TEXT NOT NULL,
  rating NUMERIC(3,2) DEFAULT 0,
  image TEXT,
  hours TEXT,
  price INTEGER DEFAULT 0,
  tags TEXT[] DEFAULT '{}',
  description TEXT,
  congestion TEXT,
  donation_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.temples ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Temples are publicly readable"
  ON public.temples FOR SELECT
  USING (true);

CREATE INDEX idx_temples_state ON public.temples(state);
CREATE INDEX idx_temples_name ON public.temples(name);
