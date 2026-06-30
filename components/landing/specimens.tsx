"use client"

import { useState } from "react"
import { MaintenanceDashboard } from "@/components/demos/maintenance-dashboard"
import { PortfolioDashboard } from "@/components/demos/portfolio-dashboard"
import { CrmDashboard } from "@/components/demos/crm-dashboard"
import { LoanPipeline } from "@/components/demos/loan-pipeline"
import { DemoPreview } from "@/components/demos/demo-preview"

type PlateId = "property-managers" | "asset-managers" | "realtors" | "lenders"

const plates: {
  id: PlateId
  roman: string
  short: string
  title: string
  italicTitle: string
  audience: string
  caption: string
  built: string
}[] = [
  {
    id: "property-managers",
    roman: "I",
    short: "Maintenance",
    title: "Maintenance",
    italicTitle: "tenancy",
    audience: "Property managers",
    caption:
      "Live work-order queue, vacancy maps, and tenant communication threads — built to replace three Slack channels and a spreadsheet.",
    built: "BUILT IN 5 WEEKS · 11 PROPERTIES",
  },
  {
    id: "asset-managers",
    roman: "II",
    short: "Portfolio",
    title: "Portfolio",
    italicTitle: "yield",
    audience: "Asset managers",
    caption:
      "Portfolio-level NOI, IRR, and occupancy at a glance, with asset-by-asset drill-downs the acquisitions team actually opens.",
    built: "BUILT IN 6 WEEKS · $183M AUM",
  },
  {
    id: "realtors",
    roman: "III",
    short: "Pipeline",
    title: "Pipeline",
    italicTitle: "deal flow",
    audience: "Brokerages",
    caption:
      "A weighted pipeline with bottleneck detection, stage timing, and team leaderboards — designed for the way deals actually close.",
    built: "BUILT IN 4 WEEKS · 38 AGENTS",
  },
  {
    id: "lenders",
    roman: "IV",
    short: "Origination",
    title: "Origination",
    italicTitle: "underwriting",
    audience: "Lenders",
    caption:
      "Loan pipelines tied to document collection, condition tracking, and committee approval — from first call to funding.",
    built: "BUILT IN 7 WEEKS · 240 LOANS / YR",
  },
]

export function Specimens() {
  const [active, setActive] = useState<PlateId>("property-managers")
  const current = plates.find((p) => p.id === active)!

  return (
    <section
      id="specimens"
      className="relative overflow-hidden border-b border-midnight-rule bg-midnight midnight-texture"
    >
      <div className="absolute inset-0 grid-lines-dark opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-32">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          <div className="col-span-12 mb-8 flex items-center gap-3 lg:mb-14">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-bright">
              § 02
            </span>
            <span className="h-px flex-1 bg-midnight-rule" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
              Plates I — IV
            </span>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <h2 className="display text-[48px] leading-[0.95] text-paper md:text-[72px] lg:text-[96px]">
              Four{" "}
              <span className="display-thin text-brand-bright">specimens,</span>
              <br />
              shown under glass.
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="mt-2 max-w-[42ch] text-[14.5px] leading-[1.6] text-paper/65 lg:mt-6">
              Each plate is a working dashboard we&apos;ve drafted for a real
              firm — pared down to the essentials, but live. Pick a role to
              study its shape.
            </p>
          </div>
        </div>

        {/* Plates index */}
        <div className="mt-12 border-t border-midnight-rule lg:mt-20">
          <ul
            role="tablist"
            className="grid grid-cols-2 gap-px bg-midnight-rule md:grid-cols-4"
          >
            {plates.map((p) => {
              const isActive = active === p.id
              return (
                <li key={p.id} className="bg-midnight">
                  <button
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(p.id)}
                    className={`group flex w-full flex-col items-start gap-2 px-5 py-5 text-left transition-colors ${
                      isActive
                        ? "bg-brand text-paper"
                        : "text-paper hover:bg-midnight-dim"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                          isActive ? "text-paper" : "text-paper/55"
                        }`}
                      >
                        Plate {p.roman}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                          isActive ? "text-paper/80" : "text-paper/40"
                        }`}
                      >
                        {isActive ? "Now showing" : p.audience}
                      </span>
                    </div>
                    <span
                      className={`display text-[24px] leading-[1.05] sm:text-[28px] ${
                        isActive ? "text-paper" : "text-paper"
                      }`}
                    >
                      {p.short}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* The plate itself */}
        <div className="mt-10 lg:mt-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/55">
                Fig. {current.roman}
              </span>
              <h3 className="display mt-2 text-[32px] leading-[1.05] text-paper md:text-[44px]">
                {current.title}{" "}
                <span className="display-thin text-brand-bright">
                  & {current.italicTitle}
                </span>
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/45">
              {current.built}
            </span>
          </div>

          {/* Frame */}
          <div className="relative mt-6 border border-paper/15 bg-midnight-dim p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-5 lg:mt-8">
            {/* Corner registration marks */}
            <span className="absolute -left-2 -top-2 h-4 w-4 border-l border-t border-brand-bright" />
            <span className="absolute -right-2 -top-2 h-4 w-4 border-r border-t border-brand-bright" />
            <span className="absolute -bottom-2 -left-2 h-4 w-4 border-b border-l border-brand-bright" />
            <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b border-r border-brand-bright" />

            {/* Specimen meta strip */}
            <div className="mb-3 flex items-center justify-between border-b border-paper/10 pb-2 font-mono text-[9px] uppercase tracking-[0.22em] text-paper/45 sm:mb-4 sm:pb-3">
              <span>Spec. {current.roman} · {current.audience}</span>
              <span className="hidden sm:inline">Mounted at 96 dpi · 16:10</span>
              <span className="text-brand-bright">● Live</span>
            </div>

            {/* Mobile preview */}
            <div className="block md:hidden">
              <DemoPreview demoId={active} />
            </div>

            {/* Desktop dashboards */}
            <div className="hidden min-h-[640px] md:block">
              {active === "property-managers" && <MaintenanceDashboard />}
              {active === "asset-managers" && <PortfolioDashboard />}
              {active === "realtors" && <CrmDashboard />}
              {active === "lenders" && <LoanPipeline />}
            </div>
          </div>

          {/* Caption */}
          <div className="mt-5 grid grid-cols-12 gap-4 lg:gap-8">
            <div className="col-span-12 md:col-span-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-bright">
                Caption
              </span>
            </div>
            <p className="col-span-12 max-w-[68ch] text-[14.5px] italic leading-[1.65] text-paper/75 md:col-span-11">
              {current.caption}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-midnight-rule pt-10 sm:flex-row sm:items-center lg:mt-24">
          <p className="max-w-[40ch] font-mono text-[11px] uppercase tracking-[0.18em] text-paper/55">
            Want a plate drafted for your firm?
          </p>
          <a
            href="/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-brand px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand-bright"
          >
            <span>Schedule a brief</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
