"use client"

import type React from "react"
import Link from "next/link"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Mail, Building, Phone, CheckCircle } from "lucide-react"
import { createBooking } from "@/actions/booking-actions"
import { getAvailableTimeSlotsForDate, formatTimeSlot } from "@/lib/booking-utils"
import type { BookingFormData } from "@/actions/booking-actions"

export function SimpleBookingForm() {
  const [step, setStep] = useState<"form" | "success">("form")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  })

  // Load available time slots when date changes
  useEffect(() => {
    if (formData.preferredDate) {
      loadAvailableSlots(formData.preferredDate)
    } else {
      setAvailableSlots([])
    }
  }, [formData.preferredDate])

  const loadAvailableSlots = async (dateString: string) => {
    setLoadingSlots(true)
    setError(null)

    try {
      console.log("Loading slots for date:", dateString)
      const date = new Date(dateString)

      // Check if it's a valid date
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date")
      }

      const slots = await getAvailableTimeSlotsForDate(date)
      console.log("Available slots:", slots)

      setAvailableSlots(slots)

      // Clear selected time if it's no longer available
      if (formData.preferredTime && !slots.includes(formData.preferredTime)) {
        setFormData((prev) => ({ ...prev, preferredTime: "" }))
      }
    } catch (error) {
      console.error("Error loading available slots:", error)
      setError("Failed to load available time slots. Please try again.")
      setAvailableSlots([])
    } finally {
      setLoadingSlots(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    console.log("Submitting form with data:", formData)

    const bookingData: BookingFormData = {
      name: formData.name,
      email: formData.email,
      company: formData.company || undefined,
      phone: formData.phone || undefined,
      date: formData.preferredDate,
      time: formData.preferredTime,
      notes: formData.notes || undefined,
    }

    try {
      const result = await createBooking(bookingData)
      console.log("Booking result:", result)

      if (result.success) {
        setSuccess(result.message!)
        setStep("success")
      } else {
        setError(result.error!)
      }
    } catch (err) {
      console.error("Form submission error:", err)
      setError("Failed to submit booking request. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setStep("form")
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      notes: "",
    })
    setError(null)
    setSuccess(null)
    setAvailableSlots([])
  }

  if (step === "success") {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <CardTitle className="text-green-600">Booking Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-sm text-slate-600">
            <p>{success}</p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg text-left">
              <p>
                <strong>Name:</strong> {formData.name}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              {formData.company && (
                <p>
                  <strong>Company:</strong> {formData.company}
                </p>
              )}
              {formData.preferredDate && (
                <p>
                  <strong>Date:</strong> {new Date(formData.preferredDate).toLocaleDateString()}
                </p>
              )}
              {formData.preferredTime && (
                <p>
                  <strong>Time:</strong> {formatTimeSlot(formData.preferredTime)}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button onClick={resetForm} variant="outline" className="w-full bg-transparent">
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <CardTitle>Schedule Discovery Call</CardTitle>
          </div>
          <Button asChild variant="ghost" size="sm" className="text-slate-500 hover:text-slate-700">
            <Link href="/">← Home</Link>
          </Button>
        </div>
        <p className="text-sm text-slate-600">Fill out the form below to schedule your 30-minute consultation.</p>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Full Name *
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              placeholder="Enter your full name"
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
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <Label htmlFor="company" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Company/Brokerage
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
              placeholder="Enter your company name"
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
              value={formData.phone}
              onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
              placeholder="Enter your phone number"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="preferredDate">Preferred Date *</Label>
              <Input
                id="preferredDate"
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData((prev) => ({ ...prev, preferredDate: e.target.value }))}
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div>
              <Label htmlFor="preferredTime" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Preferred Time *
              </Label>
              <select
                id="preferredTime"
                required
                value={formData.preferredTime}
                onChange={(e) => setFormData((prev) => ({ ...prev, preferredTime: e.target.value }))}
                disabled={!formData.preferredDate || loadingSlots}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">
                  {!formData.preferredDate ? "Select date first" : loadingSlots ? "Loading..." : "Select time"}
                </option>
                {availableSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {formatTimeSlot(slot)}
                  </option>
                ))}
              </select>
              {formData.preferredDate && availableSlots.length === 0 && !loadingSlots && (
                <p className="text-xs text-red-600 mt-1">No available time slots for this date</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              placeholder="Tell us about your current challenges or what you'd like to discuss..."
              value={formData.notes}
              onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading || !formData.preferredTime || availableSlots.length === 0}
          >
            {loading ? "Scheduling..." : "Schedule Discovery Call"}
          </Button>

          <p className="text-xs text-slate-500 text-center">
            You'll receive a confirmation email once your booking is processed
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
