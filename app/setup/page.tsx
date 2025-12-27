import { SetupInstructions } from "@/components/setup-instructions"

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Booking System Setup</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your booking system is already working! Choose how you want to proceed.
          </p>
        </div>

        <SetupInstructions />
      </div>
    </div>
  )
}
