"use server"

import { supabase } from "@/lib/supabase"
import { isTimeSlotAvailable } from "@/lib/booking-utils"
import { revalidatePath } from "next/cache"

export type BookingFormData = {
  name: string
  email: string
  company?: string
  phone?: string
  date: string
  time: string
  notes?: string
}

export async function createBooking(formData: BookingFormData) {
  try {
    console.log("Creating booking with data:", formData)

    // Validate required fields
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      return {
        success: false,
        error: "Please fill in all required fields",
      }
    }

    // Normalize time format
    const normalizedTime = formData.time.length > 5 ? formData.time.slice(0, 5) : formData.time

    console.log("Checking availability for:", formData.date, normalizedTime)

    // Check if the time slot is still available
    const isAvailable = await isTimeSlotAvailable(formData.date, normalizedTime)
    console.log("Time slot available:", isAvailable)

    if (!isAvailable) {
      return {
        success: false,
        error: "This time slot is no longer available. Please select another time.",
      }
    }

    // Double-check by querying existing bookings directly
    const { data: existingBookings, error: checkError } = await supabase
      .from("bookings")
      .select("id, booking_time")
      .eq("booking_date", formData.date)
      .eq("status", "confirmed")

    if (checkError) {
      console.error("Error checking existing bookings:", checkError)
    } else {
      console.log("Existing bookings for date:", existingBookings)

      // Check if any existing booking conflicts
      const hasConflict = existingBookings?.some((booking) => {
        const existingTime = booking.booking_time.length > 5 ? booking.booking_time.slice(0, 5) : booking.booking_time
        return existingTime === normalizedTime
      })

      if (hasConflict) {
        return {
          success: false,
          error: "This time slot is no longer available. Please select another time.",
        }
      }
    }

    // Create the booking
    const { data, error } = await supabase
      .from("bookings")
      .insert({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        booking_date: formData.date,
        booking_time: normalizedTime,
        notes: formData.notes,
        timezone: "America/New_York",
        status: "confirmed",
      })
      .select()
      .single()

    if (error) {
      console.error("Booking creation error:", error)
      return {
        success: false,
        error: "Failed to create booking. Please try again.",
      }
    }

    console.log("Booking created successfully:", data)

    // Revalidate pages to show updated availability
    revalidatePath("/schedule")
    revalidatePath("/admin")

    return {
      success: true,
      booking: data,
      message: "Your discovery call has been scheduled successfully! You will receive a confirmation email shortly.",
    }
  } catch (error) {
    console.error("Booking error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}

export async function cancelBooking(bookingId: string) {
  try {
    const { error } = await supabase
      .from("bookings")
      .update({ status: "cancelled", updated_at: new Date().toISOString() })
      .eq("id", bookingId)

    if (error) {
      return {
        success: false,
        error: "Failed to cancel booking",
      }
    }

    revalidatePath("/schedule")
    revalidatePath("/admin")

    return {
      success: true,
      message: "Booking cancelled successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}

export async function updateBookingStatus(bookingId: string, status: string) {
  try {
    const { error } = await supabase
      .from("bookings")
      .update({ status, updated_at: new Date().toISOString() })
      .eq("id", bookingId)

    if (error) {
      return {
        success: false,
        error: "Failed to update booking status",
      }
    }

    revalidatePath("/admin")
    revalidatePath("/schedule")

    return {
      success: true,
      message: "Booking status updated successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}

export async function deleteBooking(bookingId: string) {
  try {
    const { error } = await supabase.from("bookings").delete().eq("id", bookingId)

    if (error) {
      return {
        success: false,
        error: "Failed to delete booking",
      }
    }

    revalidatePath("/admin")
    revalidatePath("/schedule")

    return {
      success: true,
      message: "Booking deleted successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}

export async function addBlockedDate(date: string, reason?: string) {
  try {
    const { error } = await supabase.from("blocked_dates").insert({ blocked_date: date, reason })

    if (error) {
      return {
        success: false,
        error: "Failed to add blocked date",
      }
    }

    revalidatePath("/admin")
    revalidatePath("/schedule")

    return {
      success: true,
      message: "Date blocked successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}

export async function removeBlockedDate(id: string) {
  try {
    const { error } = await supabase.from("blocked_dates").delete().eq("id", id)

    if (error) {
      return {
        success: false,
        error: "Failed to remove blocked date",
      }
    }

    revalidatePath("/admin")
    revalidatePath("/schedule")

    return {
      success: true,
      message: "Blocked date removed successfully",
    }
  } catch (error) {
    return {
      success: false,
      error: "An unexpected error occurred",
    }
  }
}
