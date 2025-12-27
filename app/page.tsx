"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  Landmark,
  TrendingUp,
  Users,
  Shield,
  Award,
  Sparkles,
  Play,
} from "lucide-react"
import Link from "next/link"
import Aurora from "@/components/Aurora"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import RotatingText from "@/components/RotatingText"
import { MaintenanceDashboard } from "@/components/demos/maintenance-dashboard"
import { PortfolioDashboard } from "@/components/demos/portfolio-dashboard"
import { CrmDashboard } from "@/components/demos/crm-dashboard"
import { LoanPipeline } from "@/components/demos/loan-pipeline"

const demoTabs = [
  {
    id: "property-managers",
    label: "Property Managers",
    icon: Building2,
    color: "blue",
    description: "Maintenance tracking, tenant portals, and vacancy management",
  },
  {
    id: "asset-managers",
    label: "Asset Managers",
    icon: TrendingUp,
    color: "green",
    description: "Portfolio analytics, NOI tracking, and investor reporting",
  },
  {
    id: "realtors",
    label: "Realtors",
    icon: Users,
    color: "purple",
    description: "CRM dashboards, lead pipelines, and automated follow-ups",
  },
  {
    id: "lenders",
    label: "Lenders",
    icon: Landmark,
    color: "orange",
    description: "Loan pipelines, document tracking, and approval workflows",
  },
]

