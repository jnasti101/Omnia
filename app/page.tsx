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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ScrollAnimations } from "@/components/scroll-animations"

export default function RealEstateAgencyLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ScrollAnimations />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/omnia-logo.png" alt="Omnia Solutions" width={180} height={60} className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-slate-700 hover:text-blue-900 transition-colors">
              Services
            </Link>
            <Link href="/demos" className="text-slate-700 hover:text-blue-900 transition-colors">
              Demos
            </Link>
            <Link href="#benefits" className="text-slate-700 hover:text-blue-900 transition-colors">
              Benefits
            </Link>
          </nav>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white" asChild>
            <a href="https://calendly.com/joe-omnia/30min" target="_blank" rel="noopener noreferrer">
              Schedule Call
            </a>
          </Button>
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
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-slate-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Real Estate</div>
                  <div className="text-sm text-slate-300">Industry Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">Custom</div>
                  <div className="text-sm text-slate-300">Solutions</div>
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-slate-100 text-slate-800">Our Services</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Intelligent Infrastructure Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We provide comprehensive optimization services tailored specifically for real estate brokerages,
              leveraging the latest in AI and automation technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-800 text-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <BarChart3 className="h-6 w-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Process Automation</h3>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-800 text-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <TrendingUp className="h-6 w-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Data Analytics & Insights</h3>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-800 text-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <Users className="h-6 w-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">CRM Optimization</h3>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-800 text-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <Globe className="h-6 w-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Digital Transformation</h3>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-800 text-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <DollarSign className="h-6 w-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Financial Operations</h3>
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

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-800 text-white">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-900/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                  <Clock className="h-6 w-6 text-blue-400 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Training & Support</h3>
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
      <section id="demos" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-slate-100 text-slate-800">See Our Work</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Solutions for Every Role</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore interactive demos of the dashboards and tools we build for real estate professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/demos/property-managers">
              <Card className="group h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-900 transition-colors">
                    <Building2 className="h-6 w-6 text-blue-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Property Managers</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Maintenance tracking, tenant portals, and vacancy management.
                  </p>
                  <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300">
                    View Demo
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demos/asset-managers">
              <Card className="group h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-900 transition-colors">
                    <TrendingUp className="h-6 w-6 text-green-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Asset Managers</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Portfolio analytics, NOI tracking, and investor reporting.
                  </p>
                  <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300">
                    View Demo
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demos/realtors">
              <Card className="group h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-900 transition-colors">
                    <Users className="h-6 w-6 text-purple-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Realtors & Brokerages</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    CRM dashboards, lead pipelines, and automated follow-ups.
                  </p>
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300">
                    View Demo
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/demos/lenders">
              <Card className="group h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-700/50 backdrop-blur-sm hover:bg-slate-700 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-900 transition-colors">
                    <Landmark className="h-6 w-6 text-orange-400 group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Lenders</h3>
                  <p className="text-slate-300 text-sm mb-4">
                    Loan pipelines, document tracking, and approval workflows.
                  </p>
                  <div className="flex items-center text-orange-400 text-sm font-medium group-hover:text-orange-300">
                    View Demo
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-700" asChild>
              <Link href="/demos">
                View All Demos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-slate-50 to-slate-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-900">Why Choose Us</Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-white">Proven Strategies That Drive Growth</h2>
              <p className="text-xl text-slate-200">
                Our clients see immediate improvements in efficiency, cost savings, and agent productivity. Here's what
                you can expect when you partner with us.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">40% Increase in Operational Efficiency</h3>
                    <p className="text-slate-300">
                      Streamlined processes and automation reduce manual work, allowing your team to focus on
                      revenue-generating activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">25% Reduction in Operating Costs</h3>
                    <p className="text-slate-300">
                      Eliminate redundancies and optimize resource allocation to significantly reduce your operational
                      expenses.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">60% Faster Deal Processing</h3>
                    <p className="text-slate-300">
                      Automated workflows and intelligent document management accelerate your transaction timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Real-time Business Intelligence</h3>
                    <p className="text-slate-300">
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Ready to Transform Your Brokerage?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Schedule a discovery call today and learn how we can optimize your operations, reduce costs, and
              accelerate your growth with intelligent infrastructure solutions.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Schedule Your Discovery Call</h3>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Input
                  type="email"
                  placeholder="Business Email"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Input
                  type="text"
                  placeholder="Brokerage Name"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button size="lg" className="w-full bg-white text-blue-900 hover:bg-slate-100" asChild>
                  <a href="https://calendly.com/joe-omnia/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </form>
              <p className="text-sm text-blue-100 mt-4">
                No commitment required. 30-minute consultation to discuss your specific needs.
              </p>
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
