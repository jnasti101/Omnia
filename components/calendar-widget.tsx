"use client"

import type React from "react"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Slot = { time: string; iso: string }
type DaySlots = { date: string; slots: Slot[] }

type BookingFormData = {
  name: string
  email: string
  company?: string
  phone?: string
  notes?: string
}

function toDateString(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, "0")
  const d = String(date.getDate()).padStart(2, "0")
  return `${y}-${m}-${d}`
}

function parseDateString(s: string): Date {
  const [y, m, d] = s.split("-").map(Number)
  return new Date(y, m - 1, d)
}

function startOfWeekFromToday(): Date {
  const t = new Date()
  t.setHours(0, 0, 0, 0)
  return t
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

function detectTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"
  } catch {
    return "UTC"
  }
}

function formatTimeInZone(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso))
}

function shortTimezoneLabel(tz: string): string {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "short" }).formatToParts(new Date())
  return parts.find((p) => p.type === "timeZoneName")?.value ?? tz
}

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function CalendarWidget() {
  const [weekStart, setWeekStart] = useState<Date>(startOfWeekFromToday())
  const [days, setDays] = useState<DaySlots[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [tz, setTz] = useState<string>("UTC")

  const [step, setStep] = useState<"pick" | "form" | "confirmation">("pick")
  const [selectedSlot, setSelectedSlot] = useState<{ date: string; slot: Slot } | null>(null)
  const [formData, setFormData] = useState<Partial<BookingFormData>>({})
  const [submitLoading, setSubmitLoading] = useState(false)

  useEffect(() => {
    setTz(detectTimezone())
  }, [])

  const tzShort = useMemo(() => shortTimezoneLabel(tz), [tz])

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/availability?from=${toDateString(weekStart)}&days=7`)
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || "Failed to load availability")
        if (!cancelled) setDays(data.days ?? [])
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load availability")
          setDays([])
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [weekStart])

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const canGoPrev = weekStart.getTime() > today.getTime()

  const weekEnd = addDays(weekStart, 6)
  const weekRangeLabel = `${weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" })} – ${weekEnd.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`

  const pickSlot = (date: string, slot: Slot) => {
    setSelectedSlot({ date, slot })
    setStep("form")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedSlot) return
    setSubmitLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          notes: formData.notes,
          date: selectedSlot.date,
          time: selectedSlot.slot.time,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Failed to create booking")
      setStep("confirmation")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create booking")
    } finally {
      setSubmitLoading(false)
    }
  }

  const resetBooking = () => {
    setStep("pick")
    setSelectedSlot(null)
    setFormData({})
    setError(null)
  }

  const formattedSelectedDate = selectedSlot
    ? new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(parseDateString(selectedSlot.date))
    : ""

  if (step === "confirmation") {
    return (
      <div className="border border-ink/15 bg-paper">
        <div className="flex items-baseline justify-between border-b border-ink/15 px-6 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">№ 03 / Confirmed</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Reply by email to reschedule</span>
        </div>
        <div className="px-6 py-10 lg:px-10 lg:py-14">
          <h2 className="display text-[44px] leading-[0.95] text-ink lg:text-[64px]">
            You're <span className="display-italic">on the calendar.</span>
          </h2>
          <div className="mt-8 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7 text-[16px] leading-[1.55] text-ink">
              <p>
                A confirmation has been sent to <span className="font-semibold">{formData.email}</span> with a calendar
                invite attached. Add it with one click.
              </p>
              <p className="mt-4 text-ink-muted">If anything changes, just reply to that email — we'll find a new time.</p>
            </div>
            <aside className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="border-t border-ink pt-4">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">The particulars</div>
                <dl className="divide-y divide-ink/10 text-[14px]">
                  <Detail label="Date" value={formattedSelectedDate} />
                  <Detail
                    label="Time"
                    value={
                      <>
                        {selectedSlot ? formatTimeInZone(selectedSlot.slot.iso, tz) : ""}{" "}
                        <span className="text-ink-muted">{tzShort}</span>
                      </>
                    }
                  />
                  <Detail label="Duration" value="30 minutes" />
                </dl>
              </div>
            </aside>
          </div>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
            <button
              onClick={resetBooking}
              className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand"
            >
              <span>Schedule another</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-ink"
            >
              <span className="ink-link">Back to home</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (step === "form" && selectedSlot) {
    return (
      <div className="border border-ink/15 bg-paper">
        <div className="flex items-baseline justify-between border-b border-ink/15 px-6 py-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">№ 02 / Your details</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
            Times in <span className="text-ink">{tzShort}</span> · {tz}
          </span>
        </div>
        <div className="px-6 py-8 lg:px-10 lg:py-10">
          <button
            onClick={() => { setStep("pick"); setSelectedSlot(null) }}
            className="mb-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted hover:text-ink"
          >
            <ChevronLeft className="h-3 w-3" /> Pick a different time
          </button>

          {error && (
            <div className="mb-6 border border-red-300 bg-red-50 px-4 py-3 text-[13px] text-red-800">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-8 flex items-baseline justify-between border-b border-ink/10 pb-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Booking</div>
                <p className="display text-[22px] text-ink lg:text-[28px]">{formattedSelectedDate}</p>
                <p className="mt-1 text-[15px] text-ink-soft">
                  <span className="num">{formatTimeInZone(selectedSlot.slot.iso, tz)}</span>{" "}
                  <span className="text-ink-muted">{tzShort}</span> · 30 min
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-x-6 gap-y-6">
              <Field label="Full name" required className="col-span-12 md:col-span-6">
                <input required value={formData.name || ""} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} className={fieldInputClass} />
              </Field>
              <Field label="Email" required className="col-span-12 md:col-span-6">
                <input type="email" required value={formData.email || ""} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} className={fieldInputClass} />
              </Field>
              <Field label="Company / brokerage" className="col-span-12 md:col-span-6">
                <input value={formData.company || ""} onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))} className={fieldInputClass} />
              </Field>
              <Field label="Phone" className="col-span-12 md:col-span-6">
                <input type="tel" value={formData.phone || ""} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} className={fieldInputClass} />
              </Field>
              <Field label="What would you like to discuss?" className="col-span-12">
                <textarea rows={4} value={formData.notes || ""} onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))} className={`${fieldInputClass} resize-none`} />
              </Field>
            </div>

            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <button
                type="submit"
                disabled={submitLoading}
                className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand disabled:opacity-50"
              >
                <span>{submitLoading ? "Booking…" : "Confirm booking"}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  // Pick step — week view
  return (
    <div className="border border-ink/15 bg-paper">
      <div className="flex items-baseline justify-between border-b border-ink/15 px-6 py-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">№ 01 / Pick a time</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
          Times in <span className="text-ink">{tzShort}</span> · {tz}
        </span>
      </div>

      <div className="border-b border-ink/15 px-6 py-4 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => setWeekStart(addDays(weekStart, -7))}
            disabled={!canGoPrev}
            className="inline-flex items-center gap-2 border border-ink/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink hover:bg-paper-dim disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-3 w-3" /> Prev week
          </button>
          <div className="text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Week of</div>
            <div className="display text-[20px] text-ink lg:text-[24px]">{weekRangeLabel}</div>
          </div>
          <button
            onClick={() => setWeekStart(addDays(weekStart, 7))}
            className="inline-flex items-center gap-2 border border-ink/15 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink hover:bg-paper-dim"
          >
            Next week <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 lg:px-10 lg:py-8">
        {error && (
          <div className="mb-6 border border-red-300 bg-red-50 px-4 py-3 text-[13px] text-red-800">{error}</div>
        )}

        {loading ? (
          <div className="py-16 text-center">
            <div className="mx-auto h-px w-24 animate-pulse bg-ink" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">Loading availability…</p>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-px border border-ink/10 bg-ink/10">
            {days.map((day) => {
              const d = parseDateString(day.date)
              const isToday = d.toDateString() === new Date().toDateString()
              const isPast = d.getTime() < today.getTime()
              return (
                <div key={day.date} className="flex flex-col bg-paper">
                  <div className={`border-b border-ink/10 px-2 py-2 text-center ${isToday ? "bg-paper-dim" : ""}`}>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                      {DAY_NAMES[d.getDay()]}
                    </div>
                    <div className="num display text-[20px] text-ink">{d.getDate()}</div>
                    {isToday && (
                      <div className="font-mono text-[9px] uppercase tracking-[0.22em] text-brand">Today</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-px overflow-y-auto p-1.5" style={{ maxHeight: "420px" }}>
                    {isPast ? (
                      <div className="py-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft-2">—</div>
                    ) : day.slots.length === 0 ? (
                      <div className="py-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft-2">
                        None
                      </div>
                    ) : (
                      day.slots.map((slot) => (
                        <button
                          key={slot.iso}
                          onClick={() => pickSlot(day.date, slot)}
                          className="num border border-transparent px-1 py-1.5 text-center text-[12px] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                        >
                          {formatTimeInZone(slot.iso, tz)}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

function Detail({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between py-2">
      <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  )
}

const fieldInputClass =
  "w-full border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-[16px] text-ink placeholder:text-ink-soft-2 focus:border-ink focus:outline-none"

function Field({
  label,
  required,
  className,
  children,
}: {
  label: string
  required?: boolean
  className?: string
  children: React.ReactNode
}) {
  return (
    <label className={className}>
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      <span className="mt-1 block">{children}</span>
    </label>
  )
}
