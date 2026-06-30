import { google } from "googleapis"

export const TIMEZONE = "America/New_York"
export const SLOT_MINUTES = 30
export const WORK_START_HOUR = 9
export const WORK_END_HOUR = 20

function getOAuthClient() {
  const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_REFRESH_TOKEN } = process.env
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
    throw new Error("Missing Google OAuth env vars")
  }
  const client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)
  client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN })
  return client
}

export function getCalendar() {
  return google.calendar({ version: "v3", auth: getOAuthClient() })
}

export function getCalendarId() {
  return process.env.GOOGLE_CALENDAR_ID || "primary"
}

function dateAtHourInZone(dateStr: string, hour: number, minute = 0): Date {
  const probe = new Date(`${dateStr}T12:00:00Z`)
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIMEZONE,
    hourCycle: "h23",
    timeZoneName: "shortOffset",
  }).formatToParts(probe)
  const offsetPart = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT-5"
  const match = offsetPart.match(/GMT([+-])(\d{1,2})(?::?(\d{2}))?/)
  const sign = match?.[1] === "-" ? -1 : 1
  const offHours = Number(match?.[2] ?? 0)
  const offMins = Number(match?.[3] ?? 0)
  const totalOffsetMin = sign * (offHours * 60 + offMins)
  const utcMs = Date.UTC(
    Number(dateStr.slice(0, 4)),
    Number(dateStr.slice(5, 7)) - 1,
    Number(dateStr.slice(8, 10)),
    hour,
    minute,
  ) - totalOffsetMin * 60_000
  return new Date(utcMs)
}

export type AvailableSlot = { time: string; iso: string }
export type DaySlots = { date: string; slots: AvailableSlot[] }

function addDays(dateStr: string, days: number): string {
  const [y, m, d] = dateStr.split("-").map(Number)
  const dt = new Date(Date.UTC(y, m - 1, d))
  dt.setUTCDate(dt.getUTCDate() + days)
  return dt.toISOString().slice(0, 10)
}

export async function getAvailableSlots(dateStr: string): Promise<AvailableSlot[]> {
  const days = await getAvailableSlotsRange(dateStr, 1)
  return days[0]?.slots ?? []
}

export async function getAvailableSlotsRange(startDateStr: string, days: number): Promise<DaySlots[]> {
  const cal = getCalendar()
  const calendarId = getCalendarId()
  const rangeStart = dateAtHourInZone(startDateStr, WORK_START_HOUR)
  const rangeEnd = dateAtHourInZone(addDays(startDateStr, days - 1), WORK_END_HOUR)

  const { data } = await cal.freebusy.query({
    requestBody: {
      timeMin: rangeStart.toISOString(),
      timeMax: rangeEnd.toISOString(),
      timeZone: TIMEZONE,
      items: [{ id: calendarId }],
    },
  })

  const busy = (data.calendars?.[calendarId]?.busy ?? []).map((b) => ({
    start: new Date(b.start!).getTime(),
    end: new Date(b.end!).getTime(),
  }))

  const now = Date.now()
  const result: DaySlots[] = []
  for (let i = 0; i < days; i++) {
    const date = addDays(startDateStr, i)
    const slots: AvailableSlot[] = []
    for (let h = WORK_START_HOUR; h < WORK_END_HOUR; h++) {
      for (let m = 0; m < 60; m += SLOT_MINUTES) {
        const slotStart = dateAtHourInZone(date, h, m)
        const slotStartMs = slotStart.getTime()
        const slotEnd = slotStartMs + SLOT_MINUTES * 60_000
        if (slotStartMs < now) continue
        const overlaps = busy.some((b) => slotStartMs < b.end && slotEnd > b.start)
        if (!overlaps) {
          slots.push({
            time: `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`,
            iso: slotStart.toISOString(),
          })
        }
      }
    }
    result.push({ date, slots })
  }
  return result
}

export type CreateBookingInput = {
  name: string
  email: string
  company?: string
  phone?: string
  notes?: string
  date: string
  time: string
}

export async function createBookingEvent(input: CreateBookingInput) {
  const cal = getCalendar()
  const calendarId = getCalendarId()
  const [h, m] = input.time.split(":").map(Number)
  const start = dateAtHourInZone(input.date, h, m)
  const end = new Date(start.getTime() + SLOT_MINUTES * 60_000)

  const descriptionLines = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    input.company ? `Company: ${input.company}` : null,
    input.phone ? `Phone: ${input.phone}` : null,
    input.notes ? `\nNotes:\n${input.notes}` : null,
  ].filter(Boolean)

  const { data } = await cal.events.insert({
    calendarId,
    sendUpdates: "none",
    requestBody: {
      summary: `Discovery Call: Omnia × ${input.name}`,
      description: descriptionLines.join("\n"),
      start: { dateTime: start.toISOString(), timeZone: TIMEZONE },
      end: { dateTime: end.toISOString(), timeZone: TIMEZONE },
      attendees: [{ email: input.email, displayName: input.name }],
      reminders: { useDefault: true },
    },
  })

  return { eventId: data.id, htmlLink: data.htmlLink, start, end }
}
