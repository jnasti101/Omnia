import { supabase } from "./supabase"
import type { Availability, Booking, BlockedDate } from "./supabase"

export const MEETING_DURATION = 30 // minutes
export const TIMEZONE = "America/New_York"

export function generateTimeSlots(startTime: string, endTime: string, duration: number = MEETING_DURATION): string[] {
  const slots: string[] = []
  const start = new Date(`2000-01-01T${startTime}`)
  const end = new Date(`2000-01-01T${endTime}`)

  const current = new Date(start)

  while (current < end) {
    slots.push(current.toTimeString().slice(0, 5))
    current.setMinutes(current.getMinutes() + duration)
  }

  return slots
}

export function formatTimeSlot(time: string): string {
  const [hours, minutes] = time.split(":")
  const hour = Number.parseInt(hours)
  const ampm = hour >= 12 ? "PM" : "AM"
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
  return `${displayHour}:${minutes} ${ampm}`
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay()
  return day === 0 || day === 6 // Sunday or Saturday
}

export function isPastDate(date: Date): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

// Helper function to create a date in local timezone from YYYY-MM-DD string
function createLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split("-").map(Number)
  return new Date(year, month - 1, day) // month is 0-indexed
}

export function isPastTimeSlot(bookingDate: Date, time: string): boolean {
  const now = new Date()

  // Get today's date (current date) in local timezone
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Convert booking date to local date to avoid timezone issues
  const bookingDateString = bookingDate.toISOString().split("T")[0] // Get YYYY-MM-DD
  const bookingDateLocal = createLocalDate(bookingDateString)

  // Create the full slot datetime in local timezone
  const [hours, minutes] = time.split(":")
  const slotDateTime = new Date(bookingDateLocal)
  slotDateTime.setHours(Number.parseInt(hours), Number.parseInt(minutes), 0, 0)

  console.log(`[PAST_CHECK] ===== DETAILED PAST CHECK =====`)
  console.log(`[PAST_CHECK] Input booking date:`, bookingDate)
  console.log(`[PAST_CHECK] Booking date string:`, bookingDateString)
  console.log(`[PAST_CHECK] Input time:`, time)
  console.log(`[PAST_CHECK] Today (current date):`, today.toISOString().split("T")[0])
  console.log(`[PAST_CHECK] Booking date local:`, bookingDateLocal.toISOString().split("T")[0])
  console.log(`[PAST_CHECK] Current time:`, now.toISOString())
  console.log(`[PAST_CHECK] Slot datetime:`, slotDateTime.toISOString())
  console.log(`[PAST_CHECK] Booking date > today?`, bookingDateLocal > today)
  console.log(`[PAST_CHECK] Booking date === today?`, bookingDateLocal.getTime() === today.getTime())
  console.log(`[PAST_CHECK] ===== END DETAILED CHECK =====`)

  // If the booking is on a future date, no slots are past
  if (bookingDateLocal > today) {
    console.log(`[PAST_CHECK] Future date - slot is NOT past`)
    return false
  }

  // If it's today, check if the specific time has passed
  if (bookingDateLocal.getTime() === today.getTime()) {
    const isPast = slotDateTime <= now
    console.log(`[PAST_CHECK] Today's slot - isPast: ${isPast}`)
    return isPast
  }

  // If it's a past date, all slots are past
  console.log(`[PAST_CHECK] Past date - slot IS past`)
  return true
}

export async function getAvailability(): Promise<Availability[]> {
  const { data, error } = await supabase.from("availability").select("*").eq("is_active", true).order("day_of_week")

  if (error) throw error
  return data || []
}

export async function getBookingsForDate(date: string): Promise<Booking[]> {
  const { data, error } = await supabase.from("bookings").select("*").eq("booking_date", date).eq("status", "confirmed")

  if (error) throw error
  return data || []
}

export async function getBlockedDates(): Promise<BlockedDate[]> {
  const { data, error } = await supabase.from("blocked_dates").select("*")

  if (error) throw error
  return data || []
}

export async function isDateBlocked(date: string): Promise<boolean> {
  try {
    const { data, error } = await supabase.from("blocked_dates").select("id").eq("blocked_date", date).single()

    if (error && error.code !== "PGRST116") {
      console.error("Error checking blocked dates:", error)
      return false // Don't block if we can't check
    }

    return !!data
  } catch (error) {
    console.error("Error in isDateBlocked:", error)
    return false
  }
}

