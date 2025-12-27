"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Calendar, Clock, User, Mail, Building, Phone } from "lucide-react"
import { getAvailableTimeSlotsForDate, formatTimeSlot } from "@/lib/booking-utils"
import { createBooking } from "@/actions/booking-actions"
import type { BookingFormData } from "@/actions/booking-actions"

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState<"date" | "time" | "form" | "confirmation">("date")
  const [formData, setFormData] = useState<Partial<BookingFormData>>({})
  const [submitLoading, setSubmitLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const today = new Date()
  const currentMonth = currentDate.getMonth()
  const currentYear = currentDate.getFullYear()

  // Get first day of month and number of days
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1)
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0)
  const firstDayWeekday = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  // Generate calendar days
  const calendarDays = []

  // Add empty cells for days before month starts
  for (let i = 0; i < firstDayWeekday; i++) {
    calendarDays.push(null)
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(new Date(currentYear, currentMonth, day))
  }

  const navigateMonth = (direction: "prev" | "next") => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev)
      if (direction === "prev") {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const selectDate = async (date: Date) => {
    setSelectedDate(date)
    setSelectedTime(null)
    setLoading(true)
    setError(null)

    try {
      const slots = await getAvailableTimeSlotsForDate(date)
      setAvailableSlots(slots)
      setStep("time")
    } catch (err) {
      setError("Failed to load available time slots")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const selectTime = (time: string) => {
    setSelectedTime(time)
    setStep("form")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedDate || !selectedTime) return

    setSubmitLoading(true)
    setError(null)

    const bookingData: BookingFormData = {
      name: formData.name!,
      email: formData.email!,
      company: formData.company,
      phone: formData.phone,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
      notes: formData.notes,
    }

    const result = await createBooking(bookingData)

    if (result.success) {
      setSuccess(result.message!)
      setStep("confirmation")
    } else {
      setError(result.error!)
    }

    setSubmitLoading(false)
  }

  const resetBooking = () => {
    setStep("date")
    setSelectedDate(null)
    setSelectedTime(null)
    setFormData({})
    setError(null)
    setSuccess(null)
  }

  const isDateAvailable = (date: Date) => {
    if (date < today) return false
    if (date.getDay() === 0 || date.getDay() === 6) return false // Weekend
    return true
  }

  if (step === "confirmation") {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-green-600">Booking Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-sm text-slate-600">
            <p>{success}</p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p>
                <strong>Date:</strong> {selectedDate?.toLocaleDateString()}
              </p>
              <p>
                <strong>Time:</strong> {selectedTime && formatTimeSlot(selectedTime)}
              </p>
              <p>
                <strong>Duration:</strong> 30 minutes
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={resetBooking} variant="outline" className="w-full bg-transparent">
              Schedule Another Call
            </Button>
            <Button asChild variant="ghost" className="w-full">
              <Link href="/">← Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Schedule Discovery Call
        </CardTitle>
        <div className="flex items-center justify-between">
          {step !== "date" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setStep(step === "time" ? "date" : step === "form" ? "time" : "date")}
              className="self-start"
            >
              ← Back
            </Button>
          )}
          <Button asChild variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
            <Link href="/">← Home</Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">{error}</div>
        )}

        {step === "date" && (
          <div className="space-y-4">
            {/* Month Navigation */}
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateMonth("prev")}
                disabled={currentMonth === today.getMonth() && currentYear === today.getFullYear()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h3 className="font-semibold">
                {MONTHS[currentMonth]} {currentYear}
              </h3>
              <Button variant="ghost" size="sm" onClick={() => navigateMonth("next")}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {DAYS.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-slate-500 p-2">
                  {day}
                </div>
              ))}
              {calendarDays.map((date, index) => (
                <div key={index} className="aspect-square">
                  {date && (
                    <Button
                      variant={selectedDate?.toDateString() === date.toDateString() ? "default" : "ghost"}
                      size="sm"
                      className="w-full h-full"
                      disabled={!isDateAvailable(date)}
                      onClick={() => selectDate(date)}
                    >
                      {date.getDate()}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {step === "time" && (
          <div className="space-y-4">
            <div className="text-center">
              <p className="font-medium">{selectedDate?.toLocaleDateString()}</p>
              <p className="text-sm text-slate-600">Select a time slot</p>
            </div>

            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-sm text-slate-600 mt-2">Loading available times...</p>
              </div>
            ) : availableSlots.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {availableSlots.map((time) => (
                  <Button
                    key={time}
                    variant="outline"
                    size="sm"
                    onClick={() => selectTime(time)}
                    className="flex items-center gap-2"
                  >
                    <Clock className="h-4 w-4" />
                    {formatTimeSlot(time)}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-600">No available time slots for this date.</p>
                <Button variant="ghost" onClick={() => setStep("date")} className="mt-2">
                  Choose another date
                </Button>
              </div>
            )}
          </div>
        )}

        {step === "form" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-4">
              <p className="font-medium">{selectedDate?.toLocaleDateString()}</p>
              <p className="text-sm text-slate-600">{selectedTime && formatTimeSlot(selectedTime)} (30 minutes)</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name || ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email || ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="company" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Company/Brokerage
                </Label>
                <Input
                  id="company"
                  value={formData.company || ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone || ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Tell us about your current challenges or what you'd like to discuss..."
                  value={formData.notes || ""}
                  onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
                />
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={submitLoading}>
              {submitLoading ? "Scheduling..." : "Confirm Booking"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