export default function RealEstateAgencyLanding() {
  const [activeDemo, setActiveDemo] = useState("property-managers")

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        {/* Aurora Background - Fixed */}
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#1e3a5f", "#3b82f6", "#1e3a5f"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
            <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Modern Intelligence for Real Estate
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 animate-fade-in-heading">
                <span className="text-white">Transform Your</span>
                <br />
                <span className="inline-flex items-center justify-center flex-wrap gap-2 mt-4 sm:mt-6 md:mt-8">
                  <span className="text-white">Brokerage</span>
                  <RotatingText
                    texts={["Operations", "Efficiency", "Growth", "Performance", "Success"]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black overflow-hidden py-1 sm:py-1 md:py-2 justify-center rounded-lg shadow-lg"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-xl md:text-2xl text-white/80 text-balance max-w-sm sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-light">
                We help real estate brokerages optimize their operations using cutting-edge intelligent
                infrastructure. Streamline processes, boost productivity, and scale your business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
                <Button
                  size="lg"
                  className="bg-white text-black rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:scale-105 hover:shadow-lg group cursor-pointer"
                  asChild
                >
                  <a href="https://calendly.com/joe-omnia/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-medium border-white/30 text-white hover:bg-white/10 transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer"
                  asChild
                >
                  <a href="#demos">
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    View Demos
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4 animate-fade-in-trust">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-white/80">Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-white/80">Industry Specialists</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  <span className="text-sm text-white/80">AI-Powered</span>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-black/40 backdrop-blur-sm border-y border-white/10">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center mb-10">
                <p className="text-white/60 text-sm font-medium uppercase tracking-wider">Why Leading Real Estate Companies Choose Us</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">40%</div>
                  <div className="text-white/60 text-sm">Average Efficiency Gain</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">25%</div>
                  <div className="text-white/60 text-sm">Cost Reduction</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">60%</div>
                  <div className="text-white/60 text-sm">Faster Processing</div>
                </div>
                <div className="text-center group">
                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">24/7</div>
                  <div className="text-white/60 text-sm">Expert Support</div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-black/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="text-center space-y-4 mb-16">
                <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30">Our Services</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  Intelligent Infrastructure <span className="text-blue-400">Solutions</span>
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  We provide comprehensive optimization services tailored specifically for real estate brokerages,
                  leveraging the latest in AI and automation technology.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/30 group-hover:scale-110 transition-all">
                      <BarChart3 className="h-7 w-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Process Automation</h3>
                    <p className="text-white/70 mb-4">
                      Automate repetitive tasks, document processing, and workflow management to free up your team for
                      high-value activities.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                        Lead management automation
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                        Document workflow optimization
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                        Commission tracking systems
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/30 group-hover:scale-110 transition-all">
                      <TrendingUp className="h-7 w-7 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Data Analytics & Insights</h3>
                    <p className="text-white/70 mb-4">
                      Transform your data into actionable insights with advanced analytics and real-time reporting
                      dashboards.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Performance analytics
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Market trend analysis
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        Agent productivity metrics
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/30 group-hover:scale-110 transition-all">
                      <Users className="h-7 w-7 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">CRM Optimization</h3>
                    <p className="text-white/70 mb-4">
                      Enhance your customer relationship management with intelligent lead scoring and automated nurturing
                      campaigns.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                        Smart lead scoring
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                        Automated follow-ups
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                        Client lifecycle management
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 group-hover:scale-110 transition-all">
                      <Globe className="h-7 w-7 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
                    <p className="text-white/70 mb-4">
                      Modernize your technology stack with cloud-based solutions and mobile-first approaches.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        Cloud infrastructure setup
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        Mobile app development
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                        System integrations
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/30 group-hover:scale-110 transition-all">
                      <DollarSign className="h-7 w-7 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Financial Operations</h3>
                    <p className="text-white/70 mb-4">
                      Streamline financial processes with automated accounting, commission management, and expense tracking.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                        Automated bookkeeping
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                        Commission calculations
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                        Expense management
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-white/10 shadow-lg bg-white/5 backdrop-blur-md text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-rose-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-500/30 group-hover:scale-110 transition-all">
                      <Clock className="h-7 w-7 text-rose-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Training & Support</h3>
                    <p className="text-white/70 mb-4">
                      Comprehensive training programs and ongoing support to ensure successful adoption of new systems.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-rose-400 mr-2" />
                        Staff training programs
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-rose-400 mr-2" />
                        24/7 technical support
                      </li>
                      <li className="flex items-center text-sm text-white/70">
                        <CheckCircle className="h-4 w-4 text-rose-400 mr-2" />
                        Ongoing optimization
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Demos Section - Tabbed Interface */}
          <section id="demos" className="py-20 bg-black/40 backdrop-blur-sm relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6 relative">
              <div className="text-center space-y-4 mb-12">
                <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <Play className="w-3 h-3 mr-1" />
                  Live Demos
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  Solutions for <span className="text-purple-400">Every Role</span>
                </h2>
                <p className="text-xl text-white/70 max-w-3xl mx-auto">
                  Explore interactive demos of the dashboards and tools we build for real estate professionals.
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {demoTabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeDemo === tab.id
                  const colorClasses = {
                    blue: isActive ? "bg-blue-500/30 border-blue-500/50 text-blue-300" : "bg-white/5 border-white/10 text-white/70 hover:bg-blue-500/10 hover:border-blue-500/30",
                    green: isActive ? "bg-green-500/30 border-green-500/50 text-green-300" : "bg-white/5 border-white/10 text-white/70 hover:bg-green-500/10 hover:border-green-500/30",
                    purple: isActive ? "bg-purple-500/30 border-purple-500/50 text-purple-300" : "bg-white/5 border-white/10 text-white/70 hover:bg-purple-500/10 hover:border-purple-500/30",
                    orange: isActive ? "bg-orange-500/30 border-orange-500/50 text-orange-300" : "bg-white/5 border-white/10 text-white/70 hover:bg-orange-500/10 hover:border-orange-500/30",
                  }
                  const iconColorClasses = {
                    blue: isActive ? "text-blue-400" : "text-white/50",
                    green: isActive ? "text-green-400" : "text-white/50",
                    purple: isActive ? "text-purple-400" : "text-white/50",
                    orange: isActive ? "text-orange-400" : "text-white/50",
                  }
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDemo(tab.id)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 cursor-pointer ${colorClasses[tab.color as keyof typeof colorClasses]}`}
                    >
                      <Icon className={`h-5 w-5 ${iconColorClasses[tab.color as keyof typeof iconColorClasses]}`} />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Active Demo Description */}
              <div className="text-center mb-8">
                <p className="text-white/60 text-sm">
                  {demoTabs.find(t => t.id === activeDemo)?.description}
                </p>
              </div>

              {/* Demo Dashboard Container */}
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-2xl">
                <div className="min-h-[600px]">
                  {activeDemo === "property-managers" && <MaintenanceDashboard />}
                  {activeDemo === "asset-managers" && <PortfolioDashboard />}
                  {activeDemo === "realtors" && <CrmDashboard />}
                  {activeDemo === "lenders" && <LoanPipeline />}
                </div>
              </div>

              {/* CTA Below Demo */}
              <div className="text-center mt-10">
                <p className="text-white/60 mb-4">Want a custom dashboard for your business?</p>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-900/30 border-0 rounded-full px-8" asChild>
                  <a href="https://calendly.com/joe-omnia/30min" target="_blank" rel="noopener noreferrer">
                    Schedule a Demo Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section id="benefits" className="py-20 bg-black/60 backdrop-blur-sm">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <Badge className="bg-green-500/20 text-green-300 border border-green-500/30">Why Choose Us</Badge>
                  <h2 className="text-3xl lg:text-5xl font-bold text-white">
                    Proven Strategies That <span className="text-green-400">Drive Growth</span>
                  </h2>
                  <p className="text-xl text-white/70">
                    Our clients see immediate improvements in efficiency, cost savings, and agent productivity. Here&apos;s what
                    you can expect when you partner with us.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors group">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">40% Increase in Operational Efficiency</h3>
                        <p className="text-white/60">
                          Streamlined processes and automation reduce manual work, allowing your team to focus on
                          revenue-generating activities.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-green-500/30 transition-colors group">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">25% Reduction in Operating Costs</h3>
                        <p className="text-white/60">
                          Eliminate redundancies and optimize resource allocation to significantly reduce your operational
                          expenses.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors group">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">60% Faster Deal Processing</h3>
                        <p className="text-white/60">
                          Automated workflows and intelligent document management accelerate your transaction timelines.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-orange-500/30 transition-colors group">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">Real-time Business Intelligence</h3>
                        <p className="text-white/60">
                          Make data-driven decisions with comprehensive analytics and reporting dashboards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/10">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-white mb-2">Our Approach</h3>
                      <p className="text-sm text-white/60">Proven methodology for brokerage optimization</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Discovery & Analysis</h4>
                          <p className="text-sm text-white/60">Deep dive into your current processes and pain points</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Custom Solution Design</h4>
                          <p className="text-sm text-white/60">Tailored optimization plan for your specific needs</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Implementation & Support</h4>
                          <p className="text-sm text-white/60">Guided rollout with ongoing optimization</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4 text-center mt-6">
                      <p className="text-white font-medium mb-1">Ready to get started?</p>
                      <p className="text-sm text-white/60">Schedule your free consultation today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-black/40 backdrop-blur-sm relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6 relative">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-4 py-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Start Your Transformation
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-white">
                  Ready to Transform Your <span className="text-blue-400">Brokerage?</span>
                </h2>
                <p className="text-xl text-white/70 max-w-2xl mx-auto">
                  Schedule a discovery call today and learn how we can optimize your operations, reduce costs, and
                  accelerate your growth with intelligent infrastructure solutions.
                </p>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto border border-white/10 shadow-2xl">
                  <h3 className="text-xl font-bold text-white mb-2">Schedule Your Discovery Call</h3>
                  <p className="text-white/60 text-sm mb-6">Get a custom roadmap for your brokerage</p>
                  <form className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500"
                    />
                    <Input
                      type="email"
                      placeholder="Business Email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500"
                    />
                    <Input
                      type="text"
                      placeholder="Brokerage Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-500"
                    />
                    <Button size="lg" className="w-full bg-white text-black hover:bg-gray-100 rounded-full" asChild>
                      <a href="https://calendly.com/joe-omnia/30min" target="_blank" rel="noopener noreferrer">
                        Schedule Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </form>
                  <div className="flex items-center justify-center gap-4 mt-6 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Free 30-min call
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      No commitment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black/80 text-white py-16 border-t border-white/10">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-8 w-8 text-blue-400" />
                    <span className="text-xl font-bold">Omnia Solutions</span>
                  </div>
                  <p className="text-white/60 max-w-sm">
                    Transforming real estate brokerages with intelligent infrastructure and modern operational solutions.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Services</h3>
                  <ul className="space-y-2 text-white/60">
                    <li><Link href="#" className="hover:text-white transition-colors">Process Automation</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Data Analytics</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">CRM Optimization</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Digital Transformation</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-2 text-white/60">
                    <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><a href="#demos" className="hover:text-white transition-colors">Demos</a></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-white/60">
                    <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Whitepapers</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Webinars</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-white/60 text-sm">© {new Date().getFullYear()} Omnia Solutions. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</Link>
                  <Link href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
