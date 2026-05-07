import { EditorialNav } from "@/components/landing/editorial-nav"
import { HeroMasthead } from "@/components/landing/hero-masthead"
import { Capabilities } from "@/components/landing/capabilities"
import { Specimens } from "@/components/landing/specimens"
import { Manifesto } from "@/components/landing/manifesto"
import { Correspondence } from "@/components/landing/correspondence"
import { Colophon } from "@/components/landing/colophon"

export default function OmniaLanding() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <EditorialNav />
      <HeroMasthead />
      <Capabilities />
      <Specimens />
      <Manifesto />
      <Correspondence />
      <Colophon />
    </main>
  )
}
