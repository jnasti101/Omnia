import type { Metadata } from "next"
import Link from "next/link"
import { CalendarWidget } from "@/components/calendar-widget"

export const metadata: Metadata = {
  title: "AI Agents Built for Real Estate — Omnia Solutions",
  description:
    "Omnia builds and deploys autonomous AI agents for real estate businesses — software that does the work, from leads to research to reporting, around the clock. Risk-free: you only pay after real results.",
}

const capabilities = [
  "Lead follow-up",
  "Market research",
  "Deal coordination",
  "Document processing",
  "Tenant communication",
  "Automated reporting",
  "Works 24/7",
  "Pay after results",
]

const traits = [
  {
    id: "01",
    title: "It sees context",
    body: "It connects to the systems you already use — your CRM, inbox, documents, and portals — and reads the same information your team does.",
  },
  {
    id: "02",
    title: "It makes decisions",
    body: "Given a goal and your guardrails, it reasons about what to do next — which lead to chase, which document is missing, what the number should be.",
  },
  {
    id: "03",
    title: "It takes action",
    body: "It doesn't just suggest. It writes the reply, updates the record, drafts the filing, moves the deal forward — real actions in your real tools.",
  },
  {
    id: "04",
    title: "It stays on it",
    body: "It works around the clock without forgetting, and routes the genuine edge cases to a person the moment human judgment is required.",
  },
]

const howSteps = [
  {
    id: "01",
    title: "We map the job",
    body: "On a thirty-minute call you describe the work you'd hand off. We define what success looks like — and the guardrails it must never cross.",
  },
  {
    id: "02",
    title: "We connect the agent",
    body: "We wire it into your systems and data with the right permissions — able to read what it needs and act where you allow it, nothing more.",
  },
  {
    id: "03",
    title: "It runs on its own",
    body: "The agent loops — sense, decide, act — pursuing the goal continuously. Routine work is handled end to end; anything ambiguous routes to your team.",
  },
  {
    id: "04",
    title: "It reports & improves",
    body: "You see exactly what it did and what it produced. With your feedback and real outcomes, it sharpens — and the results compound.",
  },
]

const field = [
  {
    title: "Lead-response agent",
    tag: "Brokerages · Property managers",
    build:
      "Qualifies and follows up on inbound leads across email and SMS the moment they land — books the showing, answers the first questions, never lets one go cold.",
    roi: "No lead waits overnight",
  },
  {
    title: "Research agent",
    tag: "Acquisitions · Underwriting",
    build:
      "Pulls comps, market data, and property records into a clean brief on demand — the groundwork for a deal, assembled before the analyst opens the file.",
    roi: "Underwriting in minutes",
  },
  {
    title: "Transaction-coordination agent",
    tag: "Deal teams · Sponsors",
    build:
      "Tracks documents, deadlines, and contingencies across every open deal, and nudges the right party before anything slips through the cracks.",
    roi: "Nothing slips",
  },
  {
    title: "Reporting agent",
    tag: "Asset managers · Investor relations",
    build:
      "Assembles owner and investor reports from source data on a schedule — the numbers they ask for, drafted and ready before they ask.",
    roi: "Reports write themselves",
  },
  {
    title: "Compliance agent",
    tag: "Operators",
    build:
      "Watches filings and deadlines nightly, drafts submissions from source data, and notifies the right people well before anything lapses.",
    roi: "Ahead of every deadline",
  },
  {
    title: "Tenant-comms agent",
    tag: "Property management",
    build:
      "Answers routine tenant questions instantly, logs and routes work orders, and escalates the genuine issues to a human with the context attached.",
    roi: "Faster replies, fewer tickets",
  },
]

const riskSteps = [
  {
    id: "01",
    title: "A thirty-minute call",
    body: "No slides, no pitch. You describe the work you'd hand off — we map where the data lives and what a great outcome looks like.",
  },
  {
    id: "02",
    title: "We deploy — at our cost",
    body: "We stand up a working agent on your real workflow, inside weeks. Building it and proving it out is on us, not you.",
  },
  {
    id: "03",
    title: "Pay only on results",
    body: "You see it working before a dollar changes hands. If it doesn't produce real results, you owe nothing and keep the thinking.",
  },
]

const contents = [
  { id: "01", label: "What an agent is", anchor: "#idea" },
  { id: "02", label: "How they work", anchor: "#how" },
  { id: "03", label: "Where they go to work", anchor: "#field" },
  { id: "04", label: "Risk-free, by design", anchor: "#process" },
  { id: "05", label: "Book a call", anchor: "#book" },
]

