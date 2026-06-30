import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import Script from "next/script"
import "./globals.css"

const LINKEDIN_PARTNER_ID = "9595076"

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
      <body className="font-sans antialiased bg-paper text-ink">
        {children}

        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight-loader" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l) {
                window.lintrk = function(a, b) { window.lintrk.q.push([a, b]) };
                window.lintrk.q = [];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript"; b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt=""
            src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
          />
        </noscript>
      </body>
    </html>
  )
}
