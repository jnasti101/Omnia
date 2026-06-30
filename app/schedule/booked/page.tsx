"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

type BookingSummary = {
  email: string
  date: string
  slotIso: string
}

function detectTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"
  } catch {
    return "UTC"
  }
}

function shortTimezoneLabel(tz: string): string {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "short" }).formatToParts(new Date())
  return parts.find((p) => p.type === "timeZoneName")?.value ?? tz
}

function formatTimeInZone(iso: string, tz: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: tz,
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(iso))
}

function formatDateLong(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number)
  const local = new Date(y, m - 1, d)
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(local)
}

export default function BookedPage() {
  const [summary, setSummary] = useState<BookingSummary | null>(null)
  const [tz, setTz] = useState<string>("UTC")

  useEffect(() => {
    setTz(detectTimezone())
    try {
      const raw = sessionStorage.getItem("omnia_booking")
      if (raw) setSummary(JSON.parse(raw))
    } catch {
      // ignore
    }
  }, [])

  const tzShort = shortTimezoneLabel(tz)

  return (
    <main className="min-h-screen bg-paper text-ink paper-texture">
      <div className="relative border-b border-ink/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 lg:px-10">
          <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink hover:text-brand">
            ← Omnia Solutions
          </Link>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted sm:inline">
            Booking confirmed
          </span>
        </div>
      </div>

      <section className="relative">
        <div className="mx-auto max-w-[1100px] px-5 py-12 lg:px-10 lg:py-20">
          <div className="border border-ink/15 bg-paper">
            <div className="flex items-baseline justify-between border-b border-ink/15 px-6 py-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">№ 03 / Confirmed</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                Email joe@omnia.fyi to reschedule
              </span>
            </div>
            <div className="px-6 py-10 lg:px-10 lg:py-14">
              <h2 className="display text-[44px] leading-[0.95] text-ink lg:text-[64px]">
                You're <span className="display-italic">on the calendar.</span>
              </h2>

              <div className="mt-8 grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-7 text-[16px] leading-[1.55] text-ink">
                  <p>
                    {summary?.email ? (
                      <>
                        A confirmation has been sent to <span className="font-semibold">{summary.email}</span> with a
                        calendar invite attached. Add it with one click.
                      </>
                    ) : (
                      <>A confirmation email is on its way with a calendar invite attached.</>
                    )}
                  </p>
                  <p className="mt-4 text-ink-muted">
                    If anything needs to change, email{" "}
                    <a href="mailto:joe@omnia.fyi" className="ink-link text-ink">joe@omnia.fyi</a>{" "}
                    and we'll find a new time.
                  </p>
                </div>

                {summary && (
                  <aside className="col-span-12 md:col-span-4 md:col-start-9">
                    <div className="border-t border-ink pt-4">
                      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                        The particulars
                      </div>
                      <dl className="divide-y divide-ink/10 text-[14px]">
                        <Detail label="Date" value={formatDateLong(summary.date)} />
                        <Detail
                          label="Time"
                          value={
                            <>
                              {formatTimeInZone(summary.slotIso, tz)}{" "}
                              <span className="text-ink-muted">{tzShort}</span>
                            </>
                          }
                        />
                        <Detail label="Duration" value="30 minutes" />
                      </dl>
                    </div>
                  </aside>
                )}
              </div>

              <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
                <Link
                  href="/schedule"
                  className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand"
                >
                  <span>Schedule another</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/"
                  className="group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-ink"
                >
                  <span className="ink-link">Back to home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
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
