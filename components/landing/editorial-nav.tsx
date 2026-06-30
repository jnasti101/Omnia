"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const links = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Specimens", href: "#specimens" },
  { label: "On Building", href: "#manifesto" },
  { label: "Correspondence", href: "#correspond" },
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
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-paper/85 backdrop-blur-md" : "bg-paper"
      }`}
    >
      {/* Top hairline strip */}
      <div className="border-b border-ink/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted lg:px-10">
          <span className="hidden md:inline">Vol. 01 · Issue V · MMXXVI</span>
          <span className="hidden md:inline">A Studio for Real Estate Operating Software</span>
          <span className="md:hidden">Omnia Solutions · Vol. 01</span>
          <a
            href="/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="ink-link text-ink"
          >
            Schedule a Call →
          </a>
        </div>
      </div>

      {/* Masthead row */}
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <a href="#" className="group flex items-center gap-3">
          <span className="relative inline-flex h-9 w-9 items-center justify-center">
            <Image
              src="/images/omnia-ikon.png"
              alt="Omnia"
              width={72}
              height={72}
              priority
              className="h-9 w-9 object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[18px] font-bold tracking-[-0.02em] text-ink">
              OMNIA
            </span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.32em] text-ink-muted">
              Solutions
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-baseline gap-1.5 text-[13px] text-ink"
            >
              <span className="font-mono text-[10px] text-brand">
                0{i + 1}
              </span>
              <span className="ink-link">{l.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="/schedule"
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden items-center gap-2 bg-ink px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.18em] text-paper transition-all hover:bg-brand md:inline-flex"
        >
          <span>Begin a Brief</span>
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>

        {/* Mobile CTA */}
        <a
          href="/schedule"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-ink px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-paper md:hidden"
        >
          Brief →
        </a>
      </div>
    </header>
  )
}
