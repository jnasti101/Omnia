import { Resend } from "resend"
import { TIMEZONE } from "./google-calendar"

type IcsInput = {
  uid: string
  start: Date
  end: Date
  summary: string
  description: string
  organizerEmail: string
  organizerName: string
  attendeeEmail: string
  attendeeName: string
}

function icsEscape(str: string): string {
  return str.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n")
}

function icsDate(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")
}

export function buildIcs(input: IcsInput): string {
  const now = icsDate(new Date())
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Omnia//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:REQUEST",
    "BEGIN:VEVENT",
    `UID:${input.uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${icsDate(input.start)}`,
    `DTEND:${icsDate(input.end)}`,
    `SUMMARY:${icsEscape(input.summary)}`,
    `DESCRIPTION:${icsEscape(input.description)}`,
    `ORGANIZER;CN=${icsEscape(input.organizerName)}:mailto:${input.organizerEmail}`,
    `ATTENDEE;CN=${icsEscape(input.attendeeName)};RSVP=TRUE:mailto:${input.attendeeEmail}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
  return lines.join("\r\n")
}

function formatLocal(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(date)
}

type SendBookingEmailsInput = {
  visitorName: string
  visitorEmail: string
  visitorCompany?: string
  visitorPhone?: string
  visitorNotes?: string
  start: Date
  end: Date
  eventId: string
}

export async function sendBookingEmails(input: SendBookingEmailsInput) {
  const apiKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.BOOKING_FROM_EMAIL
  const notifyEmail = process.env.BOOKING_NOTIFICATION_EMAIL
  if (!apiKey) throw new Error("RESEND_API_KEY not set")
  if (!fromEmail) throw new Error("BOOKING_FROM_EMAIL not set")

  const resend = new Resend(apiKey)
  const fromAddressMatch = fromEmail.match(/<([^>]+)>/)
  const organizerEmail = fromAddressMatch ? fromAddressMatch[1] : fromEmail
  const organizerName = fromEmail.replace(/\s*<[^>]+>\s*/, "") || "Omnia"

  const whenStr = formatLocal(input.start)
  const summary = `Discovery Call: Omnia × ${input.visitorName}`
  const description = [
    "Thanks for booking a discovery call with Omnia.",
    "",
    `When: ${whenStr} – ${new Intl.DateTimeFormat("en-US", {
      timeZone: TIMEZONE,
      hour: "numeric",
      minute: "2-digit",
    }).format(input.end)}`,
    "Duration: 30 minutes",
    input.visitorNotes ? `\nYour notes:\n${input.visitorNotes}` : "",
  ].filter(Boolean).join("\n")

  const ics = buildIcs({
    uid: `${input.eventId}@omnia.fyi`,
    start: input.start,
    end: input.end,
    summary,
    description,
    organizerEmail,
    organizerName,
    attendeeEmail: input.visitorEmail,
    attendeeName: input.visitorName,
  })

  const icsAttachment = {
    filename: "invite.ics",
    content: Buffer.from(ics).toString("base64"),
  }

  const visitorHtml = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto; color: #0f172a;">
      <h2 style="margin: 0 0 16px;">You're booked.</h2>
      <p>Hi ${escapeHtml(input.visitorName)},</p>
      <p>Your discovery call with Omnia is confirmed. Details below — a calendar invite is attached.</p>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 16px 0;">
        <p style="margin: 0 0 8px;"><strong>When:</strong> ${escapeHtml(whenStr)}</p>
        <p style="margin: 0 0 8px;"><strong>Duration:</strong> 30 minutes</p>
        <p style="margin: 0;"><strong>Format:</strong> Video call (link to follow)</p>
      </div>
      <p>If you need to reschedule, just reply to this email.</p>
      <p style="color: #64748b; font-size: 13px; margin-top: 32px;">— ${escapeHtml(organizerName)}</p>
    </div>
  `

  await resend.emails.send({
    from: fromEmail,
    to: input.visitorEmail,
    subject: `Confirmed: Discovery call with Omnia — ${whenStr}`,
    html: visitorHtml,
    attachments: [icsAttachment],
  })

  if (notifyEmail) {
    const notifyHtml = `
      <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto; color: #0f172a;">
        <h2 style="margin: 0 0 16px;">New booking</h2>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
          <p style="margin: 0 0 8px;"><strong>When:</strong> ${escapeHtml(whenStr)}</p>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(input.visitorName)}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(input.visitorEmail)}</p>
          ${input.visitorCompany ? `<p style="margin: 0 0 8px;"><strong>Company:</strong> ${escapeHtml(input.visitorCompany)}</p>` : ""}
          ${input.visitorPhone ? `<p style="margin: 0 0 8px;"><strong>Phone:</strong> ${escapeHtml(input.visitorPhone)}</p>` : ""}
          ${input.visitorNotes ? `<p style="margin: 12px 0 0; white-space: pre-wrap;"><strong>Notes:</strong>\n${escapeHtml(input.visitorNotes)}</p>` : ""}
        </div>
      </div>
    `
    await resend.emails.send({
      from: fromEmail,
      to: notifyEmail,
      subject: `New booking: ${input.visitorName} — ${whenStr}`,
      html: notifyHtml,
      attachments: [icsAttachment],
    })
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[c] as string)
}
