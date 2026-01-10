"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Shield,
  FileCheck,
  AlertTriangle,
  BarChart3,
  Users,
  Handshake,
  FileText,
  Database,
  Map,
  ListChecks,
  LayoutDashboard,
  XCircle,
  Rocket,
  TrendingUp,
  Play,
} from "lucide-react"
import Link from "next/link"
import Aurora from "@/components/Aurora"
import { ComplianceDashboard } from "@/components/demos/compliance-dashboard"

const tabs = [
  { id: "mvp", label: "MVP Overview", icon: FileText },
  { id: "partnership", label: "Partnership", icon: Handshake },
  { id: "demo", label: "Live Demo", icon: Play },
]

export default function BrownstonePage() {
  const [activeTab, setActiveTab] = useState("mvp")

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        {/* Aurora Background - Fixed */}
        <div className="fixed inset-0 w-full h-full pointer-events-none">
          <Aurora colorStops={["#1a2f1a", "#2d5a2d", "#1a2f1a"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Simple Nav for Brownstone */}
          <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-4xl">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-3 md:px-6 md:py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-white font-semibold hidden sm:block">BrownStone Property Group</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    href="/"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    Back to Omnia
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section - Simplified */}
          <section className="pt-32 pb-8 px-4 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Partnership Proposal
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-4">
                <span className="text-white">Compliance Intelligence</span>
                <br />
                <span className="text-emerald-400">Platform</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg text-white/70 text-balance max-w-2xl mx-auto mb-8 leading-relaxed">
                A strategic partnership between Omnia Solutions and BrownStone Property Group to build a compliance automation platform.
              </p>
            </div>
          </section>

          {/* Tab Navigation */}
          <section className="px-4 pb-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center gap-2 md:gap-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-3 md:px-6 md:py-3 rounded-full border backdrop-blur-sm transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-emerald-500/30 border-emerald-500/50 text-emerald-300"
                          : "bg-white/5 border-white/10 text-white/70 hover:bg-emerald-500/10 hover:border-emerald-500/30"
                      }`}
                    >
                      <Icon className={`h-4 w-4 md:h-5 md:w-5 ${isActive ? "text-emerald-400" : "text-white/50"}`} />
                      <span className="font-medium text-sm md:text-base">{tab.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Tab Content */}
          <section className="px-4 pb-20">
            <div className="max-w-5xl mx-auto">
              {/* MVP Overview Tab */}
              {activeTab === "mvp" && (
                <div className="space-y-8 animate-fade-in">
                  {/* What This MVP Is */}
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                          <FileText className="h-5 w-5 text-emerald-400" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">What This MVP Is</h2>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        This MVP is a <span className="text-emerald-400 font-medium">compliance intelligence system</span> designed to give BrownStone Property Group immediate, clear visibility into property-level compliance requirements and deadlines. It replaces spreadsheet-based tracking with a centralized system that pulls compliance data from trusted sources, maps requirements directly to properties, and clearly shows what is compliant, what needs action, and by when.
                      </p>
                      <p className="text-white/60 mt-4 text-sm">
                        The focus is <span className="text-white">clarity, risk reduction, and operational efficiency</span> — not experimental AI.
                      </p>
                    </CardContent>
                  </Card>

                  {/* The Problem */}
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                          <AlertTriangle className="h-5 w-5 text-red-400" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">The Problem It Solves</h2>
                      </div>
                      <p className="text-white/70 mb-4">Today, compliance is:</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "Tracked manually across spreadsheets",
                          "Dependent on individual knowledge",
                          "Time-consuming to maintain",
                          "Easy to miss deadlines",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                            <XCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <p className="text-white/60 mt-4 text-sm">
                        This creates <span className="text-red-400">risk, operational drag, and scalability issues</span>.
                      </p>
                    </CardContent>
                  </Card>

                  {/* What MVP Will Do */}
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-emerald-400" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">What the MVP Will Do</h2>
                      </div>

                      <div className="space-y-6">
                        {[
                          {
                            num: "1",
                            title: "Pull Compliance Data from Jaffa",
                            icon: Database,
                            desc: "Import compliance records from Jaffa & Associates. Normalize requirements across properties. Maintain traceability to original records.",
                            value: "Eliminates manual review and interpretation of compliance reports."
                          },
                          {
                            num: "2",
                            title: "Map Compliance to Each Property",
                            icon: Map,
                            desc: "Associate compliance requirements with each property in a portfolio. Automatically determine which rules apply.",
                            value: "Immediate clarity on what each property is responsible for."
                          },
                          {
                            num: "3",
                            title: "Show Compliance Status Per Property",
                            icon: BarChart3,
                            desc: "Each property displays a simple status:",
                            statuses: [
                              { icon: "✅", label: "Compliant", color: "text-green-400" },
                              { icon: "⚠️", label: "Action Required", color: "text-yellow-400" },
                              { icon: "❌", label: "Overdue", color: "text-red-400" },
                            ],
                            value: "Leadership and managers see risk instantly, without digging."
                          },
                          {
                            num: "4",
                            title: "Generate Action Items with Deadlines",
                            icon: ListChecks,
                            desc: "For any required action, the system shows: what needs to be done, the due date, and countdown to deadline.",
                            value: "Compliance becomes executable, not interpretive."
                          },
                          {
                            num: "5",
                            title: "Portfolio-Level Dashboard",
                            icon: LayoutDashboard,
                            desc: "Overall compliance health, properties at risk, and upcoming deadlines.",
                            value: "Centralized oversight without manual reporting."
                          },
                        ].map((item) => (
                          <div key={item.num} className="flex gap-4">
                            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                              {item.num}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <item.icon className="h-4 w-4 text-emerald-400" />
                                <h3 className="text-white font-semibold">{item.title}</h3>
                              </div>
                              <p className="text-white/60 text-sm mb-2">{item.desc}</p>
                              {item.statuses && (
                                <div className="flex gap-4 mb-2">
                                  {item.statuses.map((s) => (
                                    <span key={s.label} className={`text-sm ${s.color}`}>
                                      {s.icon} {s.label}
                                    </span>
                                  ))}
                                </div>
                              )}
                              <p className="text-emerald-400/80 text-sm">
                                <span className="font-medium">Value:</span> {item.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* What MVP Does NOT Do */}
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-slate-500/20 rounded-xl flex items-center justify-center">
                          <XCircle className="h-5 w-5 text-slate-400" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">What This MVP Does NOT Do</h2>
                        <Badge className="bg-slate-500/20 text-slate-300 border-slate-500/30 text-xs">Intentionally</Badge>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          "File documents with government agencies",
                          "Handle payments or fees",
                          "Replace Jaffa or AppFolio",
                          "Predict future regulation changes",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <p className="text-white/50 mt-4 text-sm italic">
                        This keeps the MVP focused, fast, and valuable.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Immediate Value */}
                  <Card className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 backdrop-blur-md border border-emerald-500/30">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-500/30 rounded-xl flex items-center justify-center">
                          <Rocket className="h-5 w-5 text-emerald-400" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">How This Adds Value Immediately</h2>
                      </div>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          "Reduces compliance risk",
                          "Saves time for property managers",
                          "Eliminates spreadsheet coordination",
                          "Creates accountability",
                          "Scales as the portfolio grows",
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-emerald-300 text-sm">
                            <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 p-4 bg-white/5 rounded-xl border border-emerald-500/20">
                        <p className="text-white/80 text-sm">
                          <span className="font-semibold text-emerald-400">Outcome:</span> Within weeks, BrownStone gains a single source of truth for compliance and a foundation for broader automation in future phases.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Partnership Tab */}
              {activeTab === "partnership" && (
                <div className="space-y-8 animate-fade-in">
                  {/* Overview */}
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                          <Handshake className="h-5 w-5 text-emerald-400" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">Partnership Overview</h2>
                      </div>
                      <p className="text-white/70 leading-relaxed">
                        This proposal outlines a strategic partnership between <span className="text-emerald-400 font-medium">Omnia Solutions</span> and <span className="text-emerald-400 font-medium">BrownStone Property Group</span> to co-develop a compliance automation platform. The initial MVP will be built for internal use, with the option to evolve into a commercial product.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Partnership Structure */}
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Partnership Structure</h2>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Omnia */}
                        <div className="p-6 bg-blue-500/10 rounded-xl border border-blue-500/20">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                              <Building2 className="h-5 w-5 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">Omnia Solutions</h3>
                          </div>
                          <p className="text-white/60 text-sm mb-4">Contributions:</p>
                          <ul className="space-y-2">
                            {["Product design", "Engineering & implementation", "Ongoing maintenance (optional)"].map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-blue-300 text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Brownstone */}
                        <div className="p-6 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                              <Building2 className="h-5 w-5 text-emerald-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white">BrownStone Property Group</h3>
                          </div>
                          <p className="text-white/60 text-sm mb-4">Contributions:</p>
                          <ul className="space-y-2">
                            {["Compliance expertise", "Access to real data & workflows", "Pilot usage & feedback"].map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-emerald-300 text-sm">
                                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Equity */}
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                          <Users className="h-5 w-5 text-purple-400" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">Equity & Ownership</h2>
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">To Be Negotiated</Badge>
                      </div>
                      <p className="text-white/70 mb-4">Equity split to be negotiated based on:</p>
                      <div className="grid sm:grid-cols-3 gap-4 mb-6">
                        {["Development contribution", "Domain expertise", "Ongoing involvement"].map((item, i) => (
                          <div key={i} className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
                            <span className="text-white/80 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <p className="text-white/60 text-sm mb-2">Example structure (illustrative):</p>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-blue-300">Omnia Solutions</span>
                              <span className="text-blue-400">60–70%</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 rounded-full" style={{ width: "65%" }} />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-emerald-300">BrownStone</span>
                              <span className="text-emerald-400">30–40%</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "35%" }} />
                            </div>
                          </div>
                        </div>
                        <p className="text-white/50 text-xs mt-3 italic">Final terms to be documented in operating agreement.</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Commercialization Path */}
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                          <TrendingUp className="h-5 w-5 text-amber-400" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">Commercialization Path</h2>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {[
                          { phase: "Phase 1", title: "Internal MVP", desc: "Build for BrownStone use", color: "emerald" },
                          { phase: "Phase 2", title: "Expanded Features", desc: "Additional capabilities", color: "blue" },
                          { phase: "Phase 3", title: "External Offering", desc: "License to other firms", color: "purple" },
                        ].map((item, i) => (
                          <div key={i} className={`p-4 bg-${item.color}-500/10 rounded-xl border border-${item.color}-500/20 text-center`}
                               style={{ backgroundColor: item.color === 'emerald' ? 'rgba(16, 185, 129, 0.1)' : item.color === 'blue' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(139, 92, 246, 0.1)',
                                        borderColor: item.color === 'emerald' ? 'rgba(16, 185, 129, 0.2)' : item.color === 'blue' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(139, 92, 246, 0.2)' }}>
                            <Badge className="mb-2" style={{ backgroundColor: item.color === 'emerald' ? 'rgba(16, 185, 129, 0.2)' : item.color === 'blue' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(139, 92, 246, 0.2)',
                                                            color: item.color === 'emerald' ? 'rgb(110, 231, 183)' : item.color === 'blue' ? 'rgb(147, 197, 253)' : 'rgb(196, 181, 253)',
                                                            borderColor: item.color === 'emerald' ? 'rgba(16, 185, 129, 0.3)' : item.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(139, 92, 246, 0.3)' }}>
                              {item.phase}
                            </Badge>
                            <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                            <p className="text-white/60 text-sm">{item.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                        <p className="text-white/60 text-sm mb-2">Revenue options:</p>
                        <div className="flex flex-wrap gap-2">
                          {["SaaS subscriptions", "Enterprise licensing", "Per-property pricing"].map((item, i) => (
                            <Badge key={i} className="bg-white/10 text-white/80 border-white/20">{item}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Governance & Exit */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Governance</h3>
                        <ul className="space-y-2">
                          {["Joint roadmap planning", "Feature prioritization input", "Clear IP ownership structure"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                              <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">Exit & Optionality</h3>
                        <ul className="space-y-2">
                          {["Buyout options", "Spin-off entity", "Preferred pricing or perpetual license for BrownStone"].map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                              <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Next Steps */}
                  <Card className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 backdrop-blur-md border border-emerald-500/30">
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Next Steps</h2>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {[
                          { num: "1", text: "Align on equity framework" },
                          { num: "2", text: "Finalize MVP scope" },
                          { num: "3", text: "Draft formal partnership agreement" },
                        ].map((item) => (
                          <div key={item.num} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                              {item.num}
                            </div>
                            <span className="text-white/80 text-sm">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Demo Tab */}
              {activeTab === "demo" && (
                <div className="space-y-8 animate-fade-in">
                  <div className="text-center mb-8">
                    <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
                      Interactive Demo
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      See the Dashboard in Action
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                      This is a preview of what the compliance management dashboard could look like. Explore the interface to see how compliance tracking, property health, and action items are visualized.
                    </p>
                  </div>

                  {/* Demo Dashboard Container */}
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 p-4 md:p-6 shadow-2xl">
                    <ComplianceDashboard />
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-black/40 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Discuss?
              </h2>
              <p className="text-white/60 mb-8">
                Schedule a call to align on the partnership framework and next steps.
              </p>
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
                asChild
              >
                <a href="https://cal.com/joseph-nasti-mflbnr/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Discussion
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black/80 text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-3 mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-white font-semibold">BrownStone Property Group</span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="text-white/60 text-sm">Powered by</span>
                  <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                    Omnia Solutions
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
