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
  location?: string
  url?: string
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
    input.location ? `LOCATION:${icsEscape(input.location)}` : null,
    input.url ? `URL:${input.url}` : null,
    `ORGANIZER;CN=${icsEscape(input.organizerName)}:mailto:${input.organizerEmail}`,
    `ATTENDEE;CN=${icsEscape(input.attendeeName)};RSVP=TRUE:mailto:${input.attendeeEmail}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ].filter(Boolean)
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

function formatDateOnly(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date)
}

function formatTimeOnly(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    hour: "numeric",
    minute: "2-digit",
  }).format(date)
}

function formatTimeWithZone(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
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
  meetLink?: string | null
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
  const meetLink = input.meetLink || null
  const description = [
    "Thanks for booking a discovery call with Omnia.",
    "",
    `When: ${whenStr} – ${new Intl.DateTimeFormat("en-US", {
      timeZone: TIMEZONE,
      hour: "numeric",
      minute: "2-digit",
    }).format(input.end)}`,
    "Duration: 30 minutes",
    meetLink ? `\nJoin Google Meet: ${meetLink}` : "",
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
    location: meetLink || undefined,
    url: meetLink || undefined,
  })

  const icsAttachment = {
    filename: "invite.ics",
    content: Buffer.from(ics).toString("base64"),
  }

  const dateOnly = formatDateOnly(input.start)
  const timeRange = `${formatTimeOnly(input.start)} – ${formatTimeWithZone(input.end)}`

  const replyTo = "joe@omnia.fyi"

  const visitorHtml = renderEmailShell({
    dateline: "№ 03 / Confirmed",
    heading: { lead: "You're", emphasis: "on the calendar." },
    intro: `Hi ${escapeHtml(input.visitorName)} — your discovery call with Omnia is confirmed. The calendar invite is attached; add it with one tap.`,
    particulars: [
      { label: "Date", value: escapeHtml(dateOnly) },
      { label: "Time", value: escapeHtml(timeRange) },
      { label: "Duration", value: "30 minutes" },
      { label: "Format", value: "Google Meet" },
    ],
    cta: meetLink ? { href: meetLink, label: "Join Google Meet" } : null,
    ctaSubtext: meetLink
      ? `Or paste this link in your browser at the time of the call: <a href="${meetLink}" style="color: #2d7ac4; word-break: break-all;">${escapeHtml(meetLink)}</a>`
      : null,
    closing: `Need to reschedule or have a question? Email <a href="mailto:${replyTo}" style="color: #2d7ac4;">${replyTo}</a> and we'll sort it out.`,
    signoff: organizerName,
    footer: `Questions → ${replyTo}`,
  })

  await resend.emails.send({
    from: fromEmail,
    to: input.visitorEmail,
    replyTo,
    subject: `Confirmed: Discovery call with Omnia — ${dateOnly}`,
    html: visitorHtml,
    attachments: [icsAttachment],
  })

  if (notifyEmail) {
    const notifyParticulars: Particular[] = [
      { label: "When", value: escapeHtml(`${dateOnly} · ${timeRange}`) },
    ]
    if (meetLink) {
      notifyParticulars.push({
        label: "Meet",
        value: `<a href="${meetLink}" style="color: #2d7ac4; word-break: break-all;">${escapeHtml(meetLink)}</a>`,
      })
    }
    notifyParticulars.push(
      { label: "Name", value: escapeHtml(input.visitorName) },
      { label: "Email", value: `<a href="mailto:${input.visitorEmail}" style="color: #2d7ac4;">${escapeHtml(input.visitorEmail)}</a>` },
    )
    if (input.visitorCompany) notifyParticulars.push({ label: "Company", value: escapeHtml(input.visitorCompany) })
    if (input.visitorPhone) notifyParticulars.push({ label: "Phone", value: escapeHtml(input.visitorPhone) })

    const notifyHtml = renderEmailShell({
      dateline: "№ 04 / New booking",
      heading: { lead: "A new", emphasis: "discovery call." },
      intro: `${escapeHtml(input.visitorName)} just booked a slot. It's already on your Google Calendar — no need to accept.`,
      particulars: notifyParticulars,
      cta: meetLink ? { href: meetLink, label: "Open Google Meet" } : null,
      ctaSubtext: null,
      closing: input.visitorNotes
        ? `<strong style="display: block; font-family: 'Menlo','Monaco','Consolas',monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.22em; color: #5c6b82; margin-bottom: 8px;">Notes from ${escapeHtml(input.visitorName)}</strong><span style="white-space: pre-wrap;">${escapeHtml(input.visitorNotes)}</span>`
        : null,
      signoff: null,
      footer: "Omnia Solutions · Internal notification",
    })

    await resend.emails.send({
      from: fromEmail,
      to: notifyEmail,
      replyTo: input.visitorEmail,
      subject: `New booking: ${input.visitorName} — ${dateOnly}`,
      html: notifyHtml,
    })
  }
}

