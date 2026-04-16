"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Star } from "lucide-react"
import { bettingSites } from "@/data/betting-sites"

export function TopOffersModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [topSite] = useState(bettingSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [mounted])

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(128_40%_3%/0.88)] backdrop-blur-sm animate-fade-in p-3">
      <div className="relative w-full max-w-sm rounded-[4px] shadow-[0_24px_60px_hsl(128_40%_3%/0.8),0_0_0_1px_hsl(42_50%_38%/0.35)] overflow-hidden animate-scale-in border border-[hsl(42_50%_40%/0.4)] bg-[hsl(128_32%_8%)]">

        {/* Top gold rule */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[hsl(42_65%_50%/0.8)] to-transparent" />

        {/* Header */}
        <div className="bg-[hsl(128_30%_9%)] text-ivory py-3 px-4 flex items-center justify-between border-b border-[hsl(42_40%_28%/0.35)]">
          <div className="flex items-center gap-2">

            <h2 className="font-display text-[15px] font-semibold text-ivory">
              Editor&apos;s Top Pick
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-ivory-muted hover:text-gold transition-colors duration-200 p-1.5 rounded-[2px] border border-[hsl(128_18%_20%)] hover:border-[hsl(42_42%_32%/0.5)]"
            aria-label="Close"
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <Link
            href={topSite.link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block rounded-[3px] border border-[hsl(42_48%_36%/0.45)] bg-[hsl(128_28%_10%)] hover:border-[hsl(42_58%_44%/0.6)] transition-all duration-300 hover:shadow-[0_8px_28px_hsl(128_40%_3%/0.5)] group"
          >
            <div className="p-5 flex flex-col items-center text-center">
              {/* Logo */}
              <div className="bg-white rounded-[2px] border border-[hsl(0_0%_88%)] p-4 mb-4 flex items-center justify-center w-56 h-28 shadow-inner">
                <Image
                  src={topSite.logo || "/placeholder.svg"}
                  alt={topSite.name}
                  width={200}
                  height={80}
                  className="object-contain max-h-full max-w-full"
                />
              </div>

              {/* Stars + score */}
              <div className="flex items-center justify-center gap-1.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[hsl(42_65%_55%)]" fill="currentColor" />
                ))}
                <span className="font-display font-bold text-[18px] text-ivory ml-1">{topSite.score.toFixed(1)}</span>
              </div>

              {/* Offer */}
              <div className="mb-1 px-2.5 py-1 bg-[hsl(128_25%_13%)] border border-[hsl(128_20%_18%)] rounded-[2px]">
                <span className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-gold-muted">Welcome Offer</span>
              </div>
              <h3 className="font-display text-[17px] font-semibold text-ivory mt-2 mb-5 leading-snug">
                {topSite.bonus}
              </h3>

              {/* CTA */}
              <div className="w-full py-3.5 bg-[hsl(42_65%_46%)] hover:bg-[hsl(42_65%_42%)] text-[hsl(128_30%_6%)] font-sans font-bold text-[13px] tracking-wide rounded-[2px] border border-[hsl(42_68%_52%)] shadow-[0_3px_16px_hsl(42_50%_22%/0.4)] group-hover:shadow-[0_4px_20px_hsl(42_50%_22%/0.5)] transition-all duration-200">
                Claim Offer Now
              </div>
              <p className="mt-3 text-[11px] font-sans text-[hsl(100_8%_48%)]">
                18+. T&amp;Cs apply. Play responsibly.
              </p>
            </div>
          </Link>
        </div>

        {/* Bottom rule */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[hsl(42_58%_44%/0.5)] to-transparent" />
      </div>
    </div>
  )
}
