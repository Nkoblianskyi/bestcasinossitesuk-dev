"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

function RatingBar({ score }: { score: number }) {
  const pct = (score / 10) * 100
  return (
    <div className="w-full h-1 rounded-full bg-[hsl(128_22%_16%)] overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[hsl(42_55%_42%)] to-[hsl(42_68%_58%)] transition-all"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

function StarRating({ score }: { score: number }) {
  const filled = score / 2
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(Math.max((filled - i) * 100, 0), 100)
        return (
          <div key={i} className="relative inline-block">
            <Star className="h-3 w-3 text-[hsl(128_20%_20%)]" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill}%` }}>
              <Star className="h-3 w-3 text-[hsl(42_68%_55%)] fill-[hsl(42_68%_55%)]" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const medalColors: Record<number, { bg: string; text: string; border: string; shadow: string }> = {
  1: {
    bg: "bg-[hsl(42_68%_46%)]",
    text: "text-[hsl(128_30%_6%)]",
    border: "border-[hsl(42_72%_54%)]",
    shadow: "shadow-[0_0_14px_hsl(42_60%_38%/0.5)]",
  },
  2: {
    bg: "bg-[hsl(210_12%_60%)]",
    text: "text-[hsl(128_30%_6%)]",
    border: "border-[hsl(210_12%_72%)]",
    shadow: "shadow-[0_0_8px_hsl(210_12%_40%/0.3)]",
  },
  3: {
    bg: "bg-[hsl(25_55%_45%)]",
    text: "text-[hsl(128_30%_6%)]",
    border: "border-[hsl(25_60%_54%)]",
    shadow: "shadow-[0_0_8px_hsl(25_50%_30%/0.3)]",
  },
}

export function BettingSitesList() {
  const [sites] = useState(bettingSites)

  return (
    <section className="pt-5 md:pt-7 pb-10 md:pb-14 relative z-10">
      <div className="px-3 sm:px-4">

        {/* Column headers — desktop */}
        <div className="hidden md:grid grid-cols-12 max-w-[1250px] mx-auto px-3 mb-2">
          <div className="col-span-3" />
          <div className="col-span-4 pl-4">
            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-[hsl(100_8%_42%)]">Welcome Offer</span>
          </div>
          <div className="col-span-2 pl-4 text-center">
            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-[hsl(100_8%_42%)]">Our Score</span>
          </div>
          <div className="col-span-3 pl-4 text-center">
            <span className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-[hsl(100_8%_42%)]">Action</span>
          </div>
        </div>

        <div className="w-full space-y-2.5 max-w-[1250px] mx-auto">
          {sites.map((site, index) => {
            const rank = index + 1
            const isTop = rank === 1
            const medal = medalColors[rank]

            return (
              <div key={site.id} className="relative">
                {/* Top pick badge */}
                {isTop && (
                  <div className="absolute -top-3 left-4 sm:left-5 z-10 flex items-center gap-1.5 bg-[hsl(42_68%_46%)] text-[hsl(128_30%_6%)] px-3 py-0.5 rounded-[2px] shadow-[0_2px_12px_hsl(42_55%_22%/0.55)]">
                    <span className="font-sans text-[9px] font-bold tracking-widest uppercase">Editor&apos;s Pick</span>
                  </div>
                )}

                <Link
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className={`block rounded-[3px] transition-all duration-300 group ${isTop
                    ? "border-2 border-[hsl(42_62%_46%)] bg-[hsl(128_28%_9%)] shadow-[0_0_0_1px_hsl(42_58%_50%/0.2),0_8px_32px_-6px_hsl(128_40%_3%/0.6),inset_0_1px_0_hsl(42_65%_58%/0.08)] hover:border-[hsl(42_68%_52%)] hover:shadow-[0_0_0_1px_hsl(42_62%_52%/0.3),0_12px_40px_-6px_hsl(128_40%_3%/0.65)]"
                    : "border border-[hsl(128_22%_17%)] bg-[hsl(128_26%_9%)] hover:border-[hsl(42_40%_28%/0.55)] hover:shadow-[0_6px_24px_-8px_hsl(128_40%_3%/0.45)] hover:bg-[hsl(128_26%_10%)]"
                    }`}
                >
                  {/* DESKTOP layout */}
                  <div className="hidden md:grid grid-cols-12 gap-0 items-stretch">

                    {/* Rank + Logo block */}
                    <div className="col-span-3 flex items-center gap-3 p-4">
                      {/* Rank medallion */}
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-[2px] font-display font-bold text-[17px] flex items-center justify-center border ${medal
                          ? `${medal.bg} ${medal.text} ${medal.border} ${medal.shadow}`
                          : "bg-[hsl(128_22%_13%)] text-ivory-muted border-[hsl(128_18%_20%)]"
                          }`}
                        aria-label={`Rank ${rank}`}
                      >
                        {rank}
                      </div>

                      {/* Logo */}
                      <div className="flex-1 bg-white rounded-[2px] border border-[hsl(0_0%_88%)] flex items-center justify-center min-h-[5.5rem] px-3 py-2 shadow-inner">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={190}
                          height={84}
                          className="object-contain h-16 w-auto"
                        />
                      </div>
                    </div>

                    {/* Offer */}
                    <div className={`col-span-4 flex flex-col items-center justify-center text-center border-l px-4 py-4 ${isTop ? "border-[hsl(42_38%_28%/0.45)]" : "border-[hsl(128_18%_14%)]"}`}>
                      <div className={`text-[9px] font-sans font-bold uppercase tracking-[0.22em] mb-2 ${isTop ? "text-gold-muted" : "text-[hsl(100_8%_42%)]"}`}>
                        Welcome Offer
                      </div>
                      <div className="font-display font-semibold text-[18px] sm:text-[24px] leading-snug text-ivory">
                        {site.bonus}
                      </div>
                    </div>

                    {/* Score */}
                    <div className={`col-span-2 flex flex-col items-center justify-center border-l pl-4 pr-2 py-4 gap-1.5 ${isTop ? "border-[hsl(42_38%_28%/0.45)]" : "border-[hsl(128_18%_14%)]"}`}>
                      <div className={`text-[30px] font-display font-bold leading-none ${isTop ? "text-[hsl(42_68%_58%)]" : "text-[hsl(42_58%_52%)]"}`}>
                        {site.score.toFixed(1)}
                      </div>
                      <StarRating score={site.score} />
                      <RatingBar score={site.score} />
                      <div className="text-[9px] font-sans text-[hsl(100_8%_45%)]">
                        {site.reviews.toLocaleString()} reviews
                      </div>
                    </div>

                    {/* CTA */}
                    <div className={`col-span-3 flex flex-col items-center justify-center border-l pl-4 pr-4 py-4 gap-2 ${isTop ? "border-[hsl(42_38%_28%/0.45)]" : "border-[hsl(128_18%_14%)]"}`}>
                      <div
                        className={`w-full py-3.5 text-center text-[13px] font-sans font-bold tracking-wide rounded-[2px] border transition-all duration-200 ${isTop
                          ? "bg-[hsl(42_65%_46%)] hover:bg-[hsl(42_68%_42%)] text-[hsl(128_30%_6%)] border-[hsl(42_68%_52%)] shadow-[0_3px_16px_hsl(42_50%_22%/0.45),inset_0_1px_0_hsl(42_80%_68%/0.25)] group-hover:shadow-[0_4px_20px_hsl(42_50%_22%/0.55)]"
                          : "bg-[hsl(128_35%_20%)] hover:bg-[hsl(128_35%_24%)] text-ivory border-[hsl(128_28%_26%)] shadow-[0_2px_10px_hsl(128_40%_4%/0.3)]"
                          }`}
                      >
                        Claim Offer
                      </div>
                      <span className="text-[10px] font-sans text-center text-[hsl(100_8%_44%)]">
                        18+ &middot; T&amp;Cs Apply
                      </span>
                    </div>
                  </div>

                  {/* MOBILE layout */}
                  <div className="md:hidden p-3 pt-4">
                    <div className="flex gap-2.5 mb-3 items-center">
                      {/* Medal */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-[2px] font-display font-bold text-sm flex items-center justify-center border ${medal
                          ? `${medal.bg} ${medal.text} ${medal.border}`
                          : "bg-[hsl(128_22%_13%)] text-ivory-muted border-[hsl(128_18%_20%)]"
                          }`}
                      >
                        {rank}
                      </div>
                      {/* Logo */}
                      <div className="w-[42%] bg-white rounded-[2px] border border-[hsl(0_0%_88%)] p-2 flex items-center justify-center min-h-[4.5rem] shadow-inner">
                        <Image
                          src={site.logo || "/placeholder.svg"}
                          alt={site.name}
                          width={120}
                          height={48}
                          className="object-contain max-h-14 w-full"
                        />
                      </div>
                      {/* Offer text */}
                      <div className="flex-1 flex flex-col items-center justify-center text-center">
                        <div className="text-[8px] font-sans font-bold uppercase tracking-wider mb-1 text-[hsl(100_8%_42%)]">
                          Offer
                        </div>
                        <div className="font-display font-semibold text-[18px] leading-tight text-ivory">
                          {site.bonus}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 items-center">
                      <div className="flex flex-col gap-1">
                        <div className={`text-[22px] font-display font-bold leading-none ${isTop ? "text-[hsl(42_68%_58%)]" : "text-[hsl(42_58%_52%)]"}`}>
                          {site.score.toFixed(1)}
                        </div>
                        <StarRating score={site.score} />
                        <RatingBar score={site.score} />
                        <span className="text-[9px] font-sans text-[hsl(100_8%_45%)]">{site.reviews.toLocaleString()} reviews</span>
                      </div>
                      <div className="flex flex-col items-center gap-1.5">
                        <div
                          className={`w-full py-3 text-center text-[11px] font-sans font-bold tracking-wide rounded-[2px] border ${isTop
                            ? "bg-[hsl(42_65%_46%)] text-[hsl(128_30%_6%)] border-[hsl(42_68%_52%)] shadow-[0_2px_12px_hsl(42_50%_20%/0.4)]"
                            : "bg-[hsl(128_35%_20%)] text-ivory border-[hsl(128_28%_26%)]"
                            }`}
                        >
                          Claim Offer
                        </div>
                        <span className="text-[9px] font-sans text-center text-[hsl(100_8%_44%)]">
                          18+ &middot; T&amp;Cs Apply
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        {/* Footer note */}
        <div className="mt-8 max-w-[1250px] mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[hsl(42_38%_24%/0.45)]" />
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.22em] text-[hsl(100_8%_40%)]">
              Responsible Gambling
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[hsl(42_38%_24%/0.45)]" />
          </div>
          <p className="text-[11px] font-sans text-center text-[hsl(100_8%_45%)] leading-relaxed max-w-2xl mx-auto">
            All operators listed hold a current UK Gambling Commission licence. Gambling may be harmful — please play responsibly. BeGambleAware.org &middot; 18+ only
          </p>
        </div>
      </div>
    </section>
  )
}
