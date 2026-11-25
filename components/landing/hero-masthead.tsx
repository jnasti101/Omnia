const audiences = ["Property managers", "Asset managers", "Brokerages", "Lenders", "Sponsors", "Family offices"]

export function HeroMasthead() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 paper-texture">
      <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 lg:px-10 lg:py-24">
        <h1 className="display max-w-[16ch] text-[44px] leading-[1.0] text-ink sm:text-[60px] lg:text-[76px]">
          Custom software for <span className="grad-omnia">real estate</span> operators.
        </h1>
        <p className="mt-6 max-w-[60ch] text-[17px] leading-[1.6] text-ink md:text-[19px]">
          We build the dashboards, deal pipelines, investor portals and internal tools your team runs on,
          connected to the systems you already use. You own the code.
        </p>

        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
          <a
            href="/schedule"
            className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-brand"
          >
            <span>Book a 30-minute call</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#services" className="ink-link text-[14px] text-ink">
            See what we build
          </a>
        </div>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-ink/10 bg-paper-dim/60">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-5 py-5 md:flex-row md:items-center md:justify-between lg:px-10">
          <p className="text-[15px] font-medium text-ink">
            Trusted by real estate operators across the country.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {audiences.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
