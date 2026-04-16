"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingSitesList } from "@/components/betting-sites-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { FaqSection } from "@/components/faq-section"
import { CasinoAmbientBackground } from "@/components/casino-ambient"
import { HeroSection } from "@/components/hero-section"

const wrap = "w-full max-w-[1250px] mx-auto px-4"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <SiteHeader />

      <div className="pt-[62px]">
        <HeroSection onAdvertiserClick={() => setIsAdvertiserModalOpen(true)} />

        {/* Rankings list */}
        <div className="flex justify-center px-4">
          <div
            className={`${wrap} relative overflow-hidden rounded-[4px] border border-[hsl(42_35%_18%/0.3)] shadow-[0_8px_40px_-8px_hsl(128_40%_3%/0.55)] my-3 md:my-5 bg-[hsl(128_28%_8%)]`}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
              <CasinoAmbientBackground />
            </div>
            <BettingSitesList />
          </div>
        </div>

        {/* FAQ */}
        <div className="flex justify-center px-4 mb-5">
          <div className={wrap}>
            <FaqSection />
          </div>
        </div>

        {/* About section */}
        <div className="flex justify-center px-4 pb-10">
          <section
            className={`${wrap} py-12 md:py-16 relative overflow-hidden rounded-[4px] border border-[hsl(42_35%_18%/0.3)] bg-[hsl(128_28%_9%)] shadow-[0_16px_56px_-15px_hsl(128_40%_3%/0.5)]`}
          >
            {/* Texture */}
            <div className="absolute inset-0 bg-hatch opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-grid-gold opacity-30 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(42_58%_42%/0.5)] to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-11">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[hsl(42_48%_34%/0.7)]" />
                  <span className="font-sans text-[10px] tracking-[0.28em] uppercase font-bold text-gold-muted">How We Work</span>
                  <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[hsl(42_48%_34%/0.7)]" />
                </div>
                <h2 className="font-display text-2xl md:text-4xl font-bold text-ivory mb-4 text-balance">
                  The standard for casino comparison in Britain
                </h2>
                <p className="font-sans text-[14px] md:text-[15px] text-ivory-muted max-w-2xl mx-auto leading-relaxed">
                  We evaluate each operator the way a discerning player would — scrutinising the lobby, testing support, and reading every line of the terms before we publish a word.
                </p>
              </div>

              {/* 3-up cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {[
                  {
                    title: "Licence & Integrity",
                    body: "A valid UK Gambling Commission licence is non-negotiable. We verify each brand's regulatory standing, segregated player funds, and compliance history before inclusion.",
                  },
                  {
                    title: "Offer Transparency",
                    body: "Welcome packages are presented in plain language — required stakes, wagering multiples, eligible games, and time limits. No glossing over the conditions that matter.",
                  },
                  {
                    title: "Genuine Testing",
                    body: "Game range, withdrawal speed, mobile performance, and support quality inform every score. Brands that underdeliver are demoted or removed, regardless of commercial relationships.",
                    wide: true,
                  },
                ].map(({ title, body, wide }) => (
                  <div
                    key={title}
                    className={`rounded-[3px] p-5 border border-[hsl(128_20%_15%)] bg-[hsl(128_26%_10%)] hover:border-[hsl(42_38%_24%/0.5)] transition-all duration-300 shadow-md ${wide ? "md:col-span-2 lg:col-span-1" : ""}`}
                  >
                    <div className="mb-3 h-[1px] w-8 bg-gradient-to-r from-[hsl(42_58%_44%/0.6)] to-transparent" />
                    <h3 className="font-display text-[18px] font-semibold text-ivory mb-2">{title}</h3>
                    <p className="font-sans text-[13px] text-ivory-muted leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>

              {/* Why / Getting started */}
              <div className="mt-12 rounded-[3px] p-7 md:p-10 border border-[hsl(218_40%_18%/0.55)] bg-[hsl(218_40%_9%/0.5)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-ivory">
                  <div>
                    <h3 className="font-display text-[20px] font-semibold mb-4 text-gold">
                      Why players use BestCasinoSitesUK
                    </h3>
                    <ul className="space-y-2.5 font-sans text-[13px] text-ivory-muted">
                      {[
                        "Independent editorial — commercial ties disclosed on every page",
                        "Rankings refreshed as offers, games, and operator standards change",
                        "British focus: UKGC compliance and UK payment norms throughout",
                        "Responsible gambling information integrated into every review",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-gold font-bold mt-0.5 shrink-0">&#10003;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-[20px] font-semibold mb-4 text-gold">
                      Before you play
                    </h3>
                    <ol className="space-y-2.5 font-sans text-[13px] text-ivory-muted">
                      {[
                        "Review our ranked list and read the offer summary in full",
                        "Open the casino site and confirm the complete terms and conditions",
                        "Register, complete identity checks, and set your deposit limits",
                        "Play within your means — never attempt to recover losses",
                      ].map((step, i) => (
                        <li key={step} className="flex gap-3">
                          <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[hsl(42_65%_46%)] text-[hsl(128_30%_6%)] flex items-center justify-center font-sans font-bold text-[12px]">
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <TopOffersModal />
      <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
      <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
      <SiteFooter />
    </main>
  )
}
