"use client"

import { useEffect, useState } from "react"

export function ScrollAnimations() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Large floating shapes that move dramatically on scroll */}
      <div
        className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl transition-all duration-300"
        style={{
          top: `${10 + scrollY * 0.3}%`,
          left: `${5 + scrollY * 0.1}%`,
          transform: `rotate(${scrollY * 0.2}deg) scale(${1 + scrollY * 0.001})`,
        }}
      />
      <div
        className="absolute w-64 h-64 bg-slate-400/15 rounded-full blur-2xl transition-all duration-300"
        style={{
          top: `${70 - scrollY * 0.2}%`,
          right: `${10 + scrollY * 0.15}%`,
          transform: `rotate(${-scrollY * 0.1}deg) scale(${1 + scrollY * 0.0008})`,
        }}
      />
      <div
        className="absolute w-48 h-48 bg-blue-800/25 rounded-full blur-xl transition-all duration-300"
        style={{
          top: `${40 + scrollY * 0.25}%`,
          left: `${60 - scrollY * 0.08}%`,
          transform: `rotate(${scrollY * 0.3}deg) scale(${1 + scrollY * 0.0012})`,
        }}
      />
      <div
        className="absolute w-32 h-32 bg-blue-400/10 rounded-full blur-lg transition-all duration-300"
        style={{
          top: `${20 - scrollY * 0.1}%`,
          right: `${40 + scrollY * 0.12}%`,
          transform: `rotate(${scrollY * 0.4}deg)`,
        }}
      />

      {/* Additional animated elements */}
      <div
        className="absolute w-24 h-24 bg-slate-600/20 rounded-full blur-md transition-all duration-300"
        style={{
          top: `${80 + scrollY * 0.18}%`,
          left: `${20 + scrollY * 0.06}%`,
          transform: `rotate(${-scrollY * 0.25}deg)`,
        }}
      />
    </div>
  )
}
