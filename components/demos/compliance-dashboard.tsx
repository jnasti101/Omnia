"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Shield,
  Calendar,
  Search,
  Filter,
  Bell,
  TrendingUp,
  FileText,
  Building2,
  AlertTriangle,
  ChevronRight,
  ArrowUpRight,
  Flame,
  Droplets,
  Zap,
  Wind,
  RefreshCw,
} from "lucide-react"
import { Input } from "@/components/ui/input"

// Simulated compliance items
const initialComplianceItems = [
  {
    id: "FIR-001",
    type: "Fire Safety",
    property: "125 Main Street",
    status: "expiring_soon",
    dueDate: "Jan 15, 2026",
    daysRemaining: 5,
    vendor: "City Fire Dept",
    lastInspection: "Jan 10, 2025",
    icon: Flame,
    color: "red",
  },
  {
    id: "ELV-003",
    type: "Elevator Inspection",
    property: "200 Oak Avenue",
    status: "overdue",
    dueDate: "Jan 5, 2026",
    daysRemaining: -5,
    vendor: "SafeLift Inspections",
    lastInspection: "Jan 5, 2025",
    icon: Building2,
    color: "orange",
  },
  {
    id: "BLR-007",
    type: "Boiler Permit",
    property: "350 Park Lane",
    status: "compliant",
    dueDate: "Mar 20, 2026",
    daysRemaining: 69,
    vendor: "State Boiler Board",
    lastInspection: "Mar 15, 2025",
    icon: Droplets,
    color: "blue",
  },
  {
    id: "HVC-012",
    type: "HVAC Certification",
    property: "125 Main Street",
    status: "compliant",
    dueDate: "Apr 10, 2026",
    daysRemaining: 90,
    vendor: "CoolAir HVAC",
    lastInspection: "Apr 10, 2025",
    icon: Wind,
    color: "cyan",
  },
  {
    id: "ELC-005",
    type: "Electrical Inspection",
    property: "500 River Road",
    status: "scheduled",
    dueDate: "Jan 22, 2026",
    daysRemaining: 12,
    vendor: "PowerSafe Electric",
    lastInspection: "Jan 22, 2025",
    scheduledDate: "Jan 20, 2026",
    icon: Zap,
    color: "yellow",
  },
  {
    id: "FIR-002",
    type: "Fire Alarm Test",
    property: "200 Oak Avenue",
    status: "in_progress",
    dueDate: "Jan 18, 2026",
    daysRemaining: 8,
    vendor: "City Fire Dept",
    lastInspection: "Jan 18, 2025",
    icon: Flame,
    color: "red",
  },
]

const properties = [
  { name: "125 Main Street", units: 48, compliance: 92 },
  { name: "200 Oak Avenue", units: 32, compliance: 78 },
  { name: "350 Park Lane", units: 24, compliance: 100 },
  { name: "500 River Road", units: 56, compliance: 95 },
]

