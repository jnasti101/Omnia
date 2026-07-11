import type { Metadata } from "next"
import Link from "next/link"
import { CalendarWidget } from "@/components/calendar-widget"

export const metadata: Metadata = {
  title: "We Build What Your Vendors Won't — Omnia Solutions",
  description:
    "The integration between the CRM and the deal pipeline. The dashboard that pulls from three systems at once. The internal tool no vendor sells. Built for your firm, source code handed over.",
}

const gapsStrip = [
  "CRM ↔ pipeline sync",
  "Three-system dashboards",
  "Investor reporting",
  "The workflow no vendor owns",
  "Load-bearing spreadsheets, retired",
  "Re-keying, eliminated",
  "Source code handed over",
]

const gaps = [
  {
    id: "01",
    title: "The integration your vendors blame on each other",
    body: "The CRM and the deal pipeline both work fine — they just don't talk. We build the bridge, so a deal gets entered once and lives everywhere it should.",
  },
  {
    id: "02",
    title: "The dashboard that pulls from three systems",
    body: "Property management, accounting, and the spreadsheet nobody admits to. One view, refreshed before you sit down, no exports.",
  },
  {
    id: "03",
    title: "The internal tool no one sells",
    body: "Every firm has a workflow that fits no vendor's box — approvals, handoffs, the thing tracked over email. We build the tool that owns it end to end.",
  },
  {
    id: "04",
    title: "The report that assembles itself",
    body: "Investor packets, lender updates, the Monday numbers — drafted from data you already have, in your format, on schedule.",
  },
  {
    id: "05",
    title: "The spreadsheet that gets to retire",
    body: "The load-bearing workbook with one owner and no version history becomes a small tool: same logic, real permissions, an audit trail.",
  },
]

const punchList = [
  {
    title: "CRM ↔ deal pipeline",
    tag: "Two vendors, no bridge",
    build:
      "Two-way sync — deals entered once, stage changes pushed automatically, nothing re-typed.",
    roi: "Hours a week back, per person",
  },
  {
    title: "The morning dashboard",
    tag: "PM + accounting + sheets",
    build:
      "One view pulling from all three, refreshed overnight, drillable to the source.",
    roi: "The Monday report builds itself",
  },
  {
    title: "Investor reporting",
    tag: "Quarter-end",
    build:
      "Packets assembled from property and accounting data, branded, reviewed, sent.",
    roi: "A week of quarter-end → an afternoon",
  },
  {
    title: "Delinquency & rent roll",
    tag: "Nightly",
    build:
      "Aging pulled nightly across systems; flags routed to the right manager with context.",
    roi: "Slippage caught at day 3, not day 30",
  },
  {
    title: "The workflow no vendor owns",
    tag: "Approvals & handoffs",
    build:
      "An internal tool that owns it end to end — statuses, nudges, and a record of who did what.",
    roi: "Nothing falls between systems",
  },
  {
    title: "The load-bearing spreadsheet",
    tag: "You know the one",
    build:
      "Rebuilt as a small tool: same logic, real permissions, version history, no broken links.",
    roi: "One bad paste no longer costs a day",
  },
  {
    title: "Legacy exports",
    tag: "The weekly CSV",
    build:
      "Ingested, normalized, and loaded automatically the moment it lands.",
    roi: "Re-keying, eliminated",
  },
]

const steps = [
  {
    id: "01",
    title: "A thirty-minute call",
    body: "No slides. Walk us through where the data lives today, and where it gets moved by hand — the exports, the re-typing, the workflow held together over email.",
  },
  {
    id: "02",
    title: "A prototype inside a week",
    body: "We come back with a clickable draft of the bridge, dashboard, or tool — built around your actual systems. First sketches inside seven days, or we don't bill.",
  },
  {
    id: "03",
    title: "Built, then handed over",
    body: "We build it, wire it to your data, and hand over the keys — source code included. No per-seat platform, no lock-in.",
  },
]

const contents = [
  { id: "01", label: "The gaps we fill", anchor: "#gaps" },
  { id: "02", label: "The punch list & ROI", anchor: "#punchlist" },
  { id: "03", label: "How engagements run", anchor: "#process" },
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
              For firms whose systems don&apos;t talk to each other
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
              Most firms don&apos;t need a new platform. They need someone to
              fill the gaps — the integration between the CRM and the deal
              pipeline, the dashboard that pulls from three systems at once,
              the internal tool that owns the workflow no vendor thought
              about. <span className="font-semibold text-ink">Omnia</span>{" "}
              builds exactly that, then hands over the keys.
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
              href="#punchlist"
              className="group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-ink"
            >
              <span className="ink-link">Or, read the punch list</span>
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

      {/* The gaps we fill */}
      <section
        id="gaps"
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
              The gaps we fill
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="display text-[44px] leading-[0.95] text-ink md:text-[64px] lg:text-[80px]">
                Between your
                <br />
                <span className="display-thin text-brand">systems.</span>
              </h2>
              <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.6] text-ink-muted md:text-[17px]">
                Your vendors each own their box. The work that falls between
                the boxes — the exports, the re-typing, the workflow tracked
                over email — that&apos;s what we build for.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ul className="divide-y divide-ink/10 border-t border-ink">
                {gaps.map((g) => (
                  <li key={g.id} className="grid grid-cols-12 gap-4 py-6">
                    <span className="col-span-2 font-mono text-[11px] text-ink-muted sm:col-span-1">
                      {g.id}
                    </span>
                    <div className="col-span-10 sm:col-span-11">
                      <h3 className="display text-[22px] leading-[1.1] text-ink md:text-[26px]">
                        {g.title}
                      </h3>
                      <p className="mt-2 max-w-[54ch] text-[14.5px] leading-[1.6] text-ink-muted">
                        {g.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The punch list */}
      <section
        id="punchlist"
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
              The punch list
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display text-[32px] leading-[1] text-paper md:text-[44px]">
              Specific builds,{" "}
              <span className="display-thin text-brand-bright">
                specific returns.
              </span>
            </h2>
            <p className="max-w-[46ch] text-[13.5px] leading-[1.55] text-paper/70">
              The builds we get asked for most — what each one replaces, and
              what that&apos;s worth.
            </p>
          </div>

          {/* Punch list table */}
          <div className="mt-8">
            <div className="hidden grid-cols-12 gap-x-6 border-b border-paper/25 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-paper/60 md:grid">
              <span className="col-span-3">The gap</span>
              <span className="col-span-6">What we build</span>
              <span className="col-span-3">The return</span>
            </div>

            <ul className="divide-y divide-midnight-rule border-b border-midnight-rule">
              {punchList.map((p) => (
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

          {/* Arithmetic footnote + CTA */}
          <div className="mt-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <p className="max-w-[72ch] text-[13px] leading-[1.6] text-paper/70">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-brand-bright">
                The arithmetic —{" "}
              </span>
              count the hours your team spends moving data between systems
              that don&apos;t talk. Three people at five hours a week is a
              part-time salary, spent re-typing. A build that erases it pays
              for itself inside a quarter — and you own the code when
              it&apos;s done.
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
              How engagements run
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

          <ul className="mt-12 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted sm:flex-row sm:gap-10">
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
              <span>First sketches inside seven days, or we don&apos;t bill</span>
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
                Show us
                <br />
                the <span className="display-thin text-brand">gap.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.6] text-ink-muted md:text-[16px] lg:mt-6">
                Pick a time below. Thirty minutes, no slides — walk us through
                the workflow you&apos;re bridging by hand, and we&apos;ll show
                you what we&apos;d build.
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
