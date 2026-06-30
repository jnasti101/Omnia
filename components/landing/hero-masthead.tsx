"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"

const departments = [
  { id: "01", label: "Capabilities", anchor: "#capabilities" },
  { id: "02", label: "Live specimens", anchor: "#specimens" },
  { id: "03", label: "On building", anchor: "#manifesto" },
  { id: "04", label: "Correspondence", anchor: "#correspond" },
]

const audiences = [
  "Property Managers",
  "Asset Managers",
  "Brokerages",
  "Lenders",
  "Sponsors",
  "Family Offices",
  "Operating Partners",
  "Funds",
  "Developers",
]

export function HeroMasthead() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 paper-texture">
      {/* Subtle grid backdrop */}
      <div className="absolute inset-0 grid-lines opacity-70" aria-hidden />

      {/* Smaller orbiting logo, tucked to the right edge */}
      <div
        className="pointer-events-none absolute hidden h-[48vh] w-[48vh] opacity-[0.06] md:block"
        style={{ right: "-20vh", top: "-4vh" }}
        aria-hidden
      >
        <div className="animate-orbit-slow h-full w-full">
          <Image
            src="/images/omnia-ikon.png"
            alt=""
            width={1000}
            height={1000}
            className="h-full w-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Concentric rings — echo of the logo's circular form, lower-left */}
      <svg
        className="pointer-events-none absolute -bottom-44 -left-44 hidden h-[520px] w-[520px] opacity-[0.14] md:block"
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden
      >
        <g stroke="var(--accent)" strokeWidth="0.75">
          <circle cx="300" cy="300" r="260" />
          <circle cx="300" cy="300" r="200" />
          <circle cx="300" cy="300" r="140" />
          <circle cx="300" cy="300" r="80" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-[1400px] px-5 pb-12 pt-4 lg:px-10 lg:pb-20 lg:pt-6">
        {/* Top dateline — slim, single line, sits right under the nav */}
        <div className="mb-4 flex items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted lg:mb-6">
          <span className="text-brand">№ 001 / On the cover</span>
          <span className="hidden sm:inline">
            A field guide for firms outgrowing the spreadsheet
          </span>
        </div>

        {/* The big title — no reveal classes, always visible */}
        <h1>
          <span className="display block text-[13vw] text-ink sm:text-[11vw] md:text-[84px] lg:text-[112px] xl:text-[136px]">
            Operating
          </span>
          <span className="display block text-[13vw] text-ink sm:text-[11vw] md:text-[84px] lg:text-[112px] xl:text-[136px]">
            software,{" "}
            <span className="display-thin text-ink-soft">drafted</span>
          </span>
          <span className="display block text-[13vw] sm:text-[11vw] md:text-[84px] lg:text-[112px] xl:text-[136px]">
            <span className="display-thin text-ink-soft">for </span>
            <span className="grad-omnia">real&nbsp;estate</span>
          </span>
          <span className="display-italic block text-[13vw] text-ink sm:text-[11vw] md:text-[84px] lg:text-[112px] xl:text-[136px]">
            operators.
          </span>
        </h1>

        {/* Rule + subhead row */}
        <div className="mt-8 grid grid-cols-12 gap-6 lg:mt-12 lg:gap-8">
          <div className="col-span-12 md:col-span-1">
            <div className="mt-3 hidden h-px w-full bg-ink md:block" />
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted md:mt-3">
              Lede
            </div>
          </div>
          <p className="col-span-12 max-w-[58ch] text-[17px] leading-[1.55] text-ink md:col-span-7 md:text-[19px]">
            <span className="font-semibold text-ink">Omnia Solutions</span>{" "}
            is a studio that designs and builds custom dashboards, deal
            pipelines, and internal tools — purpose-built for how property
            managers, asset managers, brokerages, and lenders <em>actually</em>{" "}
            work, then handed over with the keys.
          </p>

          {/* In this issue */}
          <aside className="col-span-12 md:col-span-4 md:col-start-9">
            <div className="border-t border-ink pt-4">
              <div className="mb-4 flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                  In this issue
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                  ↓ Read on
                </span>
              </div>
              <ul className="divide-y divide-ink/10">
                {departments.map((d) => (
                  <li key={d.id}>
                    <a
                      href={d.anchor}
                      className="group flex items-baseline justify-between py-2.5 text-[14px] text-ink"
                    >
                      <span className="flex items-baseline gap-3">
                        <span className="font-mono text-[10px] text-ink-muted">
                          {d.id}
                        </span>
                        <span className="ink-link">{d.label}</span>
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

        {/* CTA row */}
        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8 lg:mt-14">
          <a
            href="/schedule"
            className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand"
          >
            <span>Begin a brief</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#specimens"
            className="group inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.18em] text-ink"
          >
            <span className="ink-link">Or, study the specimens</span>
            <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-1" />
          </a>
        </div>
      </div>

      {/* Bottom audience strip */}
      <div className="relative border-y border-ink/10 bg-paper-dim/60">
        <div className="overflow-hidden py-3">
          <div className="flex animate-marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-ink">
            {[...audiences, ...audiences].map((w, i) => (
              <span key={i} className="mx-6 inline-flex items-center gap-6">
                <span className="text-brand">●</span>
                <span>Built for {w}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
