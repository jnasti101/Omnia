import { CalendarWidget } from "@/components/calendar-widget"
import Link from "next/link"

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-paper text-ink paper-texture">
      {/* Slim nav */}
      <div className="relative border-b border-ink/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 lg:px-10">
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink hover:text-brand"
          >
            ← Omnia Solutions
          </Link>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted sm:inline">
            Discovery call · 30 minutes
          </span>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden />

        <div className="relative mx-auto max-w-[1400px] px-5 pb-10 pt-10 lg:px-10 lg:pb-14 lg:pt-14">
          {/* Dateline */}
          <div className="mb-6 flex items-center justify-between gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
            <span className="text-brand">№ 002 / Begin a brief</span>
            <span className="hidden sm:inline">A thirty-minute conversation</span>
          </div>

          {/* Lede */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            <div className="col-span-12 md:col-span-1">
              <div className="mt-3 hidden h-px w-full bg-ink md:block" />
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted md:mt-3">
                Lede
              </div>
            </div>
            <p className="col-span-12 max-w-[58ch] text-[17px] leading-[1.55] text-ink md:col-span-7 md:text-[19px]">
              Pick a time below. We'll spend the call walking through your current operations,
              the tools you've outgrown, and what a purpose-built system could look like for{" "}
              <em>your</em> firm. No slides, no pitch deck — just a conversation.
            </p>

            <aside className="col-span-12 md:col-span-4 md:col-start-9">
              <div className="border-t border-ink pt-4">
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-muted">
                  What to expect
                </div>
                <ul className="divide-y divide-ink/10">
                  {[
                    { id: "01", label: "30-minute video call" },
                    { id: "02", label: "We learn how you operate today" },
                    { id: "03", label: "You see how we'd approach it" },
                    { id: "04", label: "Decide if there's a fit — no pressure" },
                  ].map((item) => (
                    <li key={item.id} className="flex items-baseline gap-3 py-2.5 text-[14px] text-ink">
                      <span className="font-mono text-[10px] text-ink-muted">{item.id}</span>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* The widget */}
      <section className="relative">
        <div className="mx-auto max-w-[1100px] px-5 py-12 lg:px-10 lg:py-20">
          <CalendarWidget />
        </div>
      </section>
    </main>
  )
}
