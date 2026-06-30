import { NextResponse } from "next/server"
import { createBookingEvent, getAvailableSlots } from "@/lib/google-calendar"
import { sendBookingEmails } from "@/lib/booking-email"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  let body: any
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const { name, email, company, phone, notes, date, time } = body ?? {}

  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 })
  }
  if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
  }
  if (typeof date !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "Invalid date" }, { status: 400 })
  }
  if (typeof time !== "string" || !/^\d{2}:\d{2}$/.test(time)) {
    return NextResponse.json({ error: "Invalid time" }, { status: 400 })
  }

  try {
    const slots = await getAvailableSlots(date)
    if (!slots.some((s) => s.time === time)) {
      return NextResponse.json({ error: "That time is no longer available" }, { status: 409 })
    }

    const cleanName = name.trim()
    const cleanEmail = email.trim()
    const cleanCompany = typeof company === "string" ? company.trim() || undefined : undefined
    const cleanPhone = typeof phone === "string" ? phone.trim() || undefined : undefined
    const cleanNotes = typeof notes === "string" ? notes.trim() || undefined : undefined

    const result = await createBookingEvent({
      name: cleanName,
      email: cleanEmail,
      company: cleanCompany,
      phone: cleanPhone,
      notes: cleanNotes,
      date,
      time,
    })

    try {
      await sendBookingEmails({
        visitorName: cleanName,
        visitorEmail: cleanEmail,
        visitorCompany: cleanCompany,
        visitorPhone: cleanPhone,
        visitorNotes: cleanNotes,
        start: result.start,
        end: result.end,
        eventId: result.eventId ?? `${date}-${time}`,
        meetLink: result.meetLink,
      })
    } catch (emailErr) {
      console.error("[book] email send failed (event was created)", emailErr)
    }

    return NextResponse.json({ ok: true, eventId: result.eventId, htmlLink: result.htmlLink })
  } catch (err) {
    console.error("[book] error", err)
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
  }
}
