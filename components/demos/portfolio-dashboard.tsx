"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  TrendingUp,
  TrendingDown,
  Building,
  DollarSign,
  Users,
  BarChart3,
  ArrowUpRight,
  Download,
  Calendar,
  PieChart,
  Activity,
  Target,
  Zap,
} from "lucide-react"

const portfolioStats = {
  totalNOI: 12450000,
  avgOccupancy: 94.2,
  portfolioCapRate: 6.8,
  totalUnits: 1247,
  propertiesCount: 8,
  totalValue: 183000000,
}

const properties = [
  {
    name: "Sunset Gardens",
    type: "Multifamily",
    units: 248,
    occupancy: 96.4,
    noi: 2850000,
    capRate: 6.2,
    trend: "up",
    change: "+2.3%",
    alert: null,
  },
  {
    name: "Downtown Tower",
    type: "Multifamily",
    units: 312,
    occupancy: 94.8,
    noi: 3420000,
    capRate: 5.9,
    trend: "up",
    change: "+1.8%",
    alert: null,
  },
  {
    name: "Lakeside Commons",
    type: "Multifamily",
    units: 186,
    occupancy: 91.2,
    noi: 1680000,
    capRate: 7.1,
    trend: "down",
    change: "-1.2%",
    alert: "Below target occupancy",
  },
  {
    name: "Parkview Residences",
    type: "Multifamily",
    units: 156,
    occupancy: 97.1,
    noi: 1450000,
    capRate: 6.5,
    trend: "up",
    change: "+3.1%",
    alert: null,
  },
  {
    name: "Metro Heights",
    type: "Multifamily",
    units: 204,
    occupancy: 93.6,
    noi: 1920000,
    capRate: 7.3,
    trend: "neutral",
    change: "0.0%",
    alert: null,
  },
  {
    name: "Riverside Plaza",
    type: "Mixed-Use",
    units: 141,
    occupancy: 92.1,
    noi: 1130000,
    capRate: 7.8,
    trend: "up",
    change: "+0.9%",
    alert: "Lease renewal due: 12 units",
  },
]

const monthlyData = [
  { month: "Jan", noi: 920000, projected: 900000 },
  { month: "Feb", noi: 945000, projected: 920000 },
  { month: "Mar", noi: 980000, projected: 950000 },
  { month: "Apr", noi: 1010000, projected: 980000 },
  { month: "May", noi: 1025000, projected: 1000000 },
  { month: "Jun", noi: 1050000, projected: 1020000 },
  { month: "Jul", noi: 1080000, projected: 1040000 },
  { month: "Aug", noi: 1095000, projected: 1060000 },
  { month: "Sep", noi: 1120000, projected: 1080000 },
  { month: "Oct", noi: 1090000, projected: 1100000 },
  { month: "Nov", noi: 1140000, projected: 1120000 },
  { month: "Dec", noi: 1180000, projected: 1140000 },
]

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  return `$${(value / 1000).toFixed(0)}K`
}

function AnimatedCounter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [displayValue, setDisplayValue] = useState(value * 0.8)

  useEffect(() => {
    const timer = setTimeout(() => setDisplayValue(value), 100)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <span className="tabular-nums transition-all duration-1000">
      {prefix}{displayValue.toFixed(decimals)}{suffix}
    </span>
  )
}