const statusStyles = {
  compliant: { badge: "bg-green-500/20 text-green-300 border-green-500/50", label: "Compliant", dot: "bg-green-500" },
  scheduled: { badge: "bg-blue-500/20 text-blue-300 border-blue-500/50", label: "Scheduled", dot: "bg-blue-500" },
  in_progress: { badge: "bg-purple-500/20 text-purple-300 border-purple-500/50", label: "In Progress", dot: "bg-purple-500" },
  expiring_soon: { badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/50", label: "Expiring Soon", dot: "bg-yellow-500" },
  overdue: { badge: "bg-red-500/20 text-red-300 border-red-500/50", label: "Overdue", dot: "bg-red-500" },
}

const colorStyles = {
  red: "bg-red-500/20 text-red-400",
  orange: "bg-orange-500/20 text-orange-400",
  yellow: "bg-yellow-500/20 text-yellow-400",
  blue: "bg-blue-500/20 text-blue-400",
  cyan: "bg-cyan-500/20 text-cyan-400",
  green: "bg-green-500/20 text-green-400",
}

export function ComplianceDashboard() {
  const [items, setItems] = useState(initialComplianceItems)
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [liveStats, setLiveStats] = useState({
    overallCompliance: 89.2,
    alertsToday: 3,
    upcomingInspections: 8,
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        overallCompliance: Math.min(100, Math.max(85, prev.overallCompliance + (Math.random() - 0.45) * 0.3)),
      }))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const overdueCount = items.filter(i => i.status === "overdue").length
  const expiringCount = items.filter(i => i.status === "expiring_soon").length
  const compliantCount = items.filter(i => i.status === "compliant").length

  return (
    <div className="space-y-6">
      {/* Alert Banner */}
      {overdueCount > 0 && (
        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center animate-pulse">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <p className="text-white font-medium">{overdueCount} Overdue Compliance {overdueCount === 1 ? 'Item' : 'Items'}</p>
              <p className="text-sm text-red-300">Immediate attention required to avoid violations</p>
            </div>
          </div>
          <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
            View Overdue
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Overall Compliance</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{liveStats.overallCompliance.toFixed(1)}%</p>
                </div>
              </div>
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                <Shield className="h-7 w-7 text-emerald-400" />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000"
                  style={{ width: `${liveStats.overallCompliance}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-1">Target: 95%</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-red-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Action Required</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{overdueCount + expiringCount}</p>
                  <span className="text-lg text-slate-400">items</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-red-500/20 rounded-2xl flex items-center justify-center">
                <AlertCircle className="h-7 w-7 text-red-400" />
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Badge className="bg-red-500/20 text-red-300 border-0 text-xs">{overdueCount} overdue</Badge>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-0 text-xs">{expiringCount} expiring</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Upcoming (30 days)</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{liveStats.upcomingInspections}</p>
                  <span className="text-lg text-slate-400">inspections</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <Calendar className="h-7 w-7 text-blue-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4" />
              <span>Next: Fire Safety in 5 days</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Fully Compliant</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{compliantCount}</p>
                  <span className="text-lg text-slate-400">/ {items.length}</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center">
                <CheckCircle2 className="h-7 w-7 text-green-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-sm text-green-400">+2 this month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Compliance Items Table */}
        <div className="lg:col-span-2">
          <Card className="bg-slate-800/80 border-slate-700">
            <CardHeader className="border-b border-slate-700">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-white flex items-center gap-2">
                    Compliance Tracker
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-0 text-xs animate-pulse">Live</Badge>
                  </CardTitle>
                  <p className="text-sm text-slate-400 mt-1">All certifications and inspections</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      placeholder="Search..."
                      className="pl-9 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 w-48"
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
                      <th className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Type</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Property</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Due Date</th>
                      <th className="px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Vendor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/50">
                    {items.map((item) => {
                      const status = statusStyles[item.status as keyof typeof statusStyles]
                      const colorStyle = colorStyles[item.color as keyof typeof colorStyles]
                      const Icon = item.icon
                      const isSelected = selectedItem === item.id

                      return (
                        <tr
                          key={item.id}
                          className={`hover:bg-slate-700/30 transition-colors cursor-pointer ${isSelected ? 'bg-slate-700/40' : ''}`}
                          onClick={() => setSelectedItem(isSelected ? null : item.id)}
                        >
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorStyle}`}>
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-white font-medium text-sm">{item.type}</p>
                                <p className="text-xs text-slate-500">{item.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className="text-slate-300 text-sm">{item.property}</span>
                          </td>
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full ${status.dot} ${item.status === 'in_progress' ? 'animate-pulse' : ''}`} />
                              <Badge className={`${status.badge} border text-xs`}>
                                {status.label}
                              </Badge>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <div>
                              <p className={`text-sm ${item.daysRemaining < 0 ? 'text-red-400' : item.daysRemaining <= 7 ? 'text-yellow-400' : 'text-slate-300'}`}>
                                {item.dueDate}
                              </p>
                              <p className={`text-xs ${item.daysRemaining < 0 ? 'text-red-400' : item.daysRemaining <= 7 ? 'text-yellow-400' : 'text-slate-500'}`}>
                                {item.daysRemaining < 0 ? `${Math.abs(item.daysRemaining)} days overdue` : `${item.daysRemaining} days remaining`}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-4">
                            <span className="text-slate-400 text-sm">{item.vendor}</span>
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

        {/* Property Compliance Sidebar */}
        <div className="space-y-6">
          <Card className="bg-slate-800/80 border-slate-700">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-white text-lg">Property Health</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              {properties.map((property) => (
                <div
                  key={property.name}
                  className="p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-white font-medium text-sm">{property.name}</p>
                      <p className="text-xs text-slate-500">{property.units} units</p>
                    </div>
                    <span className={`text-lg font-bold ${property.compliance >= 95 ? 'text-green-400' : property.compliance >= 80 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {property.compliance}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-600 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${property.compliance >= 95 ? 'bg-green-500' : property.compliance >= 80 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${property.compliance}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-slate-800/80 border-slate-700">
            <CardHeader className="border-b border-slate-700">
              <CardTitle className="text-white text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <Button className="w-full justify-start bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Calendar className="h-4 w-4 mr-3" />
                Schedule Inspection
                <ArrowUpRight className="h-4 w-4 ml-auto" />
              </Button>
              <Button className="w-full justify-start bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <FileText className="h-4 w-4 mr-3" />
                Upload Certificate
                <ArrowUpRight className="h-4 w-4 ml-auto" />
              </Button>
              <Button className="w-full justify-start bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30">
                <RefreshCw className="h-4 w-4 mr-3" />
                Sync with Vendors
                <ArrowUpRight className="h-4 w-4 ml-auto" />
              </Button>
              <Button className="w-full justify-start bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Bell className="h-4 w-4 mr-3" />
                Set Reminder
                <ArrowUpRight className="h-4 w-4 ml-auto" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
