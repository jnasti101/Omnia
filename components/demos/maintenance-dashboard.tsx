"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Wrench,
  User,
  Calendar,
  Search,
  Filter,
  Bell,
  TrendingDown,
  TrendingUp,
  MessageSquare,
  Phone,
  Zap,
  ArrowUpRight,
  ChevronRight,
} from "lucide-react"
import { Input } from "@/components/ui/input"

// Simulated real-time data
const initialTickets = [
  {
    id: "MR-2847",
    title: "HVAC not cooling - Unit 204",
    tenant: "Sarah Johnson",
    priority: "urgent",
    status: "open",
    vendor: "CoolAir HVAC",
    created: "2 hours ago",
    unit: "204",
    sla: "2h remaining",
    aiSuggestion: "Similar issue resolved in Unit 201 last week - check condenser coils",
  },
  {
    id: "MR-2846",
    title: "Water leak under kitchen sink",
    tenant: "Michael Chen",
    priority: "high",
    status: "in_progress",
    vendor: "Quick Plumb Co",
    created: "4 hours ago",
    unit: "118",
    sla: "On track",
    aiSuggestion: "Vendor en route - ETA 15 minutes",
  },
  {
    id: "MR-2845",
    title: "Broken window latch - security concern",
    tenant: "Emily Rodriguez",
    priority: "high",
    status: "in_progress",
    vendor: "SecureHome Services",
    created: "1 day ago",
    unit: "312",
    sla: "On track",
    aiSuggestion: "Parts ordered, arriving tomorrow",
  },
  {
    id: "MR-2844",
    title: "Garbage disposal jammed",
    tenant: "David Kim",
    priority: "medium",
    status: "open",
    vendor: null,
    created: "5 hours ago",
    unit: "105",
    sla: "8h remaining",
    aiSuggestion: "Auto-assigning to Appliance Pro based on availability",
  },
  {
    id: "MR-2843",
    title: "Smoke detector beeping - low battery",
    tenant: "Lisa Thompson",
    priority: "urgent",
    status: "completed",
    vendor: "In-House Team",
    created: "1 day ago",
    unit: "421",
    sla: "Resolved in 45min",
    aiSuggestion: null,
  },
  {
    id: "MR-2842",
    title: "Dishwasher not draining properly",
    tenant: "James Wilson",
    priority: "medium",
    status: "completed",
    vendor: "Appliance Pro",
    created: "2 days ago",
    unit: "203",
    sla: "Resolved in 4h",
    aiSuggestion: null,
  },
]

