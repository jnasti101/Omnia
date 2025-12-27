"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  DollarSign,
  TrendingUp,
  Phone,
  Mail,
  Calendar,
  Home,
  Star,
  Clock,
} from "lucide-react"

const pipelineStages = [
  {
    name: "New",
    color: "bg-blue-500",
    leads: [
      { name: "Jennifer Martinez", value: 425000, source: "Zillow", score: 85 },
      { name: "Robert Chen", value: 680000, source: "Referral", score: 92 },
    ],
  },
  {
    name: "Contacted",
    color: "bg-purple-500",
    leads: [
      { name: "Amanda Foster", value: 520000, source: "Website", score: 78 },
      { name: "David Williams", value: 890000, source: "Open House", score: 88 },
      { name: "Lisa Park", value: 340000, source: "Zillow", score: 72 },
    ],
  },
  {
    name: "Qualified",
    color: "bg-yellow-500",
    leads: [
      { name: "Michael Brown", value: 1200000, source: "Referral", score: 95 },
      { name: "Sarah Johnson", value: 475000, source: "Website", score: 82 },
    ],
  },
  {
    name: "Showing",
    color: "bg-orange-500",
    leads: [
      { name: "Thomas Anderson", value: 650000, source: "Realtor.com", score: 90 },
    ],
  },
  {
    name: "Offer",
    color: "bg-pink-500",
    leads: [
      { name: "Emily Davis", value: 780000, source: "Referral", score: 98 },
    ],
  },
  {
    name: "Closed",
    color: "bg-green-500",
    leads: [
      { name: "James Wilson", value: 545000, source: "Website", score: 100 },
    ],
  },
]

const recentActivity = [
  { type: "call", contact: "Jennifer Martinez", action: "Outbound call - 5 min", time: "10 min ago", icon: Phone },
  { type: "email", contact: "Robert Chen", action: "Sent listing package", time: "45 min ago", icon: Mail },
  { type: "showing", contact: "Thomas Anderson", action: "Scheduled showing at 123 Oak St", time: "1 hour ago", icon: Home },
  { type: "meeting", contact: "Michael Brown", action: "Buyer consultation completed", time: "2 hours ago", icon: Calendar },
  { type: "call", contact: "Amanda Foster", action: "Follow-up call - left voicemail", time: "3 hours ago", icon: Phone },
]

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  return `$${(value / 1000).toFixed(0)}K`
}

export function CrmDashboard() {
  const totalLeads = pipelineStages.reduce((sum, stage) => sum + stage.leads.length, 0)
  const totalPipelineValue = pipelineStages.reduce(
    (sum, stage) => sum + stage.leads.reduce((s, lead) => s + lead.value, 0),
    0
  )
  const closedValue = pipelineStages.find(s => s.name === "Closed")?.leads.reduce((s, l) => s + l.value, 0) || 0

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Active Leads</p>
                <p className="text-3xl font-bold text-white">{totalLeads}</p>
              </div>
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Pipeline Value</p>
                <p className="text-3xl font-bold text-white">{formatCurrency(totalPipelineValue)}</p>
              </div>
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Closed This Month</p>
                <p className="text-3xl font-bold text-white">{formatCurrency(closedValue)}</p>
              </div>
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Conversion Rate</p>
                <p className="text-3xl font-bold text-white">24%</p>
              </div>
              <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Kanban */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <CardTitle className="text-white">Lead Pipeline</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pipelineStages.map((stage) => (
              <div key={stage.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                    <span className="text-sm font-medium text-white">{stage.name}</span>
                  </div>
                  <Badge className="bg-slate-700 text-slate-300 border-0">
                    {stage.leads.length}
                  </Badge>
                </div>
                <div className="space-y-2 min-h-[200px]">
                  {stage.leads.map((lead, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50 hover:border-slate-500 transition-colors cursor-pointer"
                    >
                      <p className="text-white font-medium text-sm truncate">{lead.name}</p>
                      <p className="text-green-400 text-sm font-semibold">{formatCurrency(lead.value)}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-slate-400">{lead.source}</span>
                        <Badge className={`text-xs border-0 ${lead.score >= 90 ? 'bg-green-900/50 text-green-300' : lead.score >= 80 ? 'bg-yellow-900/50 text-yellow-300' : 'bg-slate-600 text-slate-300'}`}>
                          {lead.score}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <CardTitle className="text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-700/50">
            {recentActivity.map((activity, idx) => {
              const Icon = activity.icon
              return (
                <div key={idx} className="flex items-center gap-4 p-4 hover:bg-slate-700/30 transition-colors">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium">{activity.contact}</p>
                    <p className="text-sm text-slate-400 truncate">{activity.action}</p>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-sm">
                    <Clock className="h-4 w-4" />
                    {activity.time}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
