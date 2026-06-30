import { NextResponse } from "next/server"
import { getAvailableSlots, getAvailableSlotsRange } from "@/lib/google-calendar"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const from = searchParams.get("from")
  const daysParam = searchParams.get("days")
  const date = searchParams.get("date")

  try {
    if (from && /^\d{4}-\d{2}-\d{2}$/.test(from)) {
      const days = Math.min(Math.max(parseInt(daysParam ?? "7", 10) || 7, 1), 31)
      const result = await getAvailableSlotsRange(from, days)
      return NextResponse.json({ days: result })
    }

    if (date && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
      const slots = await getAvailableSlots(date)
      return NextResponse.json({ slots })
    }

    return NextResponse.json(
      { error: "Provide ?from=YYYY-MM-DD (with optional &days=) or ?date=YYYY-MM-DD" },
      { status: 400 },
    )
  } catch (err) {
    console.error("[availability] error", err)
    return NextResponse.json({ error: "Failed to load availability" }, { status: 500 })
  }
}
