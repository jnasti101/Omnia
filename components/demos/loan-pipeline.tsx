"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  FileText,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Calendar,
  Upload,
  TrendingUp,
  Zap,
  AlertTriangle,
  ChevronRight,
  Shield,
  Target,
  Activity,
} from "lucide-react"

const pipelineStats = {
  totalApplications: 24,
  pipelineValue: 18500000,
  avgProcessingDays: 18,
  approvalRate: 78,
}

const loanStages = [
  {
    name: "Application",
    count: 6,
    color: "from-blue-600 to-blue-400",
    bgColor: "bg-blue-500",
    loans: [
      { borrower: "Michael Torres", amount: 485000, property: "Single Family", daysInStage: 2, riskScore: 72, docsComplete: 45 },
      { borrower: "Sarah Kim", amount: 720000, property: "Condo", daysInStage: 1, riskScore: 85, docsComplete: 30 },
    ],
  },
  {
    name: "Documents",
    count: 8,
    color: "from-purple-600 to-purple-400",
    bgColor: "bg-purple-500",
    loans: [
      { borrower: "James Anderson", amount: 925000, property: "Multi-Family", daysInStage: 5, riskScore: 68, docsComplete: 78 },
      { borrower: "Lisa Chen", amount: 340000, property: "Single Family", daysInStage: 3, riskScore: 91, docsComplete: 92 },
    ],
  },
  {
    name: "Underwriting",
    count: 5,
    color: "from-yellow-600 to-yellow-400",
    bgColor: "bg-yellow-500",
    loans: [
      { borrower: "Robert Martinez", amount: 1250000, property: "Commercial", daysInStage: 4, riskScore: 65, docsComplete: 100 },
      { borrower: "Emily Davis", amount: 560000, property: "Single Family", daysInStage: 7, riskScore: 88, docsComplete: 100, flag: "Extended review" },
    ],
  },
  {
    name: "Approval",
    count: 3,
    color: "from-orange-600 to-orange-400",
    bgColor: "bg-orange-500",
    loans: [
      { borrower: "David Wilson", amount: 890000, property: "Multi-Family", daysInStage: 2, riskScore: 82, docsComplete: 100 },
    ],
  },
  {
    name: "Funded",
    count: 2,
    color: "from-green-600 to-green-400",
    bgColor: "bg-green-500",
    loans: [
      { borrower: "Jennifer Brown", amount: 675000, property: "Single Family", daysInStage: 0, riskScore: 94, docsComplete: 100 },
    ],
  },
]

const documentChecklist = [
  { name: "Income Verification (W2s/Pay Stubs)", status: "complete", aiVerified: true },
  { name: "Bank Statements (3 months)", status: "complete", aiVerified: true },
  { name: "Tax Returns (2 years)", status: "pending", aiVerified: false, dueIn: "2 days" },
  { name: "Property Appraisal", status: "in_progress", aiVerified: false, eta: "Tomorrow" },
  { name: "Title Report", status: "pending", aiVerified: false },
  { name: "Homeowner's Insurance Binder", status: "pending", aiVerified: false },
]

const alerts = [
  { type: "urgent", message: "2 loans at SLA risk - action needed within 24h", count: 2 },
  { type: "warning", message: "5 documents pending borrower upload", count: 5 },
]

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  return `$${(value / 1000).toFixed(0)}K`
}

