import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Omnia Solutions — A Studio for Real Estate Operating Software",
  description:
    "Omnia is a studio that designs and builds custom dashboards, deal pipelines, and internal tools for property managers, asset managers, brokerages, and lenders.",
  icons: {
    icon: "/images/omnia-ikon.png",
    shortcut: "/images/omnia-ikon.png",
    apple: "/images/omnia-ikon.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-paper text-ink">{children}</body>
    </html>
  )
}
