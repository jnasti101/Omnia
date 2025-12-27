"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  TrendingDown,
  Building,
  DollarSign,
  Users,
  BarChart3,
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
  },
  {
    name: "Downtown Tower",
    type: "Multifamily",
    units: 312,
    occupancy: 94.8,
    noi: 3420000,
    capRate: 5.9,
    trend: "up",
  },
  {
    name: "Lakeside Commons",
    type: "Multifamily",
    units: 186,
    occupancy: 91.2,
    noi: 1680000,
    capRate: 7.1,
    trend: "down",
  },
  {
    name: "Parkview Residences",
    type: "Multifamily",
    units: 156,
    occupancy: 97.1,
    noi: 1450000,
    capRate: 6.5,
    trend: "up",
  },
  {
    name: "Metro Heights",
    type: "Multifamily",
    units: 204,
    occupancy: 93.6,
    noi: 1920000,
    capRate: 7.3,
    trend: "neutral",
  },
  {
    name: "Riverside Plaza",
    type: "Mixed-Use",
    units: 141,
    occupancy: 92.1,
    noi: 1130000,
    capRate: 7.8,
    trend: "up",
  },
]

const monthlyData = [
  { month: "Jul", noi: 980000 },
  { month: "Aug", noi: 1020000 },
  { month: "Sep", noi: 1050000 },
  { month: "Oct", noi: 1010000 },
  { month: "Nov", noi: 1080000 },
  { month: "Dec", noi: 1120000 },
]

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  return `$${(value / 1000).toFixed(0)}K`
}

export function PortfolioDashboard() {
  const maxNOI = Math.max(...monthlyData.map(d => d.noi))

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="h-5 w-5 text-green-400" />
              <Badge className="bg-green-900/30 text-green-300 border-green-800/50 border text-xs">
                +8.2%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-white">{formatCurrency(portfolioStats.totalNOI)}</p>
            <p className="text-sm text-slate-400">Total NOI</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <Users className="h-5 w-5 text-blue-400" />
              <Badge className="bg-green-900/30 text-green-300 border-green-800/50 border text-xs">
                +1.4%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-white">{portfolioStats.avgOccupancy}%</p>
            <p className="text-sm text-slate-400">Avg Occupancy</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="h-5 w-5 text-purple-400" />
            </div>
            <p className="text-2xl font-bold text-white">{portfolioStats.portfolioCapRate}%</p>
            <p className="text-sm text-slate-400">Portfolio Cap Rate</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <Building className="h-5 w-5 text-orange-400" />
            </div>
            <p className="text-2xl font-bold text-white">{portfolioStats.totalUnits.toLocaleString()}</p>
            <p className="text-sm text-slate-400">Total Units</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <BarChart3 className="h-5 w-5 text-cyan-400" />
            </div>
            <p className="text-2xl font-bold text-white">{portfolioStats.propertiesCount}</p>
            <p className="text-sm text-slate-400">Properties</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="h-5 w-5 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-white">{formatCurrency(portfolioStats.totalValue)}</p>
            <p className="text-sm text-slate-400">Portfolio Value</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* NOI Chart */}
        <Card className="bg-slate-800/80 border-slate-700 lg:col-span-1">
          <CardHeader className="border-b border-slate-700">
            <CardTitle className="text-white text-lg">Monthly NOI Trend</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex items-end justify-between h-48 gap-2">
              {monthlyData.map((data) => {
                const height = (data.noi / maxNOI) * 100
                return (
                  <div key={data.month} className="flex flex-col items-center flex-1">
                    <div className="w-full flex flex-col items-center">
                      <span className="text-xs text-slate-400 mb-2">{formatCurrency(data.noi)}</span>
                      <div
                        className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t-md transition-all hover:from-green-500 hover:to-green-300"
                        style={{ height: `${height}%`, minHeight: '20px' }}
                      />
                    </div>
                    <span className="text-xs text-slate-400 mt-2">{data.month}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Property Performance Table */}
        <Card className="bg-slate-800/80 border-slate-700 lg:col-span-2">
          <CardHeader className="border-b border-slate-700">
            <CardTitle className="text-white text-lg">Property Performance</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700 text-left">
                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Property</th>
                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Units</th>
                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Occupancy</th>
                    <th className="px-6 py-4 text-sm font-medium text-slate-400">NOI</th>
                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Cap Rate</th>
                    <th className="px-6 py-4 text-sm font-medium text-slate-400">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map((property) => (
                    <tr key={property.name} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-white font-medium">{property.name}</p>
                          <p className="text-sm text-slate-400">{property.type}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300">{property.units}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${property.occupancy >= 95 ? 'bg-green-500' : property.occupancy >= 90 ? 'bg-yellow-500' : 'bg-red-500'}`}
                              style={{ width: `${property.occupancy}%` }}
                            />
                          </div>
                          <span className="text-slate-300 text-sm">{property.occupancy}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-300">{formatCurrency(property.noi)}</td>
                      <td className="px-6 py-4 text-slate-300">{property.capRate}%</td>
                      <td className="px-6 py-4">
                        {property.trend === "up" && (
                          <div className="flex items-center text-green-400">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            <span className="text-sm">Up</span>
                          </div>
                        )}
                        {property.trend === "down" && (
                          <div className="flex items-center text-red-400">
                            <TrendingDown className="h-4 w-4 mr-1" />
                            <span className="text-sm">Down</span>
                          </div>
                        )}
                        {property.trend === "neutral" && (
                          <span className="text-slate-400 text-sm">Stable</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Investor Summary */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <CardTitle className="text-white text-lg">Investor Summary - Q4 2024</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <p className="text-3xl font-bold text-white">12.4%</p>
              <p className="text-sm text-slate-400 mt-1">Cash-on-Cash Return</p>
            </div>
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <p className="text-3xl font-bold text-white">1.42x</p>
              <p className="text-sm text-slate-400 mt-1">Equity Multiple</p>
            </div>
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <p className="text-3xl font-bold text-white">18.6%</p>
              <p className="text-sm text-slate-400 mt-1">IRR (Projected)</p>
            </div>
            <div className="text-center p-4 bg-slate-700/30 rounded-lg">
              <p className="text-3xl font-bold text-white">$2.4M</p>
              <p className="text-sm text-slate-400 mt-1">Distributions YTD</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
