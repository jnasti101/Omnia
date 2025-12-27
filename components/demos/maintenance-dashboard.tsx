"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Wrench,
  User,
  Calendar,
  Search,
  Filter,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const tickets = [
  {
    id: "MR-001",
    title: "HVAC not cooling - Unit 204",
    tenant: "Sarah Johnson",
    priority: "high",
    status: "open",
    vendor: "CoolAir HVAC",
    created: "2 hours ago",
    unit: "204",
  },
  {
    id: "MR-002",
    title: "Leaky faucet in kitchen",
    tenant: "Michael Chen",
    priority: "medium",
    status: "in_progress",
    vendor: "Quick Plumb Co",
    created: "1 day ago",
    unit: "118",
  },
  {
    id: "MR-003",
    title: "Broken window latch",
    tenant: "Emily Rodriguez",
    priority: "low",
    status: "in_progress",
    vendor: "HandyFix Services",
    created: "2 days ago",
    unit: "312",
  },
  {
    id: "MR-004",
    title: "Garbage disposal jammed",
    tenant: "David Kim",
    priority: "medium",
    status: "open",
    vendor: "Unassigned",
    created: "3 hours ago",
    unit: "105",
  },
  {
    id: "MR-005",
    title: "Smoke detector beeping",
    tenant: "Lisa Thompson",
    priority: "high",
    status: "completed",
    vendor: "SafeHome Electric",
    created: "1 day ago",
    unit: "421",
  },
  {
    id: "MR-006",
    title: "Dishwasher not draining",
    tenant: "James Wilson",
    priority: "medium",
    status: "completed",
    vendor: "Appliance Pro",
    created: "3 days ago",
    unit: "203",
  },
]

const priorityStyles = {
  high: { badge: "bg-red-900/30 text-red-300 border-red-800/50", icon: "text-red-400" },
  medium: { badge: "bg-yellow-900/30 text-yellow-300 border-yellow-800/50", icon: "text-yellow-400" },
  low: { badge: "bg-slate-700/50 text-slate-300 border-slate-600/50", icon: "text-slate-400" },
}

const statusStyles = {
  open: { badge: "bg-blue-900/30 text-blue-300 border-blue-800/50", label: "Open" },
  in_progress: { badge: "bg-purple-900/30 text-purple-300 border-purple-800/50", label: "In Progress" },
  completed: { badge: "bg-green-900/30 text-green-300 border-green-800/50", label: "Completed" },
}

export function MaintenanceDashboard() {
  const openCount = tickets.filter(t => t.status === "open").length
  const inProgressCount = tickets.filter(t => t.status === "in_progress").length
  const completedThisWeek = tickets.filter(t => t.status === "completed").length

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Open Tickets</p>
                <p className="text-3xl font-bold text-white">{openCount}</p>
              </div>
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">In Progress</p>
                <p className="text-3xl font-bold text-white">{inProgressCount}</p>
              </div>
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Completed This Week</p>
                <p className="text-3xl font-bold text-white">{completedThisWeek}</p>
              </div>
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Avg Response Time</p>
                <p className="text-3xl font-bold text-white">4.2h</p>
              </div>
              <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tickets Table */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle className="text-white">Maintenance Requests</CardTitle>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search tickets..."
                  className="pl-9 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 w-64"
                />
              </div>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  <th className="px-6 py-4 text-sm font-medium text-slate-400">Ticket</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-400">Issue</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-400">Tenant</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-400">Priority</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-400">Status</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-400">Vendor</th>
                  <th className="px-6 py-4 text-sm font-medium text-slate-400">Created</th>
                </tr>
              </thead>
              <tbody>
                {tickets.map((ticket) => {
                  const priority = priorityStyles[ticket.priority as keyof typeof priorityStyles]
                  const status = statusStyles[ticket.status as keyof typeof statusStyles]

                  return (
                    <tr key={ticket.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <span className="text-blue-400 font-mono text-sm">{ticket.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                            <Wrench className={`h-4 w-4 ${priority.icon}`} />
                          </div>
                          <div>
                            <p className="text-white font-medium">{ticket.title}</p>
                            <p className="text-sm text-slate-400">Unit {ticket.unit}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 bg-slate-600 rounded-full flex items-center justify-center">
                            <User className="h-4 w-4 text-slate-300" />
                          </div>
                          <span className="text-slate-300">{ticket.tenant}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className={`${priority.badge} border capitalize`}>
                          {ticket.priority}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className={`${status.badge} border`}>
                          {status.label}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm ${ticket.vendor === "Unassigned" ? "text-slate-500 italic" : "text-slate-300"}`}>
                          {ticket.vendor}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                          <Calendar className="h-4 w-4" />
                          {ticket.created}
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
