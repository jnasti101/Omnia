import type { Metadata } from "next"
import Link from "next/link"
import { CalendarWidget } from "@/components/calendar-widget"

export const metadata: Metadata = {
  title: "We Build What Your Vendors Won't — Omnia Solutions",
  description:
    "Custom software for property managers and real estate operators — from a single integration to a full platform. If you can describe it, we can build it, with working results shown before you commit a dollar.",
}

const gapsStrip = [
  "Dashboards",
  "Integrations",
  "Investor portals",
  "Full platforms",
  "Internal tools",
  "Automated reporting",
  "Results before you pay",
  "Source code handed over",
]

const audiences = [
  {
    id: "01",
    title: "Property managers",
    body: "Maintenance and work-order systems, tenant communication, compliance desks — the operational tools that keep buildings running without the spreadsheet sprawl.",
  },
  {
    id: "02",
    title: "Asset managers",
    body: "Portfolio analytics, NOI and IRR reporting, asset-by-asset drill-downs — the numbers in one place, the way the acquisitions team actually reads them.",
  },
  {
    id: "03",
    title: "Brokerages & sponsors",
    body: "Deal pipelines built for how deals actually close, investor portals, distribution and performance reporting without the quarter-end scramble.",
  },
  {
    id: "04",
    title: "Lenders",
    body: "Origination pipelines tied to document collection, condition tracking, and committee approval — from first call to funding.",
  },
]

const ledger = [
  {
    title: "Maintenance & tenancy system",
    tag: "Property manager · 11 buildings",
    build:
      "Live work-order queue, vacancy maps, and tenant communication threads — replaced three Slack channels and a spreadsheet.",
    roi: "Delivered in 5 weeks",
  },
  {
    title: "Portfolio analytics",
    tag: "Asset manager · $183M AUM",
    build:
      "Portfolio-level NOI, IRR, and occupancy at a glance, with drill-downs the acquisitions team opens every morning.",
    roi: "Delivered in 6 weeks",
  },
  {
    title: "Deal pipeline",
    tag: "Brokerage · 38 agents",
    build:
      "A weighted pipeline with bottleneck detection, stage timing, and team leaderboards — designed around how deals actually close.",
    roi: "Delivered in 4 weeks",
  },
  {
    title: "Loan origination system",
    tag: "Lender · 240 loans / yr",
    build:
      "Pipeline tied to document collection, condition tracking, and committee approval — from first call to funding.",
    roi: "Delivered in 7 weeks",
  },
  {
    title: "Investor portal",
    tag: "Real estate sponsor",
    build:
      "Portfolio value, quarterly distributions, and performance reporting — the numbers investors ask for, available the moment they ask.",
    roi: "In production today",
  },
  {
    title: "Compliance automation",
    tag: "NYC operators",
    build:
      "Filings drafted from source data, deadlines watched nightly, the right people notified before anything lapses.",
    roi: "In production today",
  },
]

const steps = [
  {
    id: "01",
    title: "A thirty-minute call",
    body: "No slides, no pitch. You describe the tool or platform you wish existed — we map where the data lives and what the system should do.",
  },
  {
    id: "02",
    title: "Working results inside a week",
    body: "We return with a working prototype of what you described — at our expense, not yours. If it isn't what you imagined, you owe nothing.",
  },
  {
    id: "03",
    title: "Built, then handed over",
    body: "We build it in full, wire it to your data, and hand over the keys — source code included. No per-seat platform, no lock-in.",
  },
]

const contents = [
  { id: "01", label: "The studio", anchor: "#studio" },
  { id: "02", label: "What we've built", anchor: "#work" },
  { id: "03", label: "Risk-free, by design", anchor: "#process" },
  { id: "04", label: "Book a call", anchor: "#book" },
]

