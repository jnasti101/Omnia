const services = [
  { title: "Portfolio & Dashboards", line: "NOI, IRR, occupancy and cash flow across every property, down to the asset.", tags: ["NOI / IRR", "Occupancy", "Cash flow"] },
  { title: "Pipeline & Deals", line: "Your stages and weighting, with stalled-deal alerts and forecasting.", tags: ["Stages", "Forecasting", "Alerts"] },
  { title: "Operations & Workflow", line: "Tasks, documents and approvals in one place instead of drives and email threads.", tags: ["Tasks", "Documents", "Roles"] },
  { title: "Reporting & Forecasts", line: "Pipeline health and team performance on one page you can hand to an LP.", tags: ["Forecasts", "LP-ready", "Drill-downs"] },
  { title: "Investor & Client Portals", line: "Branded logins for holdings, distributions and performance.", tags: ["Login", "Distributions", "Branded"] },
  { title: "Integrations & Data", line: "Yardi, MRI, Salesforce, QuickBooks and Drive, kept in sync in one place.", tags: ["Yardi / MRI", "Salesforce", "QuickBooks"] },
]

function Title({ t }: { t: string }) {
  const [a, b] = t.split(" & ")
  return (
    <h3 className="display text-[28px] leading-[1.02] text-ink lg:text-[32px]">
      {a} <span className="display-thin text-brand">&amp;</span> <span className="display-thin text-ink-soft">{b}</span>
    </h3>
  )
}

export function Capabilities() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mb-12 grid grid-cols-12 gap-6 lg:mb-16">
          <div className="col-span-12 lg:col-span-5">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">§ 01</span>
              <span className="h-px w-16 bg-rule" />
            </div>
            <h2 className="display text-[48px] text-ink md:text-[64px]">
              What we <span className="display-thin text-ink-soft">build.</span>
            </h2>
          </div>
          <p className="col-span-12 self-end text-[16px] leading-[1.6] text-ink-muted lg:col-span-5 lg:col-start-8">
            Six kinds of software, built around how your firm already works. Most projects combine two or three.
          </p>
        </div>

        <ol className="grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title} className="group relative border-b border-r border-ink/15 bg-paper p-7 transition-colors duration-300 hover:bg-paper-dim/70 lg:p-9">
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-brand transition-all duration-500 group-hover:w-full" aria-hidden />
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted transition-colors group-hover:text-brand">
                0{i + 1}
              </span>
              <div className="mt-6"><Title t={s.title} /></div>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-ink-muted">{s.line}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <li key={t} className="border border-ink/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition-colors group-hover:border-brand group-hover:text-brand">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
