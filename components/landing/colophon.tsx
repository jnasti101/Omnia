import Image from "next/image"

const terms = [
  "You talk directly to the people who build it.",
  "A clickable prototype within a week of the call.",
  "You own the source code. NDAs signed on request.",
]

export function Colophon() {
  return (
    <footer id="book" className="relative overflow-hidden bg-midnight midnight-texture">
      <div className="absolute inset-0 grid-lines-dark opacity-40" aria-hidden />

      <div className="relative mx-auto max-w-[1200px] px-5 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <h2 className="display text-[36px] leading-[1.02] text-paper md:text-[52px]">
              Tell us what you want built.
            </h2>
            <p className="mt-4 max-w-[48ch] text-[16px] leading-[1.6] text-paper/70">
              Book a 30-minute call. We&apos;ll walk through the workflow you want to fix and follow up with a plan
              and a price.
            </p>
            <ul className="mt-6 space-y-2 text-[14.5px] text-paper/85">
              {terms.map((t) => (
                <li key={t} className="flex items-baseline gap-3">
                  <span className="text-brand-bright">●</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:justify-self-end">
            <a
              href="/schedule"
              className="group inline-flex items-center gap-3 bg-paper px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:bg-brand-bright"
            >
              <span>Book a call</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-midnight-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image src="/images/omnia-ikon.png" alt="" width={56} height={56} className="h-8 w-8 object-contain" />
            <span className="text-[15px] font-bold tracking-[-0.02em] text-paper">OMNIA SOLUTIONS</span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/50">
            © {new Date().getFullYear()} Omnia Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