export default function CustomBuildPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* Slim nav */}
      <div className="relative border-b border-ink/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 lg:px-10">
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink hover:text-brand"
          >
            ← Omnia Solutions
          </Link>
          <a
            href="#book"
            className="bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-paper transition-colors hover:bg-brand"
          >
            Book a call ↓
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink/10 paper-texture">
        <div className="absolute inset-0 grid-lines opacity-70" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 pb-12 pt-8 lg:px-10 lg:pb-16 lg:pt-12">
          <div className="mb-4 flex items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted lg:mb-6">
            <span className="text-brand">№ 004 / The build desk</span>
            <span className="hidden sm:inline">
              For property managers &amp; real estate operators
            </span>
          </div>

          <h1>
            <span className="display block text-[12vw] text-ink sm:text-[10vw] md:text-[76px] lg:text-[100px] xl:text-[120px]">
              We build what
            </span>
            <span className="display block text-[12vw] text-ink sm:text-[10vw] md:text-[76px] lg:text-[100px] xl:text-[120px]">
              your <span className="display-thin text-ink-soft">vendors</span>
            </span>
            <span className="display-italic block text-[12vw] text-ink sm:text-[10vw] md:text-[76px] lg:text-[100px] xl:text-[120px]">
              <span className="grad-omnia">won&apos;t.</span>
            </span>
          </h1>

          <div className="mt-8 grid grid-cols-12 gap-6 lg:mt-12 lg:gap-8">
            <div className="col-span-12 md:col-span-1">
              <div className="mt-3 hidden h-px w-full bg-ink md:block" />
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted md:mt-3">
                Lede
              </div>
            </div>
            <p className="col-span-12 max-w-[58ch] text-[17px] leading-[1.55] text-ink md:col-span-7 md:text-[19px]">
              <span className="font-semibold text-ink">Omnia</span> is a
              small, focused team that has spent years building custom tools
              and platforms for real estate businesses — and only real estate
              businesses. If your firm can describe it, we can build it. You
              see real, working results before you commit a dollar, and all
              it takes is a call.
            </p>

            <aside className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="border-t border-ink pt-4">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                  On this page
                </div>
                <ul className="divide-y divide-ink/10">
                  {contents.map((c) => (
                    <li key={c.id}>
                      <a
                        href={c.anchor}
                        className="group flex items-baseline justify-between py-2.5 text-[14px] text-ink"
                      >
                        <span className="flex items-baseline gap-3">
                          <span className="font-mono text-[10px] text-ink-muted">
                            {c.id}
                          </span>
                          <span className="ink-link">{c.label}</span>
                        </span>
                        <span className="font-mono text-[10px] text-ink-muted transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8 lg:mt-14">
            <a
              href="#book"
              className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand"
            >
              <span>Book a 30-minute call</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-ink"
            >
              <span className="ink-link">Or, review the record</span>
              <span className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* Gaps strip */}
        <div className="relative border-y border-ink/10 bg-paper-dim/60">
          <div className="overflow-hidden py-3">
            <div className="flex animate-marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-ink">
              {[...gapsStrip, ...gapsStrip].map((w, i) => (
                <span key={i} className="mx-6 inline-flex items-center gap-6">
                  <span className="text-brand">●</span>
                  <span>{w}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The studio */}
      <section
        id="studio"
        className="relative overflow-hidden border-b border-ink/10 bg-paper paper-texture"
      >
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="mb-10 flex items-center gap-3 lg:mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
              § 01
            </span>
            <span className="h-px flex-1 bg-rule lg:max-w-[120px]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              The studio
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="display text-[44px] leading-[0.95] text-ink md:text-[64px] lg:text-[80px]">
                A small team,
                <br />
                <span className="display-thin text-brand">
                  built for real estate.
                </span>
              </h2>
              <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.6] text-ink-muted md:text-[17px]">
                For years, Omnia has designed and built custom software for
                real estate businesses — dashboards, integrations, investor
                portals, complete operating platforms. Deliberately small,
                deliberately focused: the people on your call are the people
                who write the code, and the code is yours when it&apos;s done.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ul className="divide-y divide-ink/10 border-t border-ink">
                {audiences.map((a) => (
                  <li key={a.id} className="grid grid-cols-12 gap-4 py-6">
                    <span className="col-span-2 font-mono text-[11px] text-ink-muted sm:col-span-1">
                      {a.id}
                    </span>
                    <div className="col-span-10 sm:col-span-11">
                      <h3 className="display text-[22px] leading-[1.1] text-ink md:text-[26px]">
                        {a.title}
                      </h3>
                      <p className="mt-2 max-w-[54ch] text-[14.5px] leading-[1.6] text-ink-muted">
                        {a.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What we've built */}
      <section
        id="work"
        className="relative overflow-hidden border-b border-midnight-rule bg-midnight midnight-texture"
      >
        <div className="absolute inset-0 grid-lines-dark opacity-60" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 py-12 lg:px-10 lg:py-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-bright">
              § 02
            </span>
            <span className="h-px flex-1 bg-midnight-rule" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
              From the ledger
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display text-[32px] leading-[1] text-paper md:text-[44px]">
              Built for operators{" "}
              <span className="display-thin text-brand-bright">like you.</span>
            </h2>
            <p className="max-w-[46ch] text-[13.5px] leading-[1.55] text-paper/70">
              A selection from years of building for real estate businesses —
              what we delivered, for whom, and how quickly.
            </p>
          </div>

          {/* Ledger table */}
          <div className="mt-8">
            <div className="hidden grid-cols-12 gap-x-6 border-b border-paper/25 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-paper/60 md:grid">
              <span className="col-span-3">The build</span>
              <span className="col-span-6">What it does</span>
              <span className="col-span-3">The record</span>
            </div>

            <ul className="divide-y divide-midnight-rule border-b border-midnight-rule">
              {ledger.map((p) => (
                <li
                  key={p.title}
                  className="grid grid-cols-12 gap-x-6 gap-y-1.5 py-3.5 md:py-3"
                >
                  <div className="col-span-12 flex items-baseline gap-3 md:col-span-3 md:block">
                    <span className="text-[14px] font-semibold leading-[1.4] text-paper">
                      {p.title}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-bright md:mt-0.5 md:block">
                      {p.tag}
                    </span>
                  </div>
                  <p className="col-span-12 text-[13px] leading-[1.55] text-paper/70 md:col-span-6">
                    {p.build}
                  </p>
                  <p className="col-span-12 text-[13px] font-medium italic leading-[1.5] text-paper/90 md:col-span-3">
                    {p.roi}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Pattern footnote + CTA */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <p className="max-w-[72ch] text-[13px] leading-[1.6] text-paper/70">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-brand-bright">
                The pattern —{" "}
              </span>
              every one of these began the same way: a thirty-minute
              conversation, then a working prototype inside a week. What it
              becomes from there is up to you. Yours starts the same way.
            </p>
            <a
              href="#book"
              className="group inline-flex shrink-0 items-center gap-3 bg-brand px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand-bright"
            >
              <span>Book a 30-minute call</span>
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* How engagements run */}
      <section
        id="process"
        className="relative overflow-hidden border-b border-ink/10 bg-paper paper-texture"
      >
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="mb-10 flex items-center gap-3 lg:mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
              § 03
            </span>
            <span className="h-px flex-1 bg-rule lg:max-w-[120px]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              Risk-free, by design
            </span>
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            {steps.map((s) => (
              <div key={s.id} className="col-span-12 md:col-span-4">
                <div className="border-t border-ink pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                    Step {s.id}
                  </span>
                  <h3 className="display mt-3 text-[26px] leading-[1.1] text-ink md:text-[30px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[44ch] text-[14.5px] leading-[1.6] text-ink-muted">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* The standing offer */}
          <div className="relative mt-14 border border-ink/30 bg-paper-dim/40 p-6 sm:p-10">
            <span className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-brand" />
            <span className="absolute -right-1 -top-1 h-3 w-3 border-r border-t border-brand" />
            <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-brand" />
            <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-brand" />

            <div className="grid grid-cols-12 items-center gap-6 lg:gap-8">
              <div className="col-span-12 lg:col-span-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                  The standing offer
                </span>
                <p className="display mt-3 text-[26px] leading-[1.15] text-ink md:text-[34px]">
                  Real results before you spend{" "}
                  <span className="display-thin text-brand">a dollar.</span>
                </p>
                <p className="mt-4 max-w-[64ch] text-[15px] leading-[1.6] text-ink-muted">
                  Every engagement begins with a working prototype, delivered
                  inside a week — at our risk, not yours. If what you see
                  isn&apos;t worth building, you owe nothing and keep the
                  thinking. The only commitment is thirty minutes.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-3 lg:col-start-10">
                <a
                  href="#book"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand lg:w-auto"
                >
                  <span>Set up the call</span>
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          <ul className="mt-10 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted sm:flex-row sm:gap-10">
            <li className="flex items-baseline gap-3">
              <span className="text-brand">●</span>
              <span>No agency middlemen — you talk to the people who build</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="text-brand">●</span>
              <span>NDAs gladly signed. Source code handed over</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="text-brand">●</span>
              <span>Working results inside seven days, or we don&apos;t bill</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="relative overflow-hidden paper-texture">
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 pt-16 lg:px-10 lg:pt-24">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
              § 04
            </span>
            <span className="h-px flex-1 bg-rule lg:max-w-[120px]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              Correspondence
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="display text-[44px] leading-[0.95] text-ink md:text-[64px] lg:text-[84px]">
                Bring us what
                <br />
                you&apos;ve{" "}
                <span className="display-thin text-brand">imagined.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.6] text-ink-muted md:text-[16px] lg:mt-6">
                Pick a time below. Thirty minutes, no slides — describe the
                tool or platform you wish existed, and we&apos;ll show you
                exactly how we&apos;d build it. Working results follow within
                the week, at no cost to you.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1100px] px-5 py-12 lg:px-10 lg:py-16">
          <CalendarWidget />
        </div>
      </section>
    </main>
  )
}
