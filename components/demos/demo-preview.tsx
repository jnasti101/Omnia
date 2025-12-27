"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  TrendingUp,
  Users,
  Landmark,
  AlertCircle,
  DollarSign,
  Target,
  FileText,
  CheckCircle2,
  Clock,
  Zap,
  BarChart3,
  Monitor,
} from "lucide-react"

interface DemoPreviewProps {
  demoId: string
}

const demoData = {
  "property-managers": {
    title: "Maintenance Dashboard",
    icon: Building2,
    color: "blue",
    stats: [
      { label: "Open Tickets", value: "12", icon: AlertCircle, trend: "-15%" },
      { label: "Avg Response", value: "4.2h", icon: Clock, trend: "+8%" },
      { label: "Completed Today", value: "8", icon: CheckCircle2, trend: "+3" },
      { label: "Satisfaction", value: "94.7%", icon: Target, trend: "+1.2%" },
    ],
    features: ["Real-time ticket tracking", "AI-powered vendor matching", "SLA monitoring", "Tenant communication"],
  },
  "asset-managers": {
    title: "Portfolio Dashboard",
    icon: TrendingUp,
    color: "green",
    stats: [
      { label: "Portfolio Value", value: "$183M", icon: DollarSign, trend: "+8.4%" },
      { label: "Annual NOI", value: "$12.4M", icon: BarChart3, trend: "+12.3%" },
      { label: "Avg Occupancy", value: "94.2%", icon: Target, trend: "+1.4%" },
      { label: "Properties", value: "8", icon: Building2, trend: null },
    ],
    features: ["NOI performance tracking", "Investor reporting", "Cap rate analysis", "Property comparisons"],
  },
  "realtors": {
    title: "CRM Dashboard",
    icon: Users,
    color: "purple",
    stats: [
      { label: "Active Leads", value: "24", icon: Users, trend: "+8" },
      { label: "Pipeline Value", value: "$5.5M", icon: DollarSign, trend: "+12%" },
      { label: "Conversion Rate", value: "24%", icon: Target, trend: "+4%" },
      { label: "Hot Leads", value: "6", icon: Zap, trend: null },
    ],
    features: ["Lead pipeline visualization", "AI lead scoring", "Automated follow-ups", "Activity tracking"],
  },
  "lenders": {
    title: "Loan Pipeline",
    icon: Landmark,
    color: "orange",
    stats: [
      { label: "Active Loans", value: "24", icon: FileText, trend: "+4" },
      { label: "Pipeline Value", value: "$18.5M", icon: DollarSign, trend: "+15%" },
      { label: "Avg Processing", value: "18 days", icon: Clock, trend: "-3 days" },
      { label: "Approval Rate", value: "78%", icon: CheckCircle2, trend: "+3%" },
    ],
    features: ["Document tracking", "Risk scoring", "Compliance automation", "Stage progression"],
  },
}

const colorClasses = {
  blue: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    border: "border-blue-500/30",
    gradient: "from-blue-600 to-blue-400",
  },
  green: {
    bg: "bg-green-500/20",
    text: "text-green-400",
    border: "border-green-500/30",
    gradient: "from-green-600 to-green-400",
  },
  purple: {
    bg: "bg-purple-500/20",
    text: "text-purple-400",
    border: "border-purple-500/30",
    gradient: "from-purple-600 to-purple-400",
  },
  orange: {
    bg: "bg-orange-500/20",
    text: "text-orange-400",
    border: "border-orange-500/30",
    gradient: "from-orange-600 to-orange-400",
  },
}

export function DemoPreview({ demoId }: DemoPreviewProps) {
  const demo = demoData[demoId as keyof typeof demoData]
  if (!demo) return null

  const colors = colorClasses[demo.color as keyof typeof colorClasses]
  const Icon = demo.icon

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
          <Icon className={`h-6 w-6 ${colors.text}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{demo.title}</h3>
          <p className="text-sm text-slate-400">Interactive dashboard preview</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {demo.stats.map((stat, idx) => {
          const StatIcon = stat.icon
          return (
            <Card key={idx} className="bg-slate-800/80 border-slate-700">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className={`w-8 h-8 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <StatIcon className={`h-4 w-4 ${colors.text}`} />
                  </div>
                  {stat.trend && (
                    <span className={`text-xs ${stat.trend.startsWith('+') || stat.trend.startsWith('-') && stat.trend.includes('days') ? 'text-green-400' : stat.trend.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                      {stat.trend}
                    </span>
                  )}
                </div>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Features List */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardContent className="p-4">
          <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
          <div className="grid grid-cols-1 gap-2">
            {demo.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className={`h-4 w-4 ${colors.text} flex-shrink-0`} />
                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Desktop Hint */}
      <div className="flex items-center justify-center gap-2 pt-4 text-slate-500">
        <Monitor className="h-4 w-4" />
        <span className="text-xs">View on desktop for full interactive demo</span>
      </div>
    </div>
  )
}
