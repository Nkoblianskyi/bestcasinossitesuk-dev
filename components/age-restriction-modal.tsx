"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Gem, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/data/betting-sites"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
  const [mounted, setMounted] = useState(false)
  const featured = bettingSites[0]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(258_40%_4%_/_0.88)] p-4">
      <div className="relative w-full max-w-md rounded-xl overflow-hidden border-2 border-[hsl(43_48%_52%_/_0.45)] shadow-2xl bg-[hsl(260_22%_10%)]">
        <div className="bg-[hsl(355_24%_16%)] text-champagne px-6 py-3 flex items-center justify-between border-b border-[hsl(43_48%_52%_/_0.35)]">
          <div className="flex items-center gap-3">
            <Gem className="h-5 w-5 text-[hsl(43_48%_58%)]" aria-hidden />
            <h2 className="font-display text-base font-semibold uppercase tracking-widest">Featured casino</h2>
          </div>
          <button
            onClick={onClose}
            className="text-champagne hover:text-[hsl(43_48%_58%)] transition-colors"
            aria-label="Close modal"
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative bg-[hsl(258_26%_9%)] p-6">
          <div className="absolute -top-1 right-4 bg-[hsl(43_48%_52%)] text-[hsl(258_30%_8%)] px-4 py-1 text-xs font-display font-bold uppercase tracking-[0.15em] shadow-md border border-[hsl(43_48%_52%)]">
            Top pick
          </div>

          <div className="flex justify-center mb-4 pt-4">
            <div className="bg-[hsl(260_22%_11%)] p-4 border border-[hsl(258_16%_22%)] rounded-sm">
              <Image
                src={featured.logo}
                alt={featured.name}
                width={160}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mb-3 bg-[hsl(260_22%_11%)] border border-[hsl(258_16%_20%)] py-2 rounded-sm">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-5 w-5 fill-[hsl(43_48%_52%)] text-[hsl(43_48%_52%)]" />
              ))}
            </div>
            <span className="text-2xl font-bold text-champagne">{featured.score.toFixed(1)}</span>
          </div>

          <div className="flex justify-center mb-3">
            <span className="inline-block bg-[hsl(355_26%_20%)] text-champagne px-4 py-1 text-xs font-display font-semibold uppercase tracking-widest border border-[hsl(43_48%_52%_/_0.35)] rounded-sm">
              Casino offer
            </span>
          </div>

          <div className="text-center mb-4 bg-[hsl(260_22%_11%)] border-l-2 border-r-2 border-[hsl(43_48%_52%_/_0.35)] py-3 rounded-sm">
            <p className="font-display text-lg font-semibold text-champagne tracking-wide">{featured.bonus}</p>
          </div>

          <Link href={featured.link} target="_blank" rel="noopener noreferrer sponsored" className="block">
            <Button className="w-full bg-[hsl(43_48%_52%)] hover:bg-[hsl(43_48%_48%)] text-[hsl(258_30%_8%)] font-bold py-5 text-sm uppercase tracking-wider border-2 border-[hsl(43_48%_52%)] shadow-lg transition-all hover:shadow-xl rounded-sm">
              Claim offer
            </Button>
          </Link>

          <p className="text-center text-xs text-[hsl(43_15%_60%)] mt-3 font-medium uppercase tracking-wider">
            18+ · T&amp;Cs apply · BeGambleAware.org
          </p>
        </div>

        <div className="h-1 bg-gradient-to-r from-[hsl(355_28%_22%)] via-[hsl(43_48%_52%)] to-[hsl(355_28%_22%)]" />
      </div>
    </div>
  )
}
