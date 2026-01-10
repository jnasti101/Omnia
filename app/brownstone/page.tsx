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
  Clock,
  AlertTriangle,
  Calendar,
  TrendingUp,
  FileText,
  Bell,
  BarChart3,
  Users,
  Home,
} from "lucide-react"
import Link from "next/link"
import Aurora from "@/components/Aurora"
import { ComplianceDashboard } from "@/components/demos/compliance-dashboard"

export default function BrownstonePage() {
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
                    ← Back to Omnia
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-8 mt-12">
                <Shield className="w-4 h-4 mr-2" />
                Compliance Automation Platform
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
                <span className="text-white">Automate Your</span>
                <br />
                <span className="text-emerald-400">Compliance Workflows</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-xl md:text-2xl text-white/80 text-balance max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 font-light">
                Streamline property inspections, certifications, and regulatory compliance with intelligent automation.
                Reduce manual work by 70% and never miss a deadline.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
                  asChild
                >
                  <a href="https://cal.com/joseph-nasti-mflbnr/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-medium border-white/30 text-white hover:bg-white/10 transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer"
                  asChild
                >
                  <a href="#demo">
                    View Dashboard
                  </a>
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400">70%</div>
                  <div className="text-xs md:text-sm text-white/60">Less Manual Work</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400">100%</div>
                  <div className="text-xs md:text-sm text-white/60">Audit Trail</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400">0</div>
                  <div className="text-xs md:text-sm text-white/60">Missed Deadlines</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-400">24/7</div>
                  <div className="text-xs md:text-sm text-white/60">Monitoring</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-black/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center space-y-4 mb-16">
                <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Platform Features</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  Everything You Need for <span className="text-emerald-400">Compliance</span>
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  A comprehensive platform designed specifically for property management compliance workflows.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 group-hover:scale-110 transition-all">
                      <Calendar className="h-7 w-7 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Automated Scheduling</h3>
                    <p className="text-white/70 mb-4">
                      Auto-schedule inspections, certifications, and renewals based on property requirements and regulatory timelines.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        Smart deadline tracking
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        Vendor coordination
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                        Calendar sync
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all">
                      <FileCheck className="h-7 w-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Document Management</h3>
                    <p className="text-white/70 mb-4">
                      Centralized storage for all compliance documents with automatic organization and expiration alerts.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                        Auto-categorization
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                        Expiration tracking
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                        Version control
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 group-hover:scale-110 transition-all">
                      <Bell className="h-7 w-7 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Smart Alerts</h3>
                    <p className="text-white/70 mb-4">
                      Proactive notifications for upcoming deadlines, failed inspections, and compliance gaps.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                        Multi-channel alerts
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                        Escalation rules
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                        Custom thresholds
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all">
                      <BarChart3 className="h-7 w-7 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Compliance Analytics</h3>
                    <p className="text-white/70 mb-4">
                      Real-time dashboards showing compliance health across your entire portfolio.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                        Portfolio overview
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                        Risk scoring
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                        Trend analysis
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all">
                      <Users className="h-7 w-7 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Vendor Portal</h3>
                    <p className="text-white/70 mb-4">
                      Self-service portal for vendors to upload reports, schedule appointments, and track certifications.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        Direct uploads
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        Status tracking
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        Communication hub
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-rose-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500/30 group-hover:scale-110 transition-all">
                      <FileText className="h-7 w-7 text-rose-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Audit Reports</h3>
                    <p className="text-white/70 mb-4">
                      Generate comprehensive audit reports for stakeholders, regulators, and internal reviews.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-rose-400 mr-2" />
                        One-click reports
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-rose-400 mr-2" />
                        Custom templates
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-rose-400 mr-2" />
                        Export options
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Demo Section */}
          <section id="demo" className="py-20 bg-black/40 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center space-y-4 mb-12">
                <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Interactive Demo
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  See the <span className="text-emerald-400">Dashboard</span> in Action
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Explore a live demo of the compliance management dashboard built for BrownStone Property Group.
                </p>
              </div>

              {/* Demo Dashboard Container */}
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 p-4 md:p-6 shadow-2xl">
                <ComplianceDashboard />
              </div>

              {/* CTA Below Demo */}
              <div className="text-center mt-10">
                <p className="text-white/60 mb-4">Ready to transform your compliance workflows?</p>
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-900/30 border-0 rounded-full px-8" asChild>
                  <a href="https://cal.com/joseph-nasti-mflbnr/30min" target="_blank" rel="noopener noreferrer">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Compliance Types Section */}
          <section className="py-20 bg-black/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center space-y-4 mb-16">
                <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30">Compliance Coverage</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  Track <span className="text-blue-400">Every</span> Requirement
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "Fire Safety", icon: Shield },
                  { name: "Elevator Inspections", icon: Building2 },
                  { name: "HVAC Certifications", icon: TrendingUp },
                  { name: "Boiler Permits", icon: FileCheck },
                  { name: "Lead Paint", icon: AlertTriangle },
                  { name: "ADA Compliance", icon: Users },
                  { name: "Environmental", icon: Home },
                  { name: "Insurance Certs", icon: FileText },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-emerald-500/30 transition-colors group"
                  >
                    <item.icon className="h-6 w-6 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-white/80 text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
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
