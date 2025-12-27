"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  DollarSign,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Calendar,
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
    color: "bg-blue-500",
    loans: [
      { borrower: "Michael Torres", amount: 485000, property: "Single Family", daysInStage: 2 },
      { borrower: "Sarah Kim", amount: 720000, property: "Condo", daysInStage: 1 },
    ],
  },
  {
    name: "Documents",
    count: 8,
    color: "bg-purple-500",
    loans: [
      { borrower: "James Anderson", amount: 925000, property: "Multi-Family", daysInStage: 5 },
      { borrower: "Lisa Chen", amount: 340000, property: "Single Family", daysInStage: 3 },
    ],
  },
  {
    name: "Underwriting",
    count: 5,
    color: "bg-yellow-500",
    loans: [
      { borrower: "Robert Martinez", amount: 1250000, property: "Commercial", daysInStage: 4 },
      { borrower: "Emily Davis", amount: 560000, property: "Single Family", daysInStage: 7 },
    ],
  },
  {
    name: "Approval",
    count: 3,
    color: "bg-orange-500",
    loans: [
      { borrower: "David Wilson", amount: 890000, property: "Multi-Family", daysInStage: 2 },
    ],
  },
  {
    name: "Funded",
    count: 2,
    color: "bg-green-500",
    loans: [
      { borrower: "Jennifer Brown", amount: 675000, property: "Single Family", daysInStage: 0 },
    ],
  },
]

const documentChecklist = [
  { name: "Income Verification", status: "complete", borrower: "James Anderson" },
  { name: "Bank Statements (3 months)", status: "complete", borrower: "James Anderson" },
  { name: "Tax Returns (2 years)", status: "pending", borrower: "James Anderson" },
  { name: "Property Appraisal", status: "in_progress", borrower: "James Anderson" },
  { name: "Title Report", status: "pending", borrower: "James Anderson" },
  { name: "Insurance Binder", status: "pending", borrower: "James Anderson" },
]

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`
  }
  return `$${(value / 1000).toFixed(0)}K`
}

export function LoanPipeline() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Active Applications</p>
                <p className="text-3xl font-bold text-white">{pipelineStats.totalApplications}</p>
              </div>
              <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/80 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Pipeline Value</p>
                <p className="text-3xl font-bold text-white">{formatCurrency(pipelineStats.pipelineValue)}</p>
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
                <p className="text-sm text-slate-400">Avg Processing Time</p>
                <p className="text-3xl font-bold text-white">{pipelineStats.avgProcessingDays} days</p>
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
                <p className="text-sm text-slate-400">Approval Rate</p>
                <p className="text-3xl font-bold text-white">{pipelineStats.approvalRate}%</p>
              </div>
              <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Stages */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <CardTitle className="text-white">Loan Pipeline</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {/* Stage Progress Bar */}
          <div className="flex items-center gap-1 mb-8">
            {loanStages.map((stage, idx) => (
              <div key={stage.name} className="flex-1">
                <div className={`h-2 ${stage.color} ${idx === 0 ? 'rounded-l-full' : ''} ${idx === loanStages.length - 1 ? 'rounded-r-full' : ''}`} />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-slate-400">{stage.name}</span>
                  <Badge className="bg-slate-700 text-slate-300 border-0 text-xs">
                    {stage.count}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          {/* Loan Cards */}
          <div className="grid lg:grid-cols-5 gap-4">
            {loanStages.map((stage) => (
              <div key={stage.name} className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-700">
                  <div className={`w-2 h-2 rounded-full ${stage.color}`} />
                  <span className="text-sm font-medium text-white">{stage.name}</span>
                </div>
                <div className="space-y-2">
                  {stage.loans.map((loan, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50 hover:border-slate-500 transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center">
                          <User className="h-3 w-3 text-slate-300" />
                        </div>
                        <p className="text-white font-medium text-sm truncate">{loan.borrower}</p>
                      </div>
                      <p className="text-green-400 font-semibold">{formatCurrency(loan.amount)}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 text-slate-400">
                          <Building className="h-3 w-3" />
                          <span className="text-xs">{loan.property}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-400">
                          <Calendar className="h-3 w-3" />
                          <span className="text-xs">{loan.daysInStage}d</span>
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

      {/* Document Checklist */}
      <Card className="bg-slate-800/80 border-slate-700">
        <CardHeader className="border-b border-slate-700">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">Document Checklist</CardTitle>
            <Badge className="bg-slate-700 text-slate-300 border-0">
              James Anderson - Multi-Family Loan
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-700/50">
            {documentChecklist.map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 hover:bg-slate-700/30 transition-colors">
                <div className="flex items-center gap-3">
                  {doc.status === "complete" && (
                    <div className="w-8 h-8 bg-green-900/30 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-green-400" />
                    </div>
                  )}
                  {doc.status === "in_progress" && (
                    <div className="w-8 h-8 bg-yellow-900/30 rounded-lg flex items-center justify-center">
                      <Clock className="h-4 w-4 text-yellow-400" />
                    </div>
                  )}
                  {doc.status === "pending" && (
                    <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                      <AlertCircle className="h-4 w-4 text-slate-400" />
                    </div>
                  )}
                  <span className="text-white">{doc.name}</span>
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