export function LoanPipeline() {
  const [liveStats, setLiveStats] = useState({
    pipelineValue: 18500000,
    avgProcessingDays: 18,
    approvalRate: 78,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        pipelineValue: prev.pipelineValue + (Math.random() - 0.3) * 20000,
        avgProcessingDays: Math.max(12, Math.min(25, prev.avgProcessingDays + (Math.random() - 0.5) * 0.5)),
        approvalRate: Math.max(70, Math.min(85, prev.approvalRate + (Math.random() - 0.5) * 0.3)),
      }))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const totalLoans = loanStages.reduce((sum, stage) => sum + stage.loans.length, 0)

  return (
    <div className="space-y-6">
      {/* Alerts Banner */}
      <div className="space-y-2">
        {alerts.map((alert, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-4 flex items-center justify-between ${
              alert.type === 'urgent'
                ? 'bg-gradient-to-r from-red-900/40 to-orange-900/40 border border-red-500/30'
                : 'bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                alert.type === 'urgent' ? 'bg-red-500/20' : 'bg-yellow-500/20'
              }`}>
                {alert.type === 'urgent' ? (
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-yellow-400" />
                )}
              </div>
              <div>
                <p className="text-white font-medium">{alert.message}</p>
              </div>
            </div>
            <Button size="sm" className={`${
              alert.type === 'urgent' ? 'bg-red-500 hover:bg-red-600' : 'bg-yellow-500 hover:bg-yellow-600'
            } text-white`}>
              View Details
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Active Applications</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{totalLoans}</p>
                  <span className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-0.5" />
                    +4 this week
                  </span>
                </div>
              </div>
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                <FileText className="h-7 w-7 text-blue-400" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-400">Processing</span>
                <span className="text-slate-300">{totalLoans - 1} active</span>
              </div>
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
              <p className="text-xs text-slate-400">Projected fee revenue: <span className="text-green-400 font-medium">{formatCurrency(liveStats.pipelineValue * 0.01)}</span></p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Avg Processing Time</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{liveStats.avgProcessingDays.toFixed(0)}</p>
                  <span className="text-lg text-slate-400">days</span>
                </div>
              </div>
              <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                <Clock className="h-7 w-7 text-purple-400" />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(100, (30 - liveStats.avgProcessingDays) / 30 * 100)}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-1">Target: under 21 days</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-500/10 rounded-full -mr-10 -mt-10" />
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400 mb-1">Approval Rate</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-bold text-white">{liveStats.approvalRate.toFixed(0)}%</p>
                </div>
              </div>
              <div className="w-14 h-14 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
                <Target className="h-7 w-7 text-yellow-400" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs text-green-400">+3% vs last quarter</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Stages */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-white flex items-center gap-2">
                Loan Pipeline
                <Badge className="bg-blue-500/20 text-blue-300 border-0 text-xs animate-pulse">Live</Badge>
              </CardTitle>
              <p className="text-sm text-slate-400 mt-1">AI-powered risk scoring and automated compliance checks</p>
            </div>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <Activity className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          {/* Stage Progress Bar */}
          <div className="flex items-center gap-1 mb-8">
            {loanStages.map((stage, idx) => (
              <div key={stage.name} className="flex-1 relative">
                <div className={`h-3 ${stage.bgColor} ${idx === 0 ? 'rounded-l-full' : ''} ${idx === loanStages.length - 1 ? 'rounded-r-full' : ''}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-white drop-shadow-md">{stage.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mb-4">
            {loanStages.map((stage) => (
              <div key={stage.name} className="text-center flex-1">
                <span className="text-xs text-slate-400">{stage.name}</span>
              </div>
            ))}
          </div>

          {/* Loan Cards Grid */}
          <div className="grid lg:grid-cols-5 gap-4">
            {loanStages.map((stage) => (
              <div key={stage.name} className="space-y-3">
                <div className="space-y-2">
                  {stage.loans.map((loan, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 hover:border-slate-500 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                          <User className="h-4 w-4 text-slate-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium text-sm truncate">{loan.borrower}</p>
                        </div>
                      </div>
                      <p className="text-green-400 font-bold text-lg">{formatCurrency(loan.amount)}</p>
                      <div className="flex items-center gap-1 text-slate-400 mt-1">
                        <Building className="h-3 w-3" />
                        <span className="text-xs">{loan.property}</span>
                      </div>

                      {/* Risk Score */}
                      <div className="mt-3 pt-3 border-t border-slate-600/50">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-400">Risk Score</span>
                          <Badge className={`text-xs border-0 ${
                            loan.riskScore >= 80 ? 'bg-green-900/50 text-green-300' :
                            loan.riskScore >= 65 ? 'bg-yellow-900/50 text-yellow-300' :
                            'bg-red-900/50 text-red-300'
                          }`}>
                            {loan.riskScore}
                          </Badge>
                        </div>
                        <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              loan.riskScore >= 80 ? 'bg-green-500' :
                              loan.riskScore >= 65 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${loan.riskScore}%` }}
                          />
                        </div>
                      </div>

                      {/* Docs Progress */}
                      <div className="mt-2">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-slate-400">Docs</span>
                          <span className="text-xs text-slate-300">{loan.docsComplete}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${loan.docsComplete}%` }}
                          />
                        </div>
                      </div>

                      {/* Flag */}
                      {loan.flag && (
                        <div className="mt-2 flex items-center gap-1 text-yellow-400">
                          <AlertTriangle className="h-3 w-3" />
                          <span className="text-xs">{loan.flag}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {loan.daysInStage}d in stage
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Document Checklist */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-white">Document Checklist</CardTitle>
                <Badge className="bg-slate-700 text-slate-300 border-0 mt-1">
                  James Anderson - Multi-Family Loan
                </Badge>
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <Upload className="h-4 w-4 mr-2" />
              Request Documents
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-700/50">
            {documentChecklist.map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center gap-4">
                  {doc.status === "complete" && (
                    <div className="w-10 h-10 bg-green-900/30 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-400" />
                    </div>
                  )}
                  {doc.status === "in_progress" && (
                    <div className="w-10 h-10 bg-yellow-900/30 rounded-xl flex items-center justify-center">
                      <Clock className="h-5 w-5 text-yellow-400 animate-pulse" />
                    </div>
                  )}
                  {doc.status === "pending" && (
                    <div className="w-10 h-10 bg-slate-700 rounded-xl flex items-center justify-center">
                      <AlertCircle className="h-5 w-5 text-slate-400" />
                    </div>
                  )}
                  <div>
                    <span className="text-white font-medium">{doc.name}</span>
                    {doc.aiVerified && (
                      <div className="flex items-center gap-1 mt-1">
                        <Shield className="h-3 w-3 text-green-400" />
                        <span className="text-xs text-green-400">AI Verified</span>
                      </div>
                    )}
                    {doc.dueIn && (
                      <p className="text-xs text-yellow-400 mt-1">Due in {doc.dueIn}</p>
                    )}
                    {doc.eta && (
                      <p className="text-xs text-blue-400 mt-1">ETA: {doc.eta}</p>
                    )}
                  </div>
                </div>
                <Badge
                  className={`border ${
                    doc.status === "complete"
                      ? "bg-green-900/30 text-green-300 border-green-800/50"
                      : doc.status === "in_progress"
                      ? "bg-yellow-900/30 text-yellow-300 border-yellow-800/50"
                      : "bg-slate-700 text-slate-400 border-slate-600"
                  }`}
                >
                  {doc.status === "complete" ? "Received" : doc.status === "in_progress" ? "In Review" : "Pending"}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
