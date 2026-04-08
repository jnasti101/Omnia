import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Omnia Solutions — Custom Software For Real Estate Teams",
  description:
    "We design and build custom dashboards, internal tools, and operational software for real estate teams — purpose-built for how your firm actually works.",
  icons: {
    icon: "/images/omnia-ikon.png",
    shortcut: "/images/omnia-ikon.png",
    apple: "/images/omnia-ikon.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
