"use client"

import Image from "next/image"

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Specimens", href: "#specimens" },
  { label: "On Building", href: "#manifesto" },
  { label: "Correspondence", href: "#correspond" },
]

const studioFacts = [
  { label: "Set in", value: "Geist & JetBrains Mono" },
  { label: "Established", value: "MMXXV — present" },
  { label: "Practice", value: "Operating software, the built world" },
  { label: "Stack", value: "Next.js · Postgres · Tailwind" },
]

export function Colophon() {
  return (
    <footer className="relative overflow-hidden bg-midnight midnight-texture">
      <div className="absolute inset-0 grid-lines-dark opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-[1400px] px-5 pt-20 lg:px-10 lg:pt-32">
        {/* Section header */}
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-bright">
            Colophon
          </span>
          <span className="h-px flex-1 bg-midnight-rule" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
            End matter
          </span>
        </div>

        {/* Three-column masthead */}
        <div className="mt-12 grid grid-cols-12 gap-8">
          {/* About the studio */}
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/omnia-ikon.png"
                alt="Omnia"
                width={56}
                height={56}
                className="h-12 w-12 object-contain"
              />
              <span className="flex flex-col leading-none">
                <span className="text-[20px] font-bold tracking-[-0.02em] text-paper">
                  OMNIA
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.32em] text-paper/60">
                  Solutions
                </span>
              </span>
            </div>
            <h3 className="display mt-6 text-[28px] leading-[1.1] text-paper md:text-[32px]">
              A studio for{" "}
              <span className="display-thin text-brand-bright">real estate</span>{" "}
              operating software.
            </h3>
            <p className="mt-4 max-w-[40ch] text-[14.5px] leading-[1.6] text-paper/65">
              We design and build custom dashboards, deal pipelines, and
              internal tools — for firms that have outgrown the spreadsheet,
              and the SaaS aisle.
            </p>
          </div>

          {/* Departments */}
          <div className="col-span-6 md:col-span-3 md:col-start-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/55">
              Departments
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l, i) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group flex items-baseline gap-3 text-[14.5px] text-paper"
                  >
                    <span className="font-mono text-[10px] text-brand-bright">
                      0{i + 1}
                    </span>
                    <span className="ink-link">{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio facts */}
          <div className="col-span-6 md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/55">
              The fine print
            </p>
            <dl className="mt-4 space-y-2.5">
              {studioFacts.map((f) => (
                <div key={f.label} className="flex flex-col">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
                    {f.label}
                  </dt>
                  <dd className="text-[14px] text-paper/85">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="mt-20 flex items-end justify-between gap-6 border-t border-midnight-rule pt-8 lg:mt-28">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
            <p>Vol. 01 · № 001</p>
            <p className="mt-1">© {new Date().getFullYear()} Omnia Solutions</p>
          </div>
          <div className="flex flex-col items-end gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/50">
            <a href="#" className="ink-link">
              Privacy
            </a>
            <a href="#" className="ink-link">
              Terms
            </a>
            <a
              href="/schedule"
              target="_blank"
              rel="noopener noreferrer"
              className="ink-link text-brand-bright"
            >
              Schedule a call →
            </a>
          </div>
        </div>

        {/* Massive masthead */}
        <div className="-mb-2 mt-10 overflow-hidden lg:-mb-4 lg:mt-16">
          <h2
            aria-hidden
            className="display select-none whitespace-nowrap text-[clamp(96px,28vw,420px)] leading-[0.78] text-paper/95"
          >
            OMNIA<span className="text-brand-bright">.</span>
          </h2>
        </div>
      </div>
    </footer>
  )
}
