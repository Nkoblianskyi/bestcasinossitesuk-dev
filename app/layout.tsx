import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

/* Playfair Display — stately serif for headings */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
})

/* Inter — clean, authoritative body font */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Best Casino Sites UK | Top UK Online Casinos Ranked 2025",
  description:
    "bestcasinossitesuk.com — authoritative rankings of the UK's finest online casino brands. Bonuses, game ranges, and licence details compared side by side for discerning players.",
  keywords:
    "best casino sites UK, top UK casinos 2025, online casino UK, casino bonus comparison, UKGC licensed casinos, British casino review",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className={`${inter.className} antialiased min-h-screen relative`}>
        {/* Forest green base */}
        <div
          className="fixed inset-0 z-0 pointer-events-none bg-club-page bg-hatch"
          aria-hidden
        />
        {/* Fine gold grid overlay */}
        <div
          className="fixed inset-0 z-0 pointer-events-none bg-grid-gold opacity-60"
          aria-hidden
        />
        <div className="relative z-10 min-h-screen flex flex-col">
          <CookieConsentProvider>
            {children}
            <CookieBanner />
          </CookieConsentProvider>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
