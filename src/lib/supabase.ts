import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface Religion {
  id: string
  name: string
  slug: string
  created_at: string
}

export interface Temple {
  id: string
  name: string
  slug: string
  location: string
  state: string
  religion_id: string | null
  deity: string | null
  description: string | null
  image_url: string | null
  donation_url: string | null
  is_jyotirlinga: boolean
  latitude: number | null
  longitude: number | null
  timings: string | null
  verified: boolean
  created_at: string
  updated_at: string
  // Joined data
  religion?: Religion
}
