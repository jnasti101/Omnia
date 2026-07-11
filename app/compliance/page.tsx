import type { Metadata } from "next"
import Link from "next/link"
import { ComplianceDashboard } from "@/components/demos/compliance-dashboard"
import { DemoPreview } from "@/components/demos/demo-preview"
import { CalendarWidget } from "@/components/calendar-widget"

export const metadata: Metadata = {
  title: "Compliance Automation for Real Estate Operators — Omnia Solutions",
  description:
    "Compliance packets assembled from source data, recertification letters sent on schedule, expirations watched in the background. See a live compliance system, then book a 30-minute call.",
}

const watchedItems = [
  "Annual recertifications",
  "Inspection due dates",
  "Document expirations",
  "Audit packets",
  "Fair-housing files",
  "Recertification letters",
  "Nightly status checks",
]

const automations = [
  {
    id: "01",
    title: "Compliance packets, assembled",
    body: "Audit packets built from your source data, on demand — no one copy-pasting from spreadsheets the night before the auditor arrives.",
  },
  {
    id: "02",
    title: "Recertification letters, on schedule",
    body: "Generated from your resident data and sent when they're due. No calendar reminders, no mail-merge, no missed windows.",
  },
  {
    id: "03",
    title: "Inspection reports, drafted",
    body: "Field notes become formatted reports the same day — reviewed and signed instead of written from scratch.",
  },
  {
    id: "04",
    title: "Expirations, watched",
    body: "Document expirations monitored in the background, with the right people pinged before anything lapses.",
  },
  {
    id: "05",
    title: "Statuses, checked nightly",
    body: "Every item re-checked overnight, so you find the issues before the auditor does.",
  },
]

const steps = [
  {
    id: "01",
    title: "A thirty-minute call",
    body: "No slides. You show us where compliance lives at your firm today — the calendars, the spreadsheets, the inbox folders.",
  },
  {
    id: "02",
    title: "A prototype inside a week",
    body: "We come back with a clickable draft of the system, built around your actual workflow. First sketches inside seven days, or we don't bill.",
  },
  {
    id: "03",
    title: "Built, then handed over",
    body: "We build it, wire it to your data, and hand over the keys — source code included. No per-seat platform, no lock-in.",
  },
]

const contents = [
  { id: "01", label: "What gets automated", anchor: "#automated" },
  { id: "02", label: "The live specimen", anchor: "#specimen" },
  { id: "03", label: "How engagements run", anchor: "#process" },
  { id: "04", label: "Book a call", anchor: "#book" },
]

export default function CompliancePage() {
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
            <span className="text-brand">№ 003 / The compliance desk</span>
            <span className="hidden sm:inline">
              For property managers, asset managers &amp; operators
            </span>
          </div>

          <h1>
            <span className="display block text-[12vw] text-ink sm:text-[10vw] md:text-[72px] lg:text-[96px] xl:text-[112px]">
              Compliance is
            </span>
            <span className="display block text-[12vw] text-ink sm:text-[10vw] md:text-[72px] lg:text-[96px] xl:text-[112px]">
              one <span className="display-thin text-ink-soft">missed</span>{" "}
              deadline
            </span>
            <span className="display-italic block text-[12vw] text-ink sm:text-[10vw] md:text-[72px] lg:text-[96px] xl:text-[112px]">
              away from <span className="grad-omnia">a problem.</span>
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
              Annual recertifications, inspection due dates, document
              expirations, audit packets, fair-housing files — every one of
              them lives in someone&apos;s calendar, spreadsheet, or head.{" "}
              <span className="font-semibold text-ink">Omnia</span> builds the
              systems that do the work instead.
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
              href="#specimen"
              className="group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-ink"
            >
              <span className="ink-link">Or, study the live specimen</span>
              <span className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* Watched-items strip */}
        <div className="relative border-y border-ink/10 bg-paper-dim/60">
          <div className="overflow-hidden py-3">
            <div className="flex animate-marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-ink">
              {[...watchedItems, ...watchedItems].map((w, i) => (
                <span key={i} className="mx-6 inline-flex items-center gap-6">
                  <span className="text-brand">●</span>
                  <span>{w}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What gets automated */}
      <section
        id="automated"
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
              What gets automated
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="display text-[44px] leading-[0.95] text-ink md:text-[64px] lg:text-[80px]">
                The work,
                <br />
                <span className="display-thin text-brand">done for you.</span>
              </h2>
              <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.6] text-ink-muted md:text-[17px]">
                Not another tracker to keep updated. A system that assembles,
                drafts, watches, and pings — so compliance stops depending on
                someone remembering.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ul className="divide-y divide-ink/10 border-t border-ink">
                {automations.map((a) => (
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

      {/* Live specimen */}
      <section
        id="specimen"
        className="relative overflow-hidden border-b border-midnight-rule bg-midnight midnight-texture"
      >
        <div className="absolute inset-0 grid-lines-dark opacity-60" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="mb-10 flex items-center gap-3 lg:mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-bright">
              § 02
            </span>
            <span className="h-px flex-1 bg-midnight-rule" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
              Plate V — Live
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="display text-[44px] leading-[0.95] text-paper md:text-[64px] lg:text-[84px]">
                The compliance desk,{" "}
                <span className="display-thin text-brand-bright">
                  under glass.
                </span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="mt-2 max-w-[42ch] text-[14.5px] leading-[1.6] text-paper/65 lg:mt-6">
                A working compliance tracker — certifications, inspections, and
                expirations across a small portfolio. It&apos;s live; click
                around.
              </p>
            </div>
          </div>

          <div className="relative mt-10 border border-paper/15 bg-midnight-dim p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-5 lg:mt-14">
            <span className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-brand-bright" />
            <span className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-brand-bright" />
            <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-brand-bright" />
            <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-brand-bright" />

            <div className="mb-3 flex items-center justify-between border-b border-paper/10 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-paper/45 sm:mb-4 sm:pb-3">
              <span>Spec. V · Compliance</span>
              <span className="hidden sm:inline">
                Drafted for a 160-unit portfolio
              </span>
              <span className="text-brand-bright">● Live</span>
            </div>

            <div className="block md:hidden">
              <DemoPreview demoId="compliance" />
            </div>

            <div className="hidden md:block">
              <ComplianceDashboard />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-12 gap-4 lg:gap-8">
            <div className="col-span-12 md:col-span-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-bright">
                Caption
              </span>
            </div>
            <p className="col-span-12 max-w-[68ch] text-[14.5px] italic leading-[1.65] text-paper/75 md:col-span-11">
              Every firm&apos;s compliance load is different — jurisdictions,
              programs, inspection regimes. This plate shows the shape of the
              thing. Yours is drafted around your rules, your properties, your
              deadlines.
            </p>
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-midnight-rule pt-8 sm:flex-row sm:items-center">
            <p className="max-w-[40ch] font-mono text-[11px] uppercase tracking-[0.18em] text-paper/55">
              Want this drafted for your portfolio?
            </p>
            <a
              href="#book"
              className="group inline-flex items-center gap-3 bg-brand px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand-bright"
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
                Show us where
                <br />
                compliance{" "}
                <span className="display-thin text-brand">lives today.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.6] text-ink-muted md:text-[16px] lg:mt-6">
                Pick a time below. Thirty minutes, no slides — walk us through
                how compliance runs at your firm, and we&apos;ll show you what
                could be automated.
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
