"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

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
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-5 py-3.5 lg:px-10">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/images/omnia-ikon.png"
            alt=""
            width={72}
            height={72}
            priority
            className="h-8 w-8 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="text-[17px] font-bold tracking-[-0.02em] text-ink">OMNIA</span>
            <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.32em] text-ink-muted">
              Solutions
            </span>
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a href="#services" className="ink-link hidden text-[13px] text-ink sm:inline">
            What we build
          </a>
          <a
            href="/schedule"
            className="bg-ink px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-brand"
          >
            Book a call
          </a>
        </div>
      </div>
    </header>
  )
}
