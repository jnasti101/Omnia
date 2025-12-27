import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CrmDashboard } from "@/components/demos/crm-dashboard"

export default function RealtorsDemo() {
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

      {/* Back Link */}
      <div className="container mx-auto px-4 lg:px-6 py-6">
        <Link href="/demos" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Demos
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl">
            <Badge className="bg-purple-900/20 text-purple-300 hover:bg-purple-900/30 border border-purple-800/30 mb-4">
              Realtors & Brokerages Demo
            </Badge>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              CRM Dashboard
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Example of a smart CRM system we can build for real estate agents and brokerages.
              Track leads through your pipeline, automate follow-ups, and never miss an opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Widget */}
      <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="bg-slate-900/50 rounded-2xl border border-slate-700/50 p-6 lg:p-8">
            <CrmDashboard />
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-2xl font-bold text-white mb-8">What This Dashboard Can Do</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Lead Scoring</h3>
              <p className="text-slate-400">
                Automatically score leads based on engagement, timeline, budget, and behavior to focus on the hottest prospects.
              </p>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Automated Follow-Up Sequences</h3>
              <p className="text-slate-400">
                Never forget a follow-up. Set up intelligent drip campaigns that nurture leads until they're ready to buy.
              </p>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">Pipeline Analytics</h3>
              <p className="text-slate-400">
                See where leads drop off, track conversion rates, and identify bottlenecks to optimize your sales process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900/50 to-slate-800/50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl lg:text-4xl font-bold text-white">
              Ready to Convert More Leads?
            </h2>
            <p className="text-lg text-slate-300">
              We can integrate with your MLS, sync with your email and phone, and automate the repetitive tasks that slow you down.
            </p>
            <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-100" asChild>
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
