import { createClient } from "@supabase/supabase-js"

// Use the environment variables provided by the Supabase integration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const isSupabaseConfigured = true

export type Booking = {
  id: string
  name: string
  email: string
  company?: string
  phone?: string
  booking_date: string
  booking_time: string
  timezone: string
  status: "confirmed" | "cancelled" | "completed"
  notes?: string
  created_at: string
  updated_at: string
}

export type Availability = {
  id: string
  day_of_week: number
  start_time: string
  end_time: string
  is_active: boolean
  created_at: string
}

export type BlockedDate = {
  id: string
  blocked_date: string
  reason?: string
  created_at: string
}
