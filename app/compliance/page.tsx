import type { Metadata } from "next"
import Link from "next/link"
import { CalendarWidget } from "@/components/calendar-widget"

export const metadata: Metadata = {
  title: "Compliance Automation for Real Estate Operators — Omnia Solutions",
  description:
    "Compliance packets assembled from source data, recertification letters sent on schedule, expirations watched in the background. See a live compliance system, then book a 30-minute call.",
}

const watchedItems = [
  "Annual recertifications",
  "Parapet observation reports",
  "HPD registrations",
  "FISP deadlines",
  "Document expirations",
  "Audit packets",
  "Fair-housing files",
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

const docket = [
  {
    title: "Parapet reports",
    tag: "LL126 · annual",
    automated:
      "Field notes & photos become a formatted observation report the same day, archived for the six-year rule, next walk scheduled.",
    roi: "~4 hrs of drafting → minutes, per building",
  },
  {
    title: "Inspection reports & filing",
    tag: "Every agency",
    automated:
      "Drafted from field notes in your format, routed for sign-off, filed to the right portal, confirmation archived.",
    roi: "A 20-report month back in ~a day",
  },
  {
    title: "HPD registration",
    tag: "Annual",
    automated:
      "Assembled from your ownership data and filed on time, every year.",
    roi: "A lapse blocks Housing Court. Never lapses",
  },
  {
    title: "HPD / DOB violations",
    tag: "Nightly",
    automated:
      "Portals checked overnight; new violations routed to the right manager with cure deadlines tracked.",
    roi: "Found overnight — not by certified mail",
  },
  {
    title: "Facade filings",
    tag: "FISP / LL11",
    automated:
      "Sub-cycle windows tracked per building; engineers engaged early, filings submitted inside the window.",
    roi: "$1,000/mo late penalty, avoided",
  },
  {
    title: "Gas piping certifications",
    tag: "LL152",
    automated: "Due dates watched by building; certifications filed on schedule.",
    roi: "Up to $10,000 per missed filing",
  },
  {
    title: "Benchmarking",
    tag: "LL84 / LL133",
    automated: "Usage data compiled and submitted every cycle.",
    roi: "$500/quarter penalties, avoided",
  },
  {
    title: "Recerts & audit packets",
    tag: "Ongoing",
    automated:
      "Recertification letters generated on schedule; audit packets assembled from source data on demand.",
    roi: "Audit prep: days → minutes",
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
  { id: "02", label: "Worked examples & ROI", anchor: "#examples" },
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
              href="#examples"
              className="group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-ink"
            >
              <span className="ink-link">Or, study the worked examples</span>
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

      {/* Worked examples & ROI */}
      <section
        id="examples"
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
              The docket
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display text-[32px] leading-[1] text-paper md:text-[44px]">
              Specific filings,{" "}
              <span className="display-thin text-brand-bright">
                specific returns.
              </span>
            </h2>
            <p className="max-w-[46ch] text-[13.5px] leading-[1.55] text-paper/70">
              The actual obligations on a New York operator&apos;s calendar —
              what the system does with each, and what that&apos;s worth.
            </p>
          </div>

          {/* Docket table */}
          <div className="mt-8">
            {/* Column heads */}
            <div className="hidden grid-cols-12 gap-x-6 border-b border-paper/25 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-paper/60 md:grid">
              <span className="col-span-3">Obligation</span>
              <span className="col-span-6">Automated</span>
              <span className="col-span-3">The return</span>
            </div>

            <ul className="divide-y divide-midnight-rule border-b border-midnight-rule">
              {docket.map((d) => (
                <li
                  key={d.title}
                  className="grid grid-cols-12 gap-x-6 gap-y-1.5 py-3.5 md:py-3"
                >
                  <div className="col-span-12 flex items-baseline gap-3 md:col-span-3 md:block">
                    <span className="text-[14px] font-semibold leading-[1.4] text-paper">
                      {d.title}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-bright md:mt-0.5 md:block">
                      {d.tag}
                    </span>
                  </div>
                  <p className="col-span-12 text-[13px] leading-[1.55] text-paper/70 md:col-span-6">
                    {d.automated}
                  </p>
                  <p className="col-span-12 text-[13px] font-medium italic leading-[1.5] text-paper/90 md:col-span-3">
                    {d.roi}
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
              a mid-size portfolio carries dozens of these a year at hours of
              staff time each: a meaningful slice of a salary spent re-typing
              what the system already knows, before counting a single fine. It
              pays for itself the first deadline it refuses to miss.
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