type Particular = { label: string; value: string }

type EmailShellInput = {
  dateline: string
  heading: { lead: string; emphasis: string }
  intro: string
  particulars: Particular[]
  cta: { href: string; label: string } | null
  ctaSubtext: string | null
  closing: string | null
  signoff: string | null
  footer: string
}

function renderEmailShell(input: EmailShellInput): string {
  const fontStack = "'Helvetica Neue', Helvetica, Arial, sans-serif"
  const monoStack = "'Menlo', 'Monaco', 'Consolas', monospace"
  const ink = "#0a1a33"
  const inkSoft = "#1f2d44"
  const inkMuted = "#5c6b82"
  const paper = "#f6f4ee"
  const paperDim = "#ecebe4"
  const rule = "rgba(10,26,51,0.15)"
  const ruleSoft = "rgba(10,26,51,0.1)"
  const brand = "#2d7ac4"

  const particularsRows = input.particulars
    .map(
      (p, i) => `
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid ${ruleSoft}; font-family: ${monoStack}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.22em; color: ${inkMuted}; vertical-align: top; white-space: nowrap;">
          ${escapeHtml(p.label)}
        </td>
        <td style="padding: 10px 0 10px 24px; border-bottom: 1px solid ${ruleSoft}; font-family: ${fontStack}; font-size: 15px; color: ${ink}; text-align: right; vertical-align: top;">
          ${p.value}
        </td>
      </tr>`,
    )
    .join("")

  const ctaBlock = input.cta
    ? `
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin: 28px 0 0;">
        <tr>
          <td style="background: ${ink};">
            <a href="${input.cta.href}" style="display: inline-block; padding: 14px 26px; font-family: ${monoStack}; font-size: 12px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; text-decoration: none; color: ${paper};">
              ${escapeHtml(input.cta.label)} &nbsp;→
            </a>
          </td>
        </tr>
      </table>
      ${input.ctaSubtext ? `<p style="margin: 14px 0 0; font-family: ${fontStack}; font-size: 13px; line-height: 1.5; color: ${inkMuted};">${input.ctaSubtext}</p>` : ""}
    `
    : ""

  const closingBlock = input.closing
    ? `<p style="margin: 28px 0 0; padding-top: 24px; border-top: 1px solid ${ruleSoft}; font-family: ${fontStack}; font-size: 14px; line-height: 1.55; color: ${inkSoft};">${input.closing}</p>`
    : ""

  const signoffBlock = input.signoff
    ? `<p style="margin: 20px 0 0; font-family: ${fontStack}; font-size: 13px; color: ${inkMuted};">— ${escapeHtml(input.signoff)}</p>`
    : ""

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Omnia</title>
  </head>
  <body style="margin: 0; padding: 0; background: ${paperDim}; color: ${ink}; font-family: ${fontStack};">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: ${paperDim};">
      <tr>
        <td align="center" style="padding: 48px 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; width: 100%; background: ${paper}; border: 1px solid ${rule};">

            <!-- Header / dateline -->
            <tr>
              <td style="padding: 18px 32px; border-bottom: 1px solid ${rule};">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="font-family: ${monoStack}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.22em; color: ${brand};">
                      ${escapeHtml(input.dateline)}
                    </td>
                    <td style="font-family: ${monoStack}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.22em; color: ${inkMuted}; text-align: right;">
                      Omnia Solutions
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 40px 32px 36px;">
                <h1 style="margin: 0 0 24px; font-family: ${fontStack}; font-weight: 800; font-size: 40px; line-height: 1.0; letter-spacing: -0.035em; color: ${ink};">
                  ${escapeHtml(input.heading.lead)}
                  <span style="font-style: italic; font-weight: 800; color: ${inkSoft};">${escapeHtml(input.heading.emphasis)}</span>
                </h1>

                <p style="margin: 0 0 28px; font-family: ${fontStack}; font-size: 16px; line-height: 1.55; color: ${ink};">
                  ${input.intro}
                </p>

                <!-- Particulars -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top: 1px solid ${ink}; margin-top: 8px;">
                  <tr>
                    <td colspan="2" style="padding: 14px 0 4px; font-family: ${monoStack}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.22em; color: ${inkMuted};">
                      The particulars
                    </td>
                  </tr>
                  ${particularsRows}
                </table>

                ${ctaBlock}
                ${closingBlock}
                ${signoffBlock}
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 16px 32px; background: ${paperDim}; border-top: 1px solid ${rule};">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                  <tr>
                    <td style="font-family: ${monoStack}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.22em; color: ${inkMuted};">
                      ${escapeHtml(input.footer)}
                    </td>
                    <td style="font-family: ${monoStack}; font-size: 10px; text-transform: uppercase; letter-spacing: 0.22em; color: ${inkMuted}; text-align: right;">
                      omnia.fyi
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
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
