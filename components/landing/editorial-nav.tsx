"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const links = [
  { label: "What we build", href: "#services" },
  { label: "How we work", href: "#process" },
]

export function EditorialNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink/10 transition-colors duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md" : "bg-paper"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <Image src="/images/omnia-ikon.png" alt="" width={72} height={72} priority className="h-9 w-9 object-contain" />
          <span className="flex flex-col leading-none">
            <span className="text-[18px] font-bold tracking-[-0.02em] text-ink">OMNIA</span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.32em] text-ink-muted">Solutions</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Sections">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="group flex items-baseline gap-1.5 text-[13px] text-ink">
              <span className="font-mono text-[10px] text-brand">0{i + 1}</span>
              <span className="ink-link">{l.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="/schedule"
          className="group inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand"
        >
          <span>Book a call</span>
          <span className="hidden transition-transform group-hover:translate-x-0.5 sm:inline">→</span>
        </a>
      </div>
    </header>
  )
}
