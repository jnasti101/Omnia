import { AdminDashboard } from "@/components/admin-dashboard"
import { Suspense } from "react"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Suspense fallback={<div className="p-8">Loading dashboard...</div>}>
        <AdminDashboard />
      </Suspense>
    </div>
  )
}