export function PortfolioDashboard() {
  const [liveStats, setLiveStats] = useState({
    totalNOI: 12450000,
    avgOccupancy: 94.2,
    portfolioValue: 183000000,
  })

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        totalNOI: prev.totalNOI + (Math.random() - 0.3) * 10000,
        avgOccupancy: Math.min(100, Math.max(90, prev.avgOccupancy + (Math.random() - 0.5) * 0.1)),
        portfolioValue: prev.portfolioValue + (Math.random() - 0.3) * 50000,
      }))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const maxNOI = Math.max(...monthlyData.map(d => Math.max(d.noi, d.projected)))

  return (
    <div className="space-y-6">
      {/* Portfolio Health Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-3 bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-slate-400">Total Portfolio Value</p>
                <p className="text-4xl font-bold text-white">
                  {formatCurrency(liveStats.portfolioValue)}
                </p>
              </div>
              <Badge className="bg-green-500/20 text-green-300 border-0 flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +8.4% YoY
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-slate-400">Annual NOI</span>
                </div>
                <p className="text-2xl font-bold text-white">{formatCurrency(liveStats.totalNOI)}</p>
                <p className="text-xs text-green-400 mt-1">+12.3% vs last year</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-slate-400">Avg Occupancy</span>
                </div>
                <p className="text-2xl font-bold text-white">{liveStats.avgOccupancy.toFixed(1)}%</p>
                <p className="text-xs text-green-400 mt-1">+1.4% vs target</p>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-purple-400" />
                  <span className="text-sm text-slate-400">Portfolio Cap Rate</span>
                </div>
                <p className="text-2xl font-bold text-white">{portfolioStats.portfolioCapRate}%</p>
                <p className="text-xs text-slate-400 mt-1">Market avg: 6.5%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-900/50 to-slate-900 border-blue-800/50">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Download className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-white font-medium">Reports</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">Generate investor-ready reports with one click</p>
            </div>
            <div className="space-y-2">
              <Button variant="outline" className="w-full border-blue-800/50 text-blue-300 hover:bg-blue-900/30 justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Q4 2024 Report
              </Button>
              <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 justify-start">
                <PieChart className="h-4 w-4 mr-2" />
                Annual Summary
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* NOI Chart with Projections */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                NOI Performance vs Projections
                <Badge className="bg-green-500/20 text-green-300 border-0 text-xs">Ahead of Plan</Badge>
              </CardTitle>
              <p className="text-sm text-slate-400 mt-1">Monthly net operating income tracking</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" />
                <span className="text-slate-400">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-600 rounded-full" />
                <span className="text-slate-400">Projected</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-end justify-between h-64 gap-1">
            {monthlyData.map((data, idx) => {
              const actualHeight = (data.noi / maxNOI) * 100
              const projectedHeight = (data.projected / maxNOI) * 100
              const isAhead = data.noi > data.projected

              return (
                <div key={data.month} className="flex-1 flex flex-col items-center group">
                  <div className="relative w-full flex justify-center gap-0.5" style={{ height: '200px' }}>
                    {/* Projected bar (background) */}
                    <div
                      className="w-3 bg-slate-700 rounded-t-sm absolute bottom-0 left-1/2 -translate-x-[7px]"
                      style={{ height: `${projectedHeight}%` }}
                    />
                    {/* Actual bar */}
                    <div
                      className={`w-3 rounded-t-sm absolute bottom-0 left-1/2 translate-x-[1px] transition-all duration-500 ${
                        isAhead
                          ? 'bg-gradient-to-t from-green-600 to-green-400'
                          : 'bg-gradient-to-t from-yellow-600 to-yellow-400'
                      }`}
                      style={{ height: `${actualHeight}%` }}
                    />
                  </div>
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-16 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs z-10 transition-opacity pointer-events-none">
                    <p className="text-white font-medium">{formatCurrency(data.noi)}</p>
                    <p className="text-slate-400">vs {formatCurrency(data.projected)} proj</p>
                  </div>
                  <span className="text-xs text-slate-400 mt-2">{data.month}</span>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Property Performance Table */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white">Property Performance</CardTitle>
              <p className="text-sm text-slate-400 mt-1">Real-time metrics across your portfolio</p>
            </div>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <Activity className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 text-left bg-slate-800/50">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Units</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Occupancy</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">NOI</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Cap Rate</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Trend</th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Alert</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {properties.map((property) => (
                  <tr key={property.name} className="hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                          <Building className="h-5 w-5 text-slate-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{property.name}</p>
                          <p className="text-sm text-slate-400">{property.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-300">{property.units}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              property.occupancy >= 95
                                ? 'bg-gradient-to-r from-green-600 to-green-400'
                                : property.occupancy >= 92
                                ? 'bg-gradient-to-r from-yellow-600 to-yellow-400'
                                : 'bg-gradient-to-r from-red-600 to-red-400'
                            }`}
                            style={{ width: `${property.occupancy}%` }}
                          />
                        </div>
                        <span className="text-slate-300 text-sm font-medium">{property.occupancy}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-300 font-medium">{formatCurrency(property.noi)}</td>
                    <td className="px-6 py-4 text-slate-300">{property.capRate}%</td>
                    <td className="px-6 py-4">
                      <div className={`flex items-center gap-1 ${
                        property.trend === 'up' ? 'text-green-400' :
                        property.trend === 'down' ? 'text-red-400' : 'text-slate-400'
                      }`}>
                        {property.trend === 'up' && <TrendingUp className="h-4 w-4" />}
                        {property.trend === 'down' && <TrendingDown className="h-4 w-4" />}
                        <span className="text-sm font-medium">{property.change}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {property.alert ? (
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs">
                          {property.alert}
                        </Badge>
                      ) : (
                        <span className="text-slate-500">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Investor Summary */}
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-white">Investor Summary - Q4 2024</CardTitle>
                <p className="text-sm text-slate-400">Key performance indicators for stakeholder reporting</p>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-900/30 to-slate-800 rounded-xl border border-green-800/30">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <p className="text-4xl font-bold text-white">12.4%</p>
              <p className="text-sm text-slate-400 mt-1">Cash-on-Cash Return</p>
              <p className="text-xs text-green-400 mt-2">+1.2% above target</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-slate-800 rounded-xl border border-blue-800/30">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <p className="text-4xl font-bold text-white">1.42x</p>
              <p className="text-sm text-slate-400 mt-1">Equity Multiple</p>
              <p className="text-xs text-blue-400 mt-2">On track for 1.8x at exit</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-slate-800 rounded-xl border border-purple-800/30">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-purple-400" />
              </div>
              <p className="text-4xl font-bold text-white">18.6%</p>
              <p className="text-sm text-slate-400 mt-1">IRR (Projected)</p>
              <p className="text-xs text-purple-400 mt-2">Target: 15%</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-900/30 to-slate-800 rounded-xl border border-yellow-800/30">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-yellow-400" />
              </div>
              <p className="text-4xl font-bold text-white">$2.4M</p>
              <p className="text-sm text-slate-400 mt-1">Distributions YTD</p>
              <p className="text-xs text-yellow-400 mt-2">Next: Dec 31, 2024</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