export async function getAvailableTimeSlotsForDate(date: Date): Promise<string[]> {
  // Fix timezone issue by creating a proper local date
  const dateString = date.toISOString().split("T")[0]
  const localDate = createLocalDate(dateString)
  const dayOfWeek = localDate.getDay()

  console.log(`[AVAILABILITY] ===== DEBUG DATE PARSING =====`)
  console.log(`[AVAILABILITY] Input date object:`, date)
  console.log(`[AVAILABILITY] Date string:`, dateString)
  console.log(`[AVAILABILITY] Local date:`, localDate)
  console.log(`[AVAILABILITY] Local date toString():`, localDate.toString())
  console.log(`[AVAILABILITY] Local date getDay():`, localDate.getDay())
  console.log(`[AVAILABILITY] Checking availability for date: ${dateString}, day of week: ${dayOfWeek}`)
  console.log(`[AVAILABILITY] ===== END DEBUG =====`)

  // Check if date is blocked
  try {
    const blocked = await isDateBlocked(dateString)
    console.log(`[AVAILABILITY] Date blocked: ${blocked}`)
    if (blocked) return []
  } catch (error) {
    console.error("Error checking blocked dates:", error)
  }

  // Check if it's a weekend
  if (isWeekend(localDate)) {
    console.log(`[AVAILABILITY] Date is weekend, no availability`)
    return []
  }

  // Check if it's in the past
  if (isPastDate(localDate)) {
    console.log(`[AVAILABILITY] Date is in the past, no availability`)
    return []
  }

  // Get availability for this day of week
  try {
    console.log(`[AVAILABILITY] Querying availability for day_of_week: ${dayOfWeek}`)

    const { data: availability, error: availError } = await supabase
      .from("availability")
      .select("*")
      .eq("day_of_week", dayOfWeek)
      .eq("is_active", true)

    console.log(`[AVAILABILITY] Availability query result:`, { availability, error: availError })

    if (availError) {
      console.error("Error fetching availability:", availError)
      return []
    }

    if (!availability || availability.length === 0) {
      console.log(`[AVAILABILITY] No availability found for day ${dayOfWeek}`)
      return []
    }

    // Use the first availability record (there should only be one per day)
    const dayAvailability = availability[0]
    console.log(`[AVAILABILITY] Using availability:`, dayAvailability)

    // Generate all possible time slots
    const allSlots = generateTimeSlots(dayAvailability.start_time, dayAvailability.end_time)
    console.log(`[AVAILABILITY] Generated time slots:`, allSlots)

    // Get existing bookings for this date
    const bookings = await getBookingsForDate(dateString)
    console.log(`[AVAILABILITY] Existing bookings:`, bookings)

    const bookedTimes = bookings.map((booking) => {
      // Normalize time format - remove seconds if present
      const timeStr = booking.booking_time
      return timeStr.length > 5 ? timeStr.slice(0, 5) : timeStr
    })
    console.log(`[AVAILABILITY] Booked times:`, bookedTimes)

    // Filter out booked slots and past slots
    const availableSlots = allSlots.filter((slot) => {
      const isBooked = bookedTimes.includes(slot)
      const isPast = isPastTimeSlot(localDate, slot)

      console.log(`[AVAILABILITY] Slot ${slot}: booked=${isBooked}, past=${isPast}`)

      if (isBooked) return false
      if (isPast) return false
      return true
    })

    console.log(`[AVAILABILITY] Final available slots:`, availableSlots)
    return availableSlots
  } catch (error) {
    console.error("Error in getAvailableTimeSlotsForDate:", error)
    return []
  }
}

export async function isTimeSlotAvailable(date: string, time: string): Promise<boolean> {
  try {
    console.log(`[SLOT_CHECK] Checking if ${time} is available on ${date}`)

    // Create local date to avoid timezone issues
    const dateObj = createLocalDate(date)
    console.log(`[SLOT_CHECK] Date object:`, dateObj, `Day of week: ${dateObj.getDay()}`)

    const availableSlots = await getAvailableTimeSlotsForDate(dateObj)
    console.log(`[SLOT_CHECK] Available slots for date:`, availableSlots)

    // Normalize time format for comparison
    const normalizedTime = time.length > 5 ? time.slice(0, 5) : time
    console.log(`[SLOT_CHECK] Normalized time: ${normalizedTime}`)

    const isAvailable = availableSlots.includes(normalizedTime)
    console.log(`[SLOT_CHECK] Time slot ${normalizedTime} available: ${isAvailable}`)

    return isAvailable
  } catch (error) {
    console.error("Error checking time slot availability:", error)
    return false
  }
}
