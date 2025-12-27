import { createClient } from "@supabase/supabase-js"

// Manual Supabase configuration
// You'll need to replace these with your actual Supabase project details
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "YOUR_SUPABASE_URL"
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "YOUR_SUPABASE_ANON_KEY"

// For development/testing, you can use a mock implementation
const isDevelopment = !process.env.NEXT_PUBLIC_SUPABASE_URL

const mockSupabaseClient = {
  from: (table: string) => ({
    select: (columns?: string) => {
      console.log(`Mock: SELECT ${columns || "*"} FROM ${table}`)
      return Promise.resolve({
        data: getMockData(table),
        error: null,
      })
    },
    insert: (data: any) => {
      console.log(`Mock: INSERT INTO ${table}`, data)
      return Promise.resolve({
        data: { ...data, id: `mock-${Date.now()}` },
        error: null,
      })
    },
    update: (data: any) => ({
      eq: (column: string, value: any) => {
        console.log(`Mock: UPDATE ${table} SET`, data, `WHERE ${column} = ${value}`)
        return Promise.resolve({ data: null, error: null })
      },
    }),
    delete: () => ({
      eq: (column: string, value: any) => {
        console.log(`Mock: DELETE FROM ${table} WHERE ${column} = ${value}`)
        return Promise.resolve({ data: null, error: null })
      },
    }),
    eq: function (column: string, value: any) {
      console.log(`Mock: WHERE ${column} = ${value}`)
      return this
    },
    order: function (column: string, options?: any) {
      console.log(`Mock: ORDER BY ${column}`, options)
      return this
    },
    single: function () {
      console.log(`Mock: LIMIT 1`)
      return this
    },
  }),
}

// Mock data for development
function getMockData(table: string) {
  switch (table) {
    case "bookings":
      return [
        {
          id: "mock-1",
          name: "John Smith",
          email: "john@example.com",
          company: "Smith Realty",
          phone: "(555) 123-4567",
          booking_date: "2024-02-15",
          booking_time: "10:00:00",
          status: "confirmed",
          notes: "Interested in process automation",
          created_at: "2024-01-28T10:00:00Z",
          updated_at: "2024-01-28T10:00:00Z",
        },
        {
          id: "mock-2",
          name: "Sarah Johnson",
          email: "sarah@coastalprops.com",
          company: "Coastal Properties",
          phone: "(555) 987-6543",
          booking_date: "2024-02-16",
          booking_time: "14:00:00",
          status: "confirmed",
          notes: "Looking to optimize CRM system",
          created_at: "2024-01-28T11:00:00Z",
          updated_at: "2024-01-28T11:00:00Z",
        },
        {
          id: "mock-3",
          name: "Mike Chen",
          email: "mike@metroreal.com",
          company: "Metro Real Estate",
          phone: "(555) 456-7890",
          booking_date: "2024-02-14",
          booking_time: "09:00:00",
          status: "completed",
          notes: "Data analytics consultation",
          created_at: "2024-01-27T09:00:00Z",
          updated_at: "2024-01-28T09:00:00Z",
        },
      ]

    case "availability":
      return [
        {
          id: "avail-1",
          day_of_week: 1,
          start_time: "09:00:00",
          end_time: "17:00:00",
          is_active: true,
          created_at: "2024-01-28T00:00:00Z",
        },
        {
          id: "avail-2",
          day_of_week: 2,
          start_time: "09:00:00",
          end_time: "17:00:00",
          is_active: true,
          created_at: "2024-01-28T00:00:00Z",
        },
        {
          id: "avail-3",
          day_of_week: 3,
          start_time: "09:00:00",
          end_time: "17:00:00",
          is_active: true,
          created_at: "2024-01-28T00:00:00Z",
        },
        {
          id: "avail-4",
          day_of_week: 4,
          start_time: "09:00:00",
          end_time: "17:00:00",
          is_active: true,
          created_at: "2024-01-28T00:00:00Z",
        },
        {
          id: "avail-5",
          day_of_week: 5,
          start_time: "09:00:00",
          end_time: "17:00:00",
          is_active: true,
          created_at: "2024-01-28T00:00:00Z",
        },
      ]

    case "blocked_dates":
      return [
        {
          id: "blocked-1",
          blocked_date: "2024-02-19",
          reason: "Presidents Day Holiday",
          created_at: "2024-01-28T00:00:00Z",
        },
        {
          id: "blocked-2",
          blocked_date: "2024-03-15",
          reason: "Company Retreat",
          created_at: "2024-01-28T00:00:00Z",
        },
      ]

    default:
      return []
  }
}

export const supabase = isDevelopment ? mockSupabaseClient : createClient(supabaseUrl, supabaseAnonKey)
export const isSupabaseConfigured = !isDevelopment

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
