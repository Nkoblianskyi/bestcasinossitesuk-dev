"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(128_40%_3%/0.82)] animate-fade-in p-4">
      <div className="relative w-full max-w-md rounded-[3px] border border-[hsl(42_48%_36%/0.4)] bg-[hsl(128_32%_8%)] shadow-[0_24px_60px_hsl(128_40%_3%/0.75)] p-6 animate-scale-in">

        {/* Top gold rule */}
        <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[3px] bg-gradient-to-r from-transparent via-[hsl(42_62%_48%/0.75)] to-transparent" />

        <div className="flex items-center justify-between mb-5 border-b border-[hsl(128_20%_15%)] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-[hsl(128_28%_11%)] p-2 rounded-[2px] border border-[hsl(42_42%_30%/0.35)]">
              <Info className="h-5 w-5 text-gold" aria-hidden />
            </div>
            <h2 className="font-display text-[18px] font-semibold text-ivory">Advertiser Disclosure</h2>
          </div>
          <button
            onClick={onClose}
            className="text-ivory-muted hover:text-gold transition-colors duration-200 p-1 rounded-[2px]"
            aria-label="Close"
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-3.5 leading-relaxed">
          <p className="font-sans text-[13px] text-ivory-muted">
            bestcasinossitesuk.com is a free comparison resource for adults in Great Britain. We may receive commission from operators when you register or play through our outbound links.
          </p>
          <p className="font-sans text-[13px] text-ivory-muted">
            Commercial arrangements can influence the order in which brands appear; however, our editorial scores are determined independently, and any advertising relationship is disclosed clearly.
          </p>
          <p className="font-sans text-[13px] text-ivory-muted">
            We strive to keep offer details accurate, but operators update terms frequently. Always verify the full conditions on the casino&apos;s own website before registering or depositing.
          </p>
          <p className="font-sans text-[13px] text-ivory-muted">
            Nothing on this site constitutes financial, legal, or gambling advice. For independent help, visit{" "}
            <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-[hsl(42_70%_65%)] transition-colors">
              BeGambleAware.org
            </a>
            .
          </p>
        </div>

        <div className="mt-6 flex justify-end border-t border-[hsl(128_20%_15%)] pt-4">
          <Button
            onClick={onClose}
            className="bg-[hsl(42_65%_46%)] hover:bg-[hsl(42_65%_42%)] text-[hsl(128_30%_6%)] font-sans font-bold px-6 rounded-[2px] border border-[hsl(42_68%_52%)] shadow-[0_2px_12px_hsl(42_50%_20%/0.35)]"
            type="button"
          >
            Understood
          </Button>
        </div>
      </div>
    </div>
  )
}
