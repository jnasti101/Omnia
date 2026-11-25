import { EditorialNav } from "@/components/landing/editorial-nav"
import { HeroMasthead } from "@/components/landing/hero-masthead"
import { Capabilities } from "@/components/landing/capabilities"
import { Colophon } from "@/components/landing/colophon"

export default function OmniaLanding() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <EditorialNav />
      <HeroMasthead />
      <Capabilities />
      <Colophon />
    </main>
  )
}
