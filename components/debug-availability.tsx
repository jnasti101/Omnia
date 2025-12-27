"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { getAvailableTimeSlotsForDate } from "@/lib/booking-utils"

export function DebugAvailability() {
  const [debugInfo, setDebugInfo] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const runDebug = async () => {
    setLoading(true)
    try {
      // Check availability table
      const { data: availability } = await supabase.from("availability").select("*").order("day_of_week")

      // Check bookings for the specific date
      const { data: bookings } = await supabase.from("bookings").select("*").eq("booking_date", "2025-07-29")

      // Check blocked dates
      const { data: blockedDates } = await supabase.from("blocked_dates").select("*")

      // Test the specific date
      const testDate = new Date("2025-07-29")
      const availableSlots = await getAvailableTimeSlotsForDate(testDate)

      setDebugInfo({
        availability,
        bookings,
        blockedDates,
        testDate: {
          date: "2025-07-29",
          dayOfWeek: testDate.getDay(),
          availableSlots,
        },
      })
    } catch (error) {
      console.error("Debug error:", error)
      setDebugInfo({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Debug Availability System</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={runDebug} disabled={loading}>
          {loading ? "Running Debug..." : "Run Debug Check"}
        </Button>

        {debugInfo && (
          <div className="space-y-4">
            <div className="bg-slate-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Debug Results:</h3>
              <pre className="text-xs overflow-auto">{JSON.stringify(debugInfo, null, 2)}</pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