export default function AiAgentsPage() {
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
            <span className="text-brand">№ 005 / The agent desk</span>
            <span className="hidden sm:inline">
              For real estate owners &amp; operators
            </span>
          </div>

          <h1>
            <span className="display block text-[12vw] text-ink sm:text-[10vw] md:text-[76px] lg:text-[100px] xl:text-[120px]">
              Autonomous agents
            </span>
            <span className="display block text-[12vw] text-ink sm:text-[10vw] md:text-[76px] lg:text-[100px] xl:text-[120px]">
              for <span className="display-thin text-ink-soft">real estate</span>
            </span>
            <span className="display-italic block text-[12vw] text-ink sm:text-[10vw] md:text-[76px] lg:text-[100px] xl:text-[120px]">
              <span className="grad-omnia">risk-free.</span>
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
              <span className="font-semibold text-ink">Omnia</span> builds and
              deploys autonomous AI agents for real estate businesses — and only
              real estate businesses. Not another dashboard to check, but
              software that does the work: chasing leads, pulling research,
              moving deals, filing the paperwork — on its own, around the clock.
              You watch it run inside your business before you commit a dollar,
              and all it takes is a call.
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
              href="#how"
              className="group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-ink"
            >
              <span className="ink-link">Or, see how they work</span>
              <span className="transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </div>

        {/* Capabilities strip */}
        <div className="relative border-y border-ink/10 bg-paper-dim/60">
          <div className="overflow-hidden py-3">
            <div className="flex animate-marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-ink">
              {[...capabilities, ...capabilities].map((w, i) => (
                <span key={i} className="mx-6 inline-flex items-center gap-6">
                  <span className="text-brand">●</span>
                  <span>{w}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* § 01 — The idea */}
      <section
        id="idea"
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
              The idea
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="display text-[44px] leading-[0.95] text-ink md:text-[64px] lg:text-[80px]">
                Not a dashboard.
                <br />
                <span className="display-thin text-brand">A worker.</span>
              </h2>
              <p className="mt-6 max-w-[46ch] text-[16px] leading-[1.6] text-ink-muted md:text-[17px]">
                Traditional software shows you the problem and waits. An
                autonomous agent is different: you give it a goal, and it takes
                real action to reach it — reading your data, making decisions,
                and doing the work, then handing the judgment calls back to a
                human. Four things make an agent <em>autonomous</em>.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ul className="divide-y divide-ink/10 border-t border-ink">
                {traits.map((a) => (
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

      {/* § 02 — How they work */}
      <section
        id="how"
        className="relative overflow-hidden border-b border-ink/10 bg-paper paper-texture"
      >
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="mb-10 flex items-center gap-3 lg:mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
              § 02
            </span>
            <span className="h-px flex-1 bg-rule lg:max-w-[120px]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              How they work
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="display text-[36px] leading-[0.98] text-ink md:text-[52px] lg:text-[60px]">
                From goal to autonomous,
                <br />
                <span className="display-thin text-brand">in four moves.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="max-w-[46ch] text-[16px] leading-[1.6] text-ink-muted md:text-[17px] lg:mt-3">
                Every agent we deploy follows the same simple arc. You never
                touch a model or a line of code — you describe the outcome, and
                we stand up an agent that pursues it inside your business.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-12 gap-8 lg:mt-16 lg:gap-10">
            {howSteps.map((s) => (
              <div key={s.id} className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="border-t border-ink pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                    Step {s.id}
                  </span>
                  <h3 className="display mt-3 text-[24px] leading-[1.1] text-ink md:text-[28px]">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-[14.5px] leading-[1.6] text-ink-muted">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* § 03 — In the field */}
      <section
        id="field"
        className="relative overflow-hidden border-b border-midnight-rule bg-midnight midnight-texture"
      >
        <div className="absolute inset-0 grid-lines-dark opacity-60" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 py-12 lg:px-10 lg:py-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-bright">
              § 03
            </span>
            <span className="h-px flex-1 bg-midnight-rule" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
              In the field
            </span>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display text-[32px] leading-[1] text-paper md:text-[44px]">
              Put to work across{" "}
              <span className="display-thin text-brand-bright">
                the business.
              </span>
            </h2>
            <p className="max-w-[46ch] text-[13.5px] leading-[1.55] text-paper/70">
              The same agent pattern, pointed at the workflows that quietly
              drain your team's hours — a few of the places we deploy them.
            </p>
          </div>

          {/* Ledger table */}
          <div className="mt-8">
            <div className="hidden grid-cols-12 gap-x-6 border-b border-paper/25 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-paper/60 md:grid">
              <span className="col-span-3">The agent</span>
              <span className="col-span-6">What it does</span>
              <span className="col-span-3">The result</span>
            </div>

            <ul className="divide-y divide-midnight-rule border-b border-midnight-rule">
              {field.map((p) => (
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
              every one of these starts the same way: a thirty-minute
              conversation, then a working agent on your real workflow within
              weeks. Which job it takes off your plate is up to you. Yours starts
              the same way.
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

      {/* § 04 — Risk-free, by design */}
      <section
        id="process"
        className="relative overflow-hidden border-b border-ink/10 bg-paper paper-texture"
      >
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 py-16 lg:px-10 lg:py-24">
          <div className="mb-10 flex items-center gap-3 lg:mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
              § 04
            </span>
            <span className="h-px flex-1 bg-rule lg:max-w-[120px]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              Risk-free, by design
            </span>
          </div>

          <div className="grid grid-cols-12 gap-8 lg:gap-10">
            {riskSteps.map((s) => (
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
                  Every partnership begins with a working agent, deployed on your
                  real workflow at our risk, not yours. If what you see
                  isn&apos;t worth keeping, you owe nothing. The only commitment
                  is thirty minutes.
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
              <span>No lock-in — the agent works for you</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="text-brand">●</span>
              <span>NDAs gladly signed. You talk to the people who build it</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="text-brand">●</span>
              <span>Real results inside weeks, or we don&apos;t bill</span>
            </li>
          </ul>
        </div>
      </section>

      {/* § 05 — Booking */}
      <section id="book" className="relative overflow-hidden paper-texture">
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 pt-16 lg:px-10 lg:pt-24">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
              § 05
            </span>
            <span className="h-px flex-1 bg-rule lg:max-w-[120px]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              Correspondence
            </span>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="display text-[44px] leading-[0.95] text-ink md:text-[64px] lg:text-[84px]">
                Bring us the work
                <br />
                you&apos;d{" "}
                <span className="display-thin text-brand">hand off.</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.6] text-ink-muted md:text-[16px] lg:mt-6">
                Pick a time below. Thirty minutes, no slides — describe the
                workflow you wish ran itself, and we&apos;ll show you exactly how
                we&apos;d put an agent on it. Deployed at our cost, paid for only
                if it works.
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
