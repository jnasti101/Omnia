import { CalendarWidget } from "@/components/calendar-widget"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Button asChild variant="ghost" className="absolute left-4 top-4">
              <Link href="/">← Back to Home</Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Schedule Your Discovery Call</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Book a 30-minute consultation to discuss how we can optimize your real estate brokerage operations. We'll
            analyze your current processes and show you exactly how our solutions can drive growth.
          </p>
        </div>

        <CalendarWidget />
      </div>
    </div>
  )
}
