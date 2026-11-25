import Image from "next/image"

const audiences = ["Property managers", "Asset managers", "Brokerages", "Lenders", "Sponsors", "Family offices", "Developers", "Funds"]

const glance = [
  { k: "First prototype", v: "Within a week, with your data" },
  { k: "Ownership", v: "You keep the source code" },
  { k: "Connects to", v: "Yardi, MRI, Salesforce, QuickBooks" },
]

const SIZE = "leading-[0.95] text-[12.5vw] sm:text-[10vw] md:text-[80px] lg:text-[104px] xl:text-[120px]"

export function HeroMasthead() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 paper-texture">
      <div className="absolute inset-0 grid-lines opacity-70" aria-hidden />

      {/* Orbiting mark, right edge */}
      <div
        className="pointer-events-none absolute hidden h-[52vh] w-[52vh] opacity-[0.07] md:block"
        style={{ right: "-18vh", top: "-6vh" }}
        aria-hidden
      >
        <div className="animate-orbit-slow h-full w-full motion-reduce:animate-none">
          <Image src="/images/omnia-ikon.png" alt="" width={1000} height={1000} className="h-full w-full object-contain" priority />
        </div>
      </div>

      {/* Concentric rings, lower left */}
      <svg
        className="pointer-events-none absolute -bottom-48 -left-48 hidden h-[520px] w-[520px] opacity-[0.14] md:block"
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

      <div className="relative mx-auto max-w-[1400px] px-5 pb-14 pt-12 lg:px-10 lg:pb-20 lg:pt-16">
        <h1>
          <span className={`display block text-ink ${SIZE}`}>Operating software,</span>
          <span className={`display block ${SIZE}`}>
            <span className="display-thin text-ink-soft">built for </span>
            <span className="grad-omnia">real&nbsp;estate</span>
          </span>
          <span className={`display-italic block text-ink ${SIZE}`}>operators.</span>
        </h1>

        <div className="mt-10 grid grid-cols-12 gap-8 lg:mt-14">
          <div className="col-span-12 md:col-span-7">
            <p className="max-w-[54ch] text-[17px] leading-[1.6] text-ink md:text-[19px]">
              <span className="font-semibold">Omnia Solutions</span> designs and builds custom dashboards, deal pipelines,
              investor portals and internal tools for real estate firms, then hands them over.
            </p>
            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
              <a
                href="/schedule"
                className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand"
              >
                <span>Book a 30-minute call</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#services" className="text-[13px] font-medium uppercase tracking-[0.18em] text-ink">
                <span className="ink-link">See what we build</span>
              </a>
            </div>
          </div>

          <dl className="col-span-12 self-end border-t border-ink md:col-span-4 md:col-start-9">
            {glance.map((g) => (
              <div key={g.k} className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">{g.k}</dt>
                <dd className="text-right text-[14px] text-ink">{g.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative flex items-stretch border-t border-ink/10 bg-paper-dim/70">
        <p className="relative z-10 flex shrink-0 items-center bg-ink px-5 py-3 text-[12px] font-medium uppercase tracking-[0.16em] text-paper lg:px-10">
          <span className="hidden sm:inline">Trusted by real estate operators across the country</span>
          <span className="sm:hidden">Trusted nationwide</span>
        </p>
        <div className="overflow-hidden py-3">
          <div className="flex animate-marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-ink motion-reduce:animate-none">
            {[...audiences, ...audiences].map((w, i) => (
              <span key={i} className="mx-6 inline-flex items-center gap-6">
                <span className="text-brand">●</span>
                <span>{w}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
