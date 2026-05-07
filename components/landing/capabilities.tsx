"use client"

const capabilities = [
  {
    id: "01",
    title: "Portfolio & Asset Dashboards",
    description:
      "Living analytics dashboards that track NOI, IRR, occupancy, and cash flow across every property — with the asset-level drill-downs your acquisitions team actually opens on Monday morning.",
    tags: ["NOI / IRR", "Occupancy", "Cash flow", "Statements"],
  },
  {
    id: "02",
    title: "Pipeline & Deal Management",
    description:
      "Kanban-style pipelines built around your stages, your weighting, your team. Stalled-deal alerts, weighted forecasting, and bottleneck detection — instead of another color-coded spreadsheet.",
    tags: ["Stages", "Forecasting", "Bottlenecks", "Alerts"],
  },
  {
    id: "03",
    title: "Operations & Workflow Tools",
    description:
      "A central hub for deals, tasks, comments, and documents — replacing the spreadsheets, shared drives, and email threads your team is currently held together with.",
    tags: ["Tasks", "Documents", "Activity", "Roles"],
  },
  {
    id: "04",
    title: "Executive Reporting & Forecasting",
    description:
      "High-level dashboards built for principals — pipeline health, revenue forecasts, and team performance, distilled to the single page you can hand to an LP without an apology.",
    tags: ["Forecasts", "LP-ready", "Leaderboards", "Drill-downs"],
  },
  {
    id: "05",
    title: "Investor & Client Portals",
    description:
      "Branded portals where investors and clients log in to see holdings, distributions, and performance — without you sending another quarterly PDF, or another follow-up email about the PDF.",
    tags: ["Login", "Distributions", "Performance", "Branded"],
  },
  {
    id: "06",
    title: "Integrations & Data Pipelines",
    description:
      "We connect what you already pay for — Yardi, MRI, Salesforce, QuickBooks, Drive — so your data lives in one place, stays in sync, and finally tells one story.",
    tags: ["Yardi / MRI", "Salesforce", "QuickBooks", "Sync"],
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" className="relative border-b border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-20 lg:gap-8 lg:px-10 lg:py-32">
        {/* Sticky left rail */}
        <aside className="col-span-12 lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                § 01
              </span>
              <span className="h-px flex-1 bg-rule" />
            </div>
            <h2 className="display text-[44px] leading-[0.95] text-ink md:text-[56px]">
              Six
              <br />
              <span className="display-thin text-ink-soft">departments,</span>
              <br />
              one studio.
            </h2>
            <p className="mt-6 max-w-[34ch] text-[14px] leading-[1.55] text-ink-muted">
              The ground we cover, when a firm asks us to draft something
              custom. Most engagements pull from two or three at a time.
            </p>
            <div className="mt-8 inline-flex items-baseline gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              <span>Drag below</span>
              <span aria-hidden>↓</span>
            </div>
          </div>
        </aside>

        {/* Capability list */}
        <ol className="col-span-12 lg:col-span-9">
          <li>
            <div className="h-px w-full bg-ink" />
          </li>
          {capabilities.map((cap) => (
            <li key={cap.id} className="group">
              <a
                href="#correspond"
                className="grid grid-cols-12 gap-4 py-7 transition-colors duration-300 hover:bg-paper-dim/70 lg:gap-6 lg:py-9"
              >
                <span className="col-span-2 pl-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted transition-colors group-hover:text-brand lg:col-span-1 lg:pl-4">
                  {cap.id}
                </span>
                <div className="col-span-10 lg:col-span-7">
                  <h3 className="display text-[28px] leading-[1.05] text-ink transition-transform duration-500 group-hover:translate-x-1 sm:text-[36px] lg:text-[44px]">
                    <span>{cap.title.split(" & ")[0]}</span>
                    {cap.title.includes(" & ") && (
                      <>
                        {" "}
                        <span className="display-thin text-brand">&</span>{" "}
                        <span className="display-thin text-ink-soft">
                          {cap.title.split(" & ")[1]}
                        </span>
                      </>
                    )}
                  </h3>
                  <p className="mt-3 max-w-[58ch] text-[14.5px] leading-[1.6] text-ink-muted lg:mt-4 lg:text-[15.5px]">
                    {cap.description}
                  </p>
                </div>
                <div className="col-span-12 flex flex-col items-start gap-3 lg:col-span-4 lg:items-end lg:pr-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                    Deliverables
                  </span>
                  <ul className="flex flex-wrap gap-1.5 lg:justify-end">
                    {cap.tags.map((t) => (
                      <li
                        key={t}
                        className="border border-ink/20 bg-paper px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors group-hover:border-brand group-hover:text-brand"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted transition-colors group-hover:text-brand lg:mt-2">
                    Brief us →
                  </span>
                </div>
              </a>
              <div className="h-px w-full bg-ink/10 transition-colors group-hover:bg-brand" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
