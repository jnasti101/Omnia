import Image from "next/image"

const process = [
  { n: "01", label: "Call", detail: "Thirty minutes on the workflow you want fixed. You talk to the people who build it." },
  { n: "02", label: "Prototype", detail: "A clickable draft with your own data within a week. You push back, we redraw." },
  { n: "03", label: "Ship", detail: "Weekly releases to real users, then we hand over the source and the documentation." },
]

export function Colophon() {
  return (
    <>
      {/* How we work + booking */}
      <section id="process" className="relative scroll-mt-20 overflow-hidden border-b border-ink/10 bg-paper paper-texture">
        <div className="absolute inset-0 grid-lines opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">§ 02</span>
                <span className="h-px w-16 bg-rule" />
              </div>
              <h2 className="display text-[52px] text-ink md:text-[76px]">
                Tell us what&apos;s on your <span className="display-thin text-brand">desk.</span>
              </h2>
              <a
                href="/schedule"
                className="group mt-10 inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand"
              >
                <span>Book a 30-minute call</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">NDAs signed on request</p>
            </div>

            {/* Registration-mark card */}
            <div className="relative col-span-12 self-end border border-ink/30 bg-paper/80 lg:col-span-6 lg:col-start-7">
              <span className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-brand" aria-hidden />
              <span className="absolute -right-1 -top-1 h-3 w-3 border-r border-t border-brand" aria-hidden />
              <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-brand" aria-hidden />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-brand" aria-hidden />
              <p className="border-b border-ink/15 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted sm:px-8">
                How a project runs
              </p>
              <ol>
                {process.map((p) => (
                  <li key={p.n} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ink/10 px-6 py-5 last:border-b-0 sm:px-8">
                    <span className="display text-[30px] text-brand">{p.n}</span>
                    <div>
                      <p className="text-[17px] font-semibold text-ink">{p.label}</p>
                      <p className="mt-1 text-[14.5px] leading-[1.55] text-ink-muted">{p.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-midnight midnight-texture">
        <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-5 pt-14 lg:px-10 lg:pt-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Image src="/images/omnia-ikon.png" alt="" width={56} height={56} className="h-10 w-10 object-contain" />
              <p className="max-w-[34ch] text-[14.5px] leading-[1.5] text-paper/70">
                Custom software for real estate operators across the country.
              </p>
            </div>
            <div className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/55">
              <span>© {new Date().getFullYear()} Omnia Solutions</span>
              <a href="/schedule" className="ink-link text-brand-bright">Book a call →</a>
            </div>
          </div>
          <div className="-mb-2 mt-12 overflow-hidden border-t border-midnight-rule pt-6 lg:-mb-4 lg:mt-16">
            <p aria-hidden className="display select-none whitespace-nowrap text-[clamp(96px,28vw,420px)] leading-[0.78] text-paper/95">
              OMNIA<span className="text-brand-bright">.</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
