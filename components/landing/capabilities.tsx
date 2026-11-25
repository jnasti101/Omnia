const services = [
  {
    title: "Portfolio and asset dashboards",
    description: "NOI, IRR, occupancy and cash flow across every property, with drill-downs to the asset.",
    tags: ["NOI / IRR", "Occupancy", "Cash flow"],
  },
  {
    title: "Deal pipelines",
    description: "Your stages and weighting, with stalled-deal alerts and forecasting instead of a color-coded spreadsheet.",
    tags: ["Stages", "Forecasting", "Alerts"],
  },
  {
    title: "Operations and workflow tools",
    description: "One place for tasks, documents and approvals instead of shared drives and email threads.",
    tags: ["Tasks", "Documents", "Roles"],
  },
  {
    title: "Executive reporting",
    description: "Pipeline health, forecasts and team performance on one page you can hand to principals and LPs.",
    tags: ["Forecasts", "LP-ready", "Drill-downs"],
  },
  {
    title: "Investor and client portals",
    description: "Branded logins where investors and clients see holdings, distributions and performance.",
    tags: ["Login", "Distributions", "Branded"],
  },
  {
    title: "Integrations",
    description: "Yardi, MRI, Salesforce, QuickBooks and Drive connected, so your data lives in one place and stays in sync.",
    tags: ["Yardi / MRI", "Salesforce", "QuickBooks"],
  },
]

export function Capabilities() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1200px] px-5 py-16 lg:px-10 lg:py-20">
        <h2 className="display text-[32px] leading-[1.05] text-ink md:text-[40px]">What we build</h2>
        <p className="mt-3 max-w-[60ch] text-[15px] leading-[1.6] text-ink-muted">
          Most projects combine two or three of these, built around how your firm already works.
        </p>

        <ul className="mt-10 grid border-t border-ink md:grid-cols-2">
          {services.map((s, i) => (
            <li
              key={s.title}
              className={`border-b border-ink/10 py-6 md:py-7 ${i % 2 === 0 ? "md:border-r md:pr-8" : "md:pl-8"}`}
            >
              <h3 className="text-[19px] font-semibold tracking-[-0.01em] text-ink">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-ink-muted">{s.description}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-ink/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
