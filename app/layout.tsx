import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Omnia Solutions - Real Estate Brokerage Optimization",
  description:
    "Transform your real estate brokerage with intelligent infrastructure solutions. Streamline processes, boost productivity, and scale your business with confidence.",
  icons: {
    icon: "/images/omnia-logo.png",
    shortcut: "/images/omnia-logo.png",
    apple: "/images/omnia-logo.png",
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
