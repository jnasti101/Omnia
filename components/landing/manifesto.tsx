"use client"

const theses = [
  {
    id: "i.",
    title: "It fits the firm,",
    italic: "not the field.",
    body: "Off-the-shelf platforms are designed for the average customer — which is to say, no one. We design around how your team actually moves a deal from first call to close, in your language, with your stages.",
  },
  {
    id: "ii.",
    title: "You build it",
    italic: "once.",
    body: "No SaaS bill that climbs every time you hire someone or add a property. You pay to build the thing — then you own the thing. Future changes are real changes, not feature requests filed into the void.",
  },
  {
    id: "iii.",
    title: "It ships in",
    italic: "weeks.",
    body: "Most first releases go live in four to eight weeks. You see real screens within days of kickoff, signed-off iterations every Friday, and a working production app long before another vendor would have finished onboarding.",
  },
  {
    id: "iv.",
    title: "It tells",
    italic: "one story.",
    body: "Yardi, MRI, Salesforce, QuickBooks, Drive — all stitched into a single source of truth, so the dashboard you open Monday morning matches the one your CFO opens Friday afternoon.",
  },
]

const process = [
  {
    n: "01",
    label: "Discovery",
    detail: "We sit with your team, walk the workflows, read the spreadsheets, ask the awkward questions. (One week.)",
  },
  {
    n: "02",
    label: "Prototype",
    detail: "A clickable draft with your data — not Lorem Ipsum. You touch it, push back, we redraw. (Two weeks.)",
  },
  {
    n: "03",
    label: "Build & ship",
    detail: "Weekly releases, real users, live data. We hand over the keys, the source, and the documentation. (Three to five weeks.)",
  },
]

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative border-b border-ink/10 bg-paper-dim/70 paper-texture"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-20 lg:gap-8 lg:px-10 lg:py-32">
        {/* Section header — left rail */}
        <div className="col-span-12 lg:col-span-3">
          <div className="lg:sticky lg:top-32">
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                § 03
              </span>
              <span className="h-px flex-1 bg-rule" />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
              An editorial in four parts
            </p>
            <h2 className="display mt-4 text-[40px] leading-[0.96] text-ink md:text-[56px]">
              On <span className="display-thin text-ink-soft">building,</span>
              <br /> rather than{" "}
              <span className="display-thin text-brand">buying.</span>
            </h2>

            <div className="mt-8 inline-flex items-center gap-2 border-l-2 border-brand pl-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                Filed by Omnia Solutions
              </span>
            </div>
          </div>
        </div>

        {/* Essay column */}
        <div className="col-span-12 lg:col-span-9">
          {/* Lede with drop cap */}
          <p className="text-[18px] leading-[1.6] text-ink md:text-[20px]">
            <span
              className="display float-left mr-3 mt-1 text-[88px] leading-[0.78] text-brand md:text-[112px]"
              aria-hidden
            >
              T
            </span>
            here is a quiet tax that real estate firms pay for using software
            built for someone else. It shows up as the spreadsheet that lives
            beside the SaaS — the one with the actual data. As the columns the
            CRM doesn&apos;t support. As the&nbsp;reports that get rebuilt by
            hand every quarter, because the platform was never going to learn
            your firm.
          </p>

          {/* Pull quote */}
          <figure className="my-12 border-l-2 border-brand pl-6 md:my-16 md:pl-8">
            <blockquote className="display text-[34px] leading-[1.05] text-ink md:text-[48px]">
              <span className="text-brand">“</span>
              Off-the-shelf software treats{" "}
              <span className="display-thin text-brand">every</span> firm the
              same. <br className="hidden md:block" />
              Yours <span className="display-thin text-brand">isn&apos;t.</span>
              <span className="text-brand">”</span>
            </blockquote>
          </figure>

          {/* Theses */}
          <ol className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:gap-y-14">
            {theses.map((t) => (
              <li key={t.id}>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                    {t.id}
                  </span>
                  <span className="h-px flex-1 bg-ink/20" />
                </div>
                <h3 className="display mt-4 text-[28px] leading-[1.05] text-ink md:text-[34px]">
                  {t.title}{" "}
                  <span className="display-thin text-brand">{t.italic}</span>
                </h3>
                <p className="mt-3 max-w-[44ch] text-[14.5px] leading-[1.6] text-ink-muted md:text-[15.5px]">
                  {t.body}
                </p>
              </li>
            ))}
          </ol>

          {/* Process / sidebar */}
          <div className="mt-20 border-t border-ink pt-10 lg:mt-28">
            <div className="mb-8 flex items-baseline justify-between">
              <h3 className="display text-[26px] leading-[1.05] text-ink md:text-[34px]">
                How we draft, then{" "}
                <span className="display-thin text-brand">deliver.</span>
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                Sidebar
              </span>
            </div>

            <ol className="grid grid-cols-1 gap-px bg-ink md:grid-cols-3">
              {process.map((p) => (
                <li
                  key={p.n}
                  className="bg-paper p-6 transition-colors hover:bg-paper-deep md:p-8"
                >
                  <div className="flex items-baseline justify-between">
                    <span className="display text-[44px] leading-none text-brand md:text-[56px]">
                      {p.n}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                      Phase
                    </span>
                  </div>
                  <h4 className="display mt-6 text-[22px] leading-[1.05] text-ink md:text-[26px]">
                    {p.label}
                  </h4>
                  <p className="mt-3 max-w-[28ch] text-[13.5px] leading-[1.6] text-ink-muted">
                    {p.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
