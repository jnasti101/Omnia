"use client"

import { useState } from "react"
import Image from "next/image"

export function Correspondence() {
  const [time] = useState(() => {
    const d = new Date()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  })

  return (
    <section
      id="correspond"
      className="relative overflow-hidden border-b border-ink/10 bg-paper paper-texture"
    >
      <div className="absolute inset-0 grid-lines opacity-50" aria-hidden />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-5 py-20 lg:gap-8 lg:px-10 lg:py-32">
        {/* Left column — headline */}
        <div className="col-span-12 lg:col-span-6">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
              § 04
            </span>
            <span className="h-px flex-1 bg-rule lg:max-w-[120px]" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
            Correspondence
          </p>
          <h2 className="display mt-4 text-[56px] leading-[0.95] text-ink md:text-[88px] lg:text-[104px]">
            Tell us
            <br />
            what&apos;s on
            <br />
            your{" "}
            <span className="display-thin text-brand">desk.</span>
          </h2>
          <p className="mt-8 max-w-[44ch] text-[16px] leading-[1.6] text-ink-muted md:text-[17px]">
            Thirty minutes on the phone. We&apos;ll listen to the workflow you
            wish was easier, then come back inside a week with a clickable
            prototype and a plan to ship it.
          </p>

          {/* Field notes — small print bullets */}
          <ul className="mt-8 space-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <li className="flex items-baseline gap-3">
              <span className="text-brand">●</span>
              <span>No agency middlemen. You talk to the people who build.</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="text-brand">●</span>
              <span>NDAs gladly signed. Source code handed over.</span>
            </li>
            <li className="flex items-baseline gap-3">
              <span className="text-brand">●</span>
              <span>First sketches inside seven days, or we don&apos;t bill.</span>
            </li>
          </ul>
        </div>

        {/* Right column — letter card */}
        <div className="col-span-12 lg:col-span-6">
          <div className="relative">
            {/* Card */}
            <div className="relative border border-ink/30 bg-paper-dim/40 p-6 sm:p-10">
              {/* Corner registration */}
              <span className="absolute -left-1 -top-1 h-3 w-3 border-l border-t border-brand" />
              <span className="absolute -right-1 -top-1 h-3 w-3 border-r border-t border-brand" />
              <span className="absolute -bottom-1 -left-1 h-3 w-3 border-b border-l border-brand" />
              <span className="absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-brand" />

              {/* Letter heading */}
              <div className="mb-6 flex items-baseline justify-between border-b border-ink/20 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                <span>Omnia Solutions · Discovery brief</span>
                <span>{time}</span>
              </div>

              <p className="display text-[22px] leading-[1.15] text-ink md:text-[26px]">
                Dear <span className="display-thin text-brand">Omnia,</span>
              </p>

              <form
                className="mt-6 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.open(
                    "/schedule",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }}
              >
                <Field label="My name is" placeholder="Jane Halloran" name="name" />
                <Field
                  label="The firm is"
                  placeholder="Halloran Capital Partners"
                  name="firm"
                />
                <Field
                  label="Reach me at"
                  placeholder="jane@halloran.co"
                  name="email"
                  type="email"
                />
                <FieldArea
                  label="On my desk this quarter"
                  placeholder="A pipeline view that matches how we actually qualify deals — without us moving to a $90/seat platform."
                  name="brief"
                />

                <div className="flex flex-col-reverse items-start justify-between gap-4 pt-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-brand/40 bg-paper">
                      <Image
                        src="/images/omnia-ikon.png"
                        alt=""
                        width={36}
                        height={36}
                        className="h-7 w-7 object-contain"
                      />
                    </span>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                      Yours,
                      <br />
                      The studio
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-paper transition-colors hover:bg-brand"
                  >
                    <span>Post the brief</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Stamp accent */}
            <div className="absolute -right-2 -top-2 hidden h-20 w-16 rotate-[8deg] border border-dashed border-brand bg-paper p-1.5 text-center sm:block">
              <div className="flex h-full w-full flex-col items-center justify-center border border-brand/40">
                <span className="display text-[14px] leading-none text-brand">
                  OMNIA
                </span>
                <span className="mt-1 font-mono text-[7px] uppercase tracking-[0.18em] text-ink-muted">
                  V — MMXXVI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  placeholder,
  name,
  type = "text",
}: {
  label: string
  placeholder: string
  name: string
  type?: string
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-1.5 w-full border-b border-ink/30 bg-transparent py-2 text-[16px] text-ink placeholder:text-ink-muted/60 focus:border-brand focus:outline-none"
      />
    </label>
  )
}

function FieldArea({
  label,
  placeholder,
  name,
}: {
  label: string
  placeholder: string
  name: string
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
        {label}
      </span>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={3}
        className="mt-1.5 w-full resize-none border-b border-ink/30 bg-transparent py-2 text-[16px] leading-[1.5] text-ink placeholder:text-ink-muted/60 focus:border-brand focus:outline-none"
      />
    </label>
  )
}
