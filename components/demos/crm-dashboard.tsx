"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  Zap,
  ArrowUpRight,
  MessageSquare,
  Target,
  Activity,
  Bell,
  CheckCircle2,
  ChevronRight,
} from "lucide-react"

const pipelineStages = [
  {
    name: "New",
    color: "from-blue-600 to-blue-400",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    leads: [
      { name: "Jennifer Martinez", value: 425000, source: "Zillow", score: 85, hot: true, daysInStage: 1 },
      { name: "Robert Chen", value: 680000, source: "Referral", score: 92, hot: true, daysInStage: 2 },
    ],
  },
  {
    name: "Contacted",
    color: "from-purple-600 to-purple-400",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
    textColor: "text-purple-400",
    leads: [
      { name: "Amanda Foster", value: 520000, source: "Website", score: 78, hot: false, daysInStage: 3 },
      { name: "David Williams", value: 890000, source: "Open House", score: 88, hot: true, daysInStage: 2 },
      { name: "Lisa Park", value: 340000, source: "Zillow", score: 72, hot: false, daysInStage: 5 },
    ],
  },
  {
    name: "Qualified",
    color: "from-yellow-600 to-yellow-400",
    bgColor: "bg-yellow-500/20",
    borderColor: "border-yellow-500/30",
    textColor: "text-yellow-400",
    leads: [
      { name: "Michael Brown", value: 1200000, source: "Referral", score: 95, hot: true, daysInStage: 4 },
      { name: "Sarah Johnson", value: 475000, source: "Website", score: 82, hot: false, daysInStage: 6 },
    ],
  },
  {
    name: "Showing",
    color: "from-orange-600 to-orange-400",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500/30",
    textColor: "text-orange-400",
    leads: [
      { name: "Thomas Anderson", value: 650000, source: "Realtor.com", score: 90, hot: true, daysInStage: 3 },
    ],
  },
  {
    name: "Offer",
    color: "from-pink-600 to-pink-400",
    bgColor: "bg-pink-500/20",
    borderColor: "border-pink-500/30",
    textColor: "text-pink-400",
    leads: [
      { name: "Emily Davis", value: 780000, source: "Referral", score: 98, hot: true, daysInStage: 2 },
    ],
  },
  {
    name: "Closed",
    color: "from-green-600 to-green-400",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30",
    textColor: "text-green-400",
    leads: [
      { name: "James Wilson", value: 545000, source: "Website", score: 100, hot: false, daysInStage: 0 },
    ],
  },
]

const recentActivity = [
  { type: "call", contact: "Jennifer Martinez", action: "Callback scheduled", time: "10 min ago", icon: Phone, color: "text-blue-400", bgColor: "bg-blue-500/20" },
  { type: "email", contact: "Robert Chen", action: "Listing package opened", time: "45 min ago", icon: Mail, color: "text-green-400", bgColor: "bg-green-500/20" },
  { type: "showing", contact: "Thomas Anderson", action: "Showing confirmed: 123 Oak St", time: "1 hour ago", icon: Home, color: "text-purple-400", bgColor: "bg-purple-500/20" },
  { type: "meeting", contact: "Michael Brown", action: "Pre-approval received", time: "2 hours ago", icon: CheckCircle2, color: "text-yellow-400", bgColor: "bg-yellow-500/20" },
  { type: "offer", contact: "Emily Davis", action: "Counter offer sent", time: "3 hours ago", icon: DollarSign, color: "text-pink-400", bgColor: "bg-pink-500/20" },
]

const upcomingTasks = [
  { task: "Follow up with Jennifer Martinez", due: "Today 2:00 PM", priority: "high" },
  { task: "Prepare CMA for David Williams", due: "Today 5:00 PM", priority: "medium" },
  { task: "Schedule showing at 456 Pine St", due: "Tomorrow 10:00 AM", priority: "low" },
]

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  return `$${(value / 1000).toFixed(0)}K`
}

