import { DebugAvailability } from "@/components/debug-availability"

export default function DebugPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Debug Availability</h1>
          <p className="text-lg text-slate-600">Debug the booking availability system</p>
        </div>

        <DebugAvailability />
      </div>
    </div>
  )
}
