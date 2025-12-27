import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Users,
  Landmark,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const demos = [
  {
    title: "Property Managers",
    description: "Streamline maintenance requests, tenant communications, and vacancy tracking with intelligent automation.",
    icon: Building2,
    href: "/demos/property-managers",
    features: ["Maintenance Dashboard", "Tenant Portal", "Vacancy Tracking"],
    color: "blue",
  },
  {
    title: "Asset Managers",
    description: "Real-time portfolio analytics, NOI tracking, and automated investor reporting dashboards.",
    icon: TrendingUp,
    href: "/demos/asset-managers",
    features: ["Portfolio Analytics", "Performance Tracking", "Investor Reports"],
    color: "green",
  },
  {
    title: "Realtors & Brokerages",
    description: "Smart CRM with lead scoring, pipeline visualization, and automated follow-up sequences.",
    icon: Users,
    href: "/demos/realtors",
    features: ["Lead Pipeline", "Activity Tracking", "Commission Tools"],
    color: "purple",
  },
  {
    title: "Lenders",
    description: "Loan pipeline management, document collection automation, and underwriting workflow tools.",
    icon: Landmark,
    href: "/demos/lenders",
    features: ["Loan Pipeline", "Document Tracking", "Approval Workflow"],
    color: "orange",
  },
]

const colorClasses = {
  blue: {
    bg: "bg-blue-900/20",
    hover: "group-hover:bg-blue-900",
    text: "text-blue-400",
    badge: "bg-blue-900/30 text-blue-300 border-blue-800/50",
  },
  green: {
    bg: "bg-green-900/20",
    hover: "group-hover:bg-green-900",
    text: "text-green-400",
    badge: "bg-green-900/30 text-green-300 border-green-800/50",
  },
  purple: {
    bg: "bg-purple-900/20",
    hover: "group-hover:bg-purple-900",
    text: "text-purple-400",
    badge: "bg-purple-900/30 text-purple-300 border-purple-800/50",
  },
  orange: {
    bg: "bg-orange-900/20",
    hover: "group-hover:bg-orange-900",
    text: "text-orange-400",
    badge: "bg-orange-900/30 text-orange-300 border-orange-800/50",
  },
}

export default function DemosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/images/omnia-logo.png" alt="Omnia Solutions" width={180} height={60} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#services" className="text-slate-700 hover:text-blue-900 transition-colors">
              Services
            </Link>
            <Link href="/demos" className="text-blue-900 font-medium">
              Demos
            </Link>
            <Link href="/#benefits" className="text-slate-700 hover:text-blue-900 transition-colors">
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

      {/* Hero Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-16">
            <Badge className="bg-blue-900/20 text-blue-300 hover:bg-blue-900/30 border border-blue-800/30">
              Interactive Demos
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              See What We Build
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore interactive examples of the dashboards and tools we create for real estate professionals.
              Each demo showcases the type of solutions we can customize for your specific needs.
            </p>
          </div>

          {/* Demo Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {demos.map((demo) => {
              const colors = colorClasses[demo.color as keyof typeof colorClasses]
              const Icon = demo.icon

              return (
                <Link key={demo.title} href={demo.href}>
                  <Card className="group h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-slate-800/80 backdrop-blur-sm hover:bg-slate-800 cursor-pointer">
                    <CardContent className="p-8">
                      <div className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-6 ${colors.hover} transition-colors`}>
                        <Icon className={`h-7 w-7 ${colors.text} group-hover:text-white transition-colors`} />
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-3">{demo.title}</h3>
                      <p className="text-slate-300 mb-6">{demo.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {demo.features.map((feature) => (
                          <Badge key={feature} className={`${colors.badge} border`}>
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                        View Demo
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900/50 to-slate-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-white">
              Want a Custom Solution?
            </h2>
            <p className="text-lg text-slate-300">
              These demos represent just a fraction of what we can build. Schedule a call to discuss your specific requirements.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-slate-100" asChild>
              <a href="https://calendly.com/joe-omnia/30min" target="_blank" rel="noopener noreferrer">
                Schedule Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Building2 className="h-6 w-6 text-blue-400" />
              <span className="font-semibold">Omnia Solutions</span>
            </div>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Omnia Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
