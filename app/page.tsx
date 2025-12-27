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
  Mail,
  Phone,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Award,
  Sparkles,
  ChevronRight,
  Play,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function RealEstateAgencyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ScrollAnimations />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/omnia-logo.png" alt="Omnia Solutions" width={180} height={60} className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-slate-300 hover:text-white transition-colors font-medium">
              Services
            </Link>
            <Link href="/demos" className="text-slate-300 hover:text-white transition-colors font-medium">
              Demos
            </Link>
            <Link href="#benefits" className="text-slate-300 hover:text-white transition-colors font-medium">
              Benefits
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white hidden md:inline-flex" asChild>
              <a href="mailto:joe@omniasolutions.co">Contact</a>
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg shadow-blue-900/30" asChild>
              <a href="https://calendly.com/joe-omnia/30min" target="_blank" rel="noopener noreferrer">
                Schedule Call
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section with Image Background */}
      <section className="relative py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.png"
            alt="Real estate business growth background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-900/80" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-slate-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-800/15 rounded-full blur-2xl animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-900/20 text-blue-300 hover:bg-blue-900/30 border border-blue-800/30">
                <Zap className="w-3 h-3 mr-1" />
                Modern Intelligence for Real Estate
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Transform Your
                  <span className="text-blue-400 block">Brokerage Operations</span>
                </h1>
                <p className="text-xl text-slate-200 leading-relaxed max-w-lg">
                  We help real estate brokerages optimize their operations using cutting-edge intelligent
                  infrastructure. Streamline processes, boost productivity, and scale your business with confidence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg shadow-2xl"
                  asChild
                >
                  <a href="https://calendly.com/joe-omnia/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                  <Shield className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-slate-200">Enterprise-Grade Security</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                  <Award className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-slate-200">Industry Specialists</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700/50">
                  <Sparkles className="h-5 w-5 text-purple-400" />
                  <span className="text-sm text-slate-200">AI-Powered</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-700 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">What You'll Get</h3>
                    <p className="text-sm text-slate-400">Comprehensive analysis and optimization roadmap</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <BarChart3 className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Process Assessment</p>
                        <p className="text-xs text-slate-400">Identify automation opportunities</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">ROI Projection</p>
                        <p className="text-xs text-slate-400">Estimated cost savings & efficiency gains</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Implementation Plan</p>
                        <p className="text-xs text-slate-400">Step-by-step transformation roadmap</p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-slate-700">
                    <p className="text-sm text-slate-300">30-minute consultation • No commitment required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Social Proof Section */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-10">
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">Why Leading Real Estate Companies Choose Us</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">40%</div>
              <div className="text-slate-400 text-sm">Average Efficiency Gain</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">25%</div>
              <div className="text-slate-400 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">60%</div>
              <div className="text-slate-400 text-sm">Faster Processing</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">24/7</div>
              <div className="text-slate-400 text-sm">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-900/30 text-blue-300 border border-blue-800/50">Our Services</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Intelligent Infrastructure <span className="text-blue-400">Solutions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We provide comprehensive optimization services tailored specifically for real estate brokerages,
              leveraging the latest in AI and automation technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-700/50 shadow-lg bg-gradient-to-br from-slate-800 to-slate-800/50 text-white overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:scale-110 transition-all">
                  <BarChart3 className="h-7 w-7 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Process Automation</h3>
                <p className="text-slate-300 mb-4">
                  Automate repetitive tasks, document processing, and workflow management to free up your team for
                  high-value activities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Lead management automation
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Document workflow optimization
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Commission tracking systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-700/50 shadow-lg bg-gradient-to-br from-slate-800 to-slate-800/50 text-white overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-900 group-hover:scale-110 transition-all">
                  <TrendingUp className="h-7 w-7 text-green-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Data Analytics & Insights</h3>
                <p className="text-slate-300 mb-4">
                  Transform your data into actionable insights with advanced analytics and real-time reporting
                  dashboards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Performance analytics
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Market trend analysis
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Agent productivity metrics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-700/50 shadow-lg bg-gradient-to-br from-slate-800 to-slate-800/50 text-white overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-900 group-hover:scale-110 transition-all">
                  <Users className="h-7 w-7 text-purple-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">CRM Optimization</h3>
                <p className="text-slate-300 mb-4">
                  Enhance your customer relationship management with intelligent lead scoring and automated nurturing
                  campaigns.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Smart lead scoring
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Automated follow-ups
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Client lifecycle management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-700/50 shadow-lg bg-gradient-to-br from-slate-800 to-slate-800/50 text-white overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-cyan-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-900 group-hover:scale-110 transition-all">
                  <Globe className="h-7 w-7 text-cyan-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Digital Transformation</h3>
                <p className="text-slate-300 mb-4">
                  Modernize your technology stack with cloud-based solutions and mobile-first approaches.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Cloud infrastructure setup
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Mobile app development
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    System integrations
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-700/50 shadow-lg bg-gradient-to-br from-slate-800 to-slate-800/50 text-white overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-amber-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-900 group-hover:scale-110 transition-all">
                  <DollarSign className="h-7 w-7 text-amber-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Financial Operations</h3>
                <p className="text-slate-300 mb-4">
                  Streamline financial processes with automated accounting, commission management, and expense tracking.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Automated bookkeeping
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Commission calculations
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Expense management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-700/50 shadow-lg bg-gradient-to-br from-slate-800 to-slate-800/50 text-white overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-600 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-rose-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-900 group-hover:scale-110 transition-all">
                  <Clock className="h-7 w-7 text-rose-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Training & Support</h3>
                <p className="text-slate-300 mb-4">
                  Comprehensive training programs and ongoing support to ensure successful adoption of new systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Staff training programs
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    24/7 technical support
                  </li>
                  <li className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    Ongoing optimization
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demos Section */}
      <section id="demos" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-900/30 text-purple-300 border border-purple-800/50">
              <Play className="w-3 h-3 mr-1" />
              Live Demos
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Solutions for <span className="text-purple-400">Every Role</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore interactive demos of the dashboards and tools we build for real estate professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/demos/property-managers">
              <Card className="group h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-600/50 shadow-lg bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6 relative">
                  <div className="w-14 h-14 bg-blue-900/40 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all shadow-lg">
                    <Building2 className="h-7 w-7 text-blue-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Property Managers</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Maintenance tracking, tenant portals, and vacancy management.
                  </p>
                  <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:text-blue-300">
                    View Demo
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demos/asset-managers">
              <Card className="group h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-600/50 shadow-lg bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6 relative">
                  <div className="w-14 h-14 bg-green-900/40 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:scale-110 transition-all shadow-lg">
                    <TrendingUp className="h-7 w-7 text-green-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Asset Managers</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Portfolio analytics, NOI tracking, and investor reporting.
                  </p>
                  <div className="flex items-center text-green-400 text-sm font-semibold group-hover:text-green-300">
                    View Demo
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demos/realtors">
              <Card className="group h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-600/50 shadow-lg bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6 relative">
                  <div className="w-14 h-14 bg-purple-900/40 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:scale-110 transition-all shadow-lg">
                    <Users className="h-7 w-7 text-purple-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Realtors & Brokerages</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    CRM dashboards, lead pipelines, and automated follow-ups.
                  </p>
                  <div className="flex items-center text-purple-400 text-sm font-semibold group-hover:text-purple-300">
                    View Demo
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demos/lenders">
              <Card className="group h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-600/50 shadow-lg bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm cursor-pointer overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="p-6 relative">
                  <div className="w-14 h-14 bg-orange-900/40 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:scale-110 transition-all shadow-lg">
                    <Landmark className="h-7 w-7 text-orange-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Lenders</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Loan pipelines, document tracking, and approval workflows.
                  </p>
                  <div className="flex items-center text-orange-400 text-sm font-semibold group-hover:text-orange-300">
                    View Demo
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-900/30 border-0" asChild>
              <Link href="/demos">
                <Play className="mr-2 h-5 w-5" />
                Explore All Demos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-green-900/30 text-green-300 border border-green-800/50">Why Choose Us</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-white">
                Proven Strategies That <span className="text-green-400">Drive Growth</span>
              </h2>
              <p className="text-xl text-slate-200">
                Our clients see immediate improvements in efficiency, cost savings, and agent productivity. Here's what
                you can expect when you partner with us.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-600/30 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">40% Increase in Operational Efficiency</h3>
                    <p className="text-slate-400">
                      Streamlined processes and automation reduce manual work, allowing your team to focus on
                      revenue-generating activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-green-600/30 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">25% Reduction in Operating Costs</h3>
                    <p className="text-slate-400">
                      Eliminate redundancies and optimize resource allocation to significantly reduce your operational
                      expenses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-purple-600/30 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">60% Faster Deal Processing</h3>
                    <p className="text-slate-400">
                      Automated workflows and intelligent document management accelerate your transaction timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-orange-600/30 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Real-time Business Intelligence</h3>
                    <p className="text-slate-400">
                      Make data-driven decisions with comprehensive analytics and reporting dashboards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-700">
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">Our Approach</h3>
                  <p className="text-sm text-slate-400">Proven methodology for brokerage optimization</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Discovery & Analysis</h4>
                      <p className="text-sm text-slate-400">Deep dive into your current processes and pain points</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Custom Solution Design</h4>
                      <p className="text-sm text-slate-400">Tailored optimization plan for your specific needs</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Implementation & Support</h4>
                      <p className="text-sm text-slate-400">Guided rollout with ongoing optimization</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4 text-center">
                  <p className="text-white font-medium mb-1">Ready to get started?</p>
                  <p className="text-sm text-slate-400">Schedule your free consultation today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-blue-900/40 text-blue-300 border border-blue-700/50 px-4 py-1">
              <Sparkles className="w-4 h-4 mr-2" />
              Start Your Transformation
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Ready to Transform Your <span className="text-blue-400">Brokerage?</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Schedule a discovery call today and learn how we can optimize your operations, reduce costs, and
              accelerate your growth with intelligent infrastructure solutions.
            </p>

            <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 max-w-md mx-auto border border-slate-700/50 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Schedule Your Discovery Call</h3>
              <p className="text-slate-400 text-sm mb-6">Get a custom roadmap for your brokerage</p>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                />
                <Input
                  type="email"
                  placeholder="Business Email"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                />
                <Input
                  type="text"
                  placeholder="Brokerage Name"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500"
                />
                <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg shadow-blue-900/50" asChild>
                  <a href="https://calendly.com/joe-omnia/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </form>
              <div className="flex items-center justify-center gap-4 mt-6 text-sm text-slate-400">
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
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Omnia Solutions</span>
              </div>
              <p className="text-slate-400 max-w-sm">
                Transforming real estate brokerages with intelligent infrastructure and modern operational solutions.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white p-2">
                  <Mail className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white p-2">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Process Automation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Data Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    CRM Optimization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Digital Transformation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Whitepapers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Omnia Solutions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