const priorityStyles = {
  urgent: { badge: "bg-red-500 text-white border-0", icon: "text-red-400", dot: "bg-red-500" },
  high: { badge: "bg-orange-500/20 text-orange-300 border-orange-500/50", icon: "text-orange-400", dot: "bg-orange-500" },
  medium: { badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/50", icon: "text-yellow-400", dot: "bg-yellow-500" },
  low: { badge: "bg-slate-600/50 text-slate-300 border-slate-500/50", icon: "text-slate-400", dot: "bg-slate-500" },
}

const statusStyles = {
  open: { badge: "bg-blue-500/20 text-blue-300 border-blue-500/50", label: "Open", dot: "bg-blue-500" },
  in_progress: { badge: "bg-purple-500/20 text-purple-300 border-purple-500/50", label: "In Progress", dot: "bg-purple-500" },
  completed: { badge: "bg-green-500/20 text-green-300 border-green-500/50", label: "Completed", dot: "bg-green-500" },
}

export function MaintenanceDashboard() {
  const [tickets, setTickets] = useState(initialTickets)
  const [selectedTicket, setSelectedTicket] = useState<string | null>(null)
  const [liveStats, setLiveStats] = useState({
    openTickets: 2,
    avgResponseTime: 4.2,
    completedToday: 8,
    tenantSatisfaction: 94.7,
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        avgResponseTime: Math.max(1, prev.avgResponseTime + (Math.random() - 0.5) * 0.3),
        tenantSatisfaction: Math.min(100, Math.max(90, prev.tenantSatisfaction + (Math.random() - 0.4) * 0.2)),
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const openCount = tickets.filter(t => t.status === "open").length
  const inProgressCount = tickets.filter(t => t.status === "in_progress").length
  const urgentCount = tickets.filter(t => t.priority === "urgent" && t.status !== "completed").length

  return (
    <div className="space-y-6">
      {/* Live Alert Banner */}
      {urgentCount > 0 && (
        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-xl p-4 flex items-center justify-between animate-pulse">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
              <Bell className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <p className="text-white font-medium">{urgentCount} Urgent {urgentCount === 1 ? 'Request' : 'Requests'} Requiring Attention</p>
              <p className="text-sm text-red-300">SLA breach risk - immediate action recommended</p>
            </div>
          </div>
          <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
            View Urgent
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}

      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Open Tickets</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{openCount}</p>
                  <span className="text-xs text-green-400 flex items-center">
                    <TrendingDown className="h-3 w-3 mr-0.5" />
                    12% vs last week
                  </span>
                </div>
              </div>
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <AlertCircle className="h-7 w-7 text-blue-400" />
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Badge className="bg-red-500/20 text-red-300 border-0 text-xs">{urgentCount} urgent</Badge>
              <Badge className="bg-slate-700 text-slate-300 border-0 text-xs">{openCount - urgentCount} normal</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Avg Response Time</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{liveStats.avgResponseTime.toFixed(1)}</p>
                  <span className="text-lg text-slate-400">hrs</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center">
                <Zap className="h-7 w-7 text-green-400" />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(100, (8 - liveStats.avgResponseTime) / 8 * 100)}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-1">Target: under 8 hours</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Completed Today</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{liveStats.completedToday}</p>
                  <span className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-0.5" />
                    +3 vs yesterday
                  </span>
                </div>
              </div>
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7 text-purple-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-slate-600 border-2 border-slate-800 flex items-center justify-center">
                    <User className="h-3 w-3 text-slate-300" />
                  </div>
                ))}
              </div>
              <span className="text-slate-400">by 4 team members</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Tenant Satisfaction</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{liveStats.tenantSatisfaction.toFixed(1)}%</p>
                </div>
              </div>
              <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
                <MessageSquare className="h-7 w-7 text-yellow-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-lg ${i < 4 ? 'text-yellow-400' : 'text-slate-600'}`}>★</span>
                ))}
              </div>
              <span className="text-xs text-slate-400">based on 156 reviews</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tickets Table with AI Insights */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                Maintenance Requests
                <Badge className="bg-blue-500/20 text-blue-300 border-0 text-xs animate-pulse">Live</Badge>
              </CardTitle>
              <p className="text-sm text-slate-400 mt-1">AI-powered prioritization and vendor matching</p>
            </div>
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
                <tr className="border-b border-slate-700 text-left bg-slate-800/50">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Ticket</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Issue Details</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">SLA</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Insight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {tickets.map((ticket) => {
                  const priority = priorityStyles[ticket.priority as keyof typeof priorityStyles]
                  const status = statusStyles[ticket.status as keyof typeof statusStyles]
                  const isSelected = selectedTicket === ticket.id

                  return (
                    <tr
                      key={ticket.id}
                      className={`hover:bg-slate-700/30 transition-colors cursor-pointer ${isSelected ? 'bg-slate-700/40' : ''}`}
                      onClick={() => setSelectedTicket(isSelected ? null : ticket.id)}
                    >
                      <td className="px-6 py-4">
                        <span className="text-blue-400 font-mono text-sm font-medium">{ticket.id}</span>
                        <p className="text-xs text-slate-500 mt-0.5">{ticket.created}</p>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 ${priority.dot}`} />
                          <div>
                            <p className="text-white font-medium">{ticket.title}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-sm text-slate-400 flex items-center gap-1">
                                <User className="h-3 w-3" />
                                {ticket.tenant}
                              </span>
                              <span className="text-sm text-slate-500">Unit {ticket.unit}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge className={`${priority.badge} border capitalize`}>
                          {ticket.priority}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${status.dot} ${ticket.status === 'in_progress' ? 'animate-pulse' : ''}`} />
                          <span className="text-slate-300 text-sm">{status.label}</span>
                        </div>
                        {ticket.vendor && (
                          <p className="text-xs text-slate-500 mt-1">{ticket.vendor}</p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm ${ticket.sla.includes('remaining') ? 'text-yellow-400' : ticket.sla.includes('Resolved') ? 'text-green-400' : 'text-slate-400'}`}>
                          {ticket.sla}
                        </span>
                      </td>
                      <td className="px-6 py-4 max-w-xs">
                        {ticket.aiSuggestion ? (
                          <div className="flex items-start gap-2 p-2 bg-blue-900/20 rounded-lg border border-blue-800/30">
                            <Zap className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-blue-300">{ticket.aiSuggestion}</p>
                          </div>
                        ) : (
                          <span className="text-slate-500 text-sm">—</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-slate-800/80 border-slate-700 hover:border-blue-500/50 transition-colors cursor-pointer group">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <Phone className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">Contact Vendor</p>
                <p className="text-sm text-slate-400">Quick dial to assigned vendor</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700 hover:border-green-500/50 transition-colors cursor-pointer group">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <MessageSquare className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Message Tenant</p>
                <p className="text-sm text-slate-400">Send status update</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-green-400 transition-colors" />
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700 hover:border-purple-500/50 transition-colors cursor-pointer group">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                <Calendar className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-medium">Schedule Visit</p>
                <p className="text-sm text-slate-400">Book maintenance window</p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-purple-400 transition-colors" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