export function CrmDashboard() {
  const [liveStats, setLiveStats] = useState({
    leadsThisMonth: 24,
    conversionRate: 24,
    pipelineValue: 5535000,
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        leadsThisMonth: prev.leadsThisMonth,
        conversionRate: Math.min(30, Math.max(20, prev.conversionRate + (Math.random() - 0.5) * 0.5)),
        pipelineValue: prev.pipelineValue + (Math.random() - 0.3) * 5000,
      }))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const totalLeads = pipelineStages.reduce((sum, stage) => sum + stage.leads.length, 0)
  const totalPipelineValue = pipelineStages.reduce(
    (sum, stage) => sum + stage.leads.reduce((s, lead) => s + lead.value, 0),
    0
  )
  const hotLeads = pipelineStages.reduce(
    (sum, stage) => sum + stage.leads.filter(l => l.hot).length,
    0
  )
  const closedValue = pipelineStages.find(s => s.name === "Closed")?.leads.reduce((s, l) => s + l.value, 0) || 0

  return (
    <div className="space-y-6">
      {/* Hot Leads Alert */}
      {hotLeads > 0 && (
        <div className="bg-gradient-to-r from-orange-900/40 to-yellow-900/40 border border-orange-500/30 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center animate-pulse">
              <Zap className="h-5 w-5 text-orange-400" />
            </div>
            <div>
              <p className="text-white font-medium">{hotLeads} Hot Leads Ready to Convert</p>
              <p className="text-sm text-orange-300">High engagement detected - prioritize follow-up</p>
            </div>
          </div>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
            View Hot Leads
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Active Leads</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{totalLeads}</p>
                  <span className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-0.5" />
                    +8 this week
                  </span>
                </div>
              </div>
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <Users className="h-7 w-7 text-blue-400" />
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Badge className="bg-orange-500/20 text-orange-300 border-0 text-xs">{hotLeads} hot</Badge>
              <Badge className="bg-slate-700 text-slate-300 border-0 text-xs">{totalLeads - hotLeads} nurturing</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Pipeline Value</p>
                <p className="text-4xl font-bold text-white">{formatCurrency(liveStats.pipelineValue)}</p>
              </div>
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center">
                <DollarSign className="h-7 w-7 text-green-400" />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs text-slate-400">Potential commission: <span className="text-green-400 font-medium">{formatCurrency(liveStats.pipelineValue * 0.03)}</span></p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Closed This Month</p>
                <p className="text-4xl font-bold text-white">{formatCurrency(closedValue)}</p>
              </div>
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <Target className="h-7 w-7 text-purple-400" />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" style={{ width: '35%' }} />
              </div>
              <p className="text-xs text-slate-400 mt-1">35% of monthly goal</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Conversion Rate</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{liveStats.conversionRate.toFixed(0)}%</p>
                </div>
              </div>
              <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
                <Activity className="h-7 w-7 text-yellow-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs text-green-400">+4% above market avg</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Pipeline Kanban */}
        <Card className="lg:col-span-2 bg-slate-800/80 border-slate-700">
          <CardHeader className="border-b border-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center gap-2">
                  Lead Pipeline
                  <Badge className="bg-blue-500/20 text-blue-300 border-0 text-xs animate-pulse">Live</Badge>
                </CardTitle>
                <p className="text-sm text-slate-400 mt-1">AI-scored leads with automated follow-up triggers</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-6 gap-3">
              {pipelineStages.map((stage) => (
                <div key={stage.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${stage.color}`} />
                      <span className="text-xs font-medium text-white">{stage.name}</span>
                    </div>
                    <Badge className="bg-slate-700 text-slate-300 border-0 text-xs">
                      {stage.leads.length}
                    </Badge>
                  </div>
                  <div className="space-y-2 min-h-[280px]">
                    {stage.leads.map((lead, idx) => (
                      <div
                        key={idx}
                        className={`${stage.bgColor} rounded-lg p-3 border ${stage.borderColor} hover:border-opacity-100 transition-all cursor-pointer group relative`}
                      >
                        {lead.hot && (
                          <div className="absolute -top-1 -right-1">
                            <span className="flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
                            </span>
                          </div>
                        )}
                        <p className="text-white font-medium text-sm truncate">{lead.name}</p>
                        <p className={`${stage.textColor} text-sm font-semibold`}>{formatCurrency(lead.value)}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-slate-400">{lead.source}</span>
                          <Badge className={`text-xs border-0 ${
                            lead.score >= 90 ? 'bg-green-900/50 text-green-300' :
                            lead.score >= 80 ? 'bg-yellow-900/50 text-yellow-300' :
                            'bg-slate-600 text-slate-300'
                          }`}>
                            {lead.score}
                          </Badge>
                        </div>
                        <div className="mt-2 pt-2 border-t border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="flex gap-1">
                            <Button size="sm" variant="ghost" className="h-6 px-2 text-xs text-slate-400 hover:text-white">
                              <Phone className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-6 px-2 text-xs text-slate-400 hover:text-white">
                              <Mail className="h-3 w-3" />
                            </Button>
                            <Button size="sm" variant="ghost" className="h-6 px-2 text-xs text-slate-400 hover:text-white">
                              <Calendar className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity & Tasks Sidebar */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <Card className="bg-slate-800/80 border-slate-700">
            <CardHeader className="border-b border-slate-700 py-4">
              <CardTitle className="text-white text-base flex items-center gap-2">
                <Activity className="h-4 w-4 text-blue-400" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-700/50">
                {recentActivity.map((activity, idx) => {
                  const Icon = activity.icon
                  return (
                    <div key={idx} className="flex items-start gap-3 p-4 hover:bg-slate-700/30 transition-colors">
                      <div className={`w-8 h-8 ${activity.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`h-4 w-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">{activity.contact}</p>
                        <p className="text-xs text-slate-400 truncate">{activity.action}</p>
                      </div>
                      <span className="text-xs text-slate-500 flex-shrink-0">{activity.time}</span>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card className="bg-slate-800/80 border-slate-700">
            <CardHeader className="border-b border-slate-700 py-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-white text-base flex items-center gap-2">
                  <Bell className="h-4 w-4 text-yellow-400" />
                  Upcoming Tasks
                </CardTitle>
                <Badge className="bg-yellow-500/20 text-yellow-300 border-0 text-xs">3 today</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-700/50">
                {upcomingTasks.map((task, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 hover:bg-slate-700/30 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      task.priority === 'high' ? 'bg-red-500' :
                      task.priority === 'medium' ? 'bg-yellow-500' : 'bg-slate-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-white text-sm">{task.task}</p>
                      <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {task.due}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
