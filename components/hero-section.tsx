"use client"

import Image from "next/image"
import { Shield, BadgeCheck, FileText, Crown } from "lucide-react"
import { LiveUkDate } from "@/components/live-uk-date"

const trustLine = [
  { icon: Crown, text: "Britain's Finest Selection" },
  { icon: Shield, text: "UKGC Licensed" },
  { icon: BadgeCheck, text: "Independently Verified" },
  { icon: FileText, text: "Editorial Standards" },
] as const

type HeroSectionProps = {
  onAdvertiserClick: () => void
}

export function HeroSection({ onAdvertiserClick }: HeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden border-b border-[hsl(42_38%_26%/0.4)]">
      {/* Base dark green */}
      <div className="absolute inset-0 z-0 bg-[hsl(128_34%_6%)]" aria-hidden />

      {/* Background photo */}
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/hero-casino.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Dark green/navy tint overlay */}
      <div
        className="absolute inset-0 z-[2] mix-blend-multiply"
        style={{
          background:
            "linear-gradient(155deg, hsl(128 45% 8% / 0.85) 0%, hsl(218 55% 10% / 0.72) 50%, hsl(128 40% 6% / 0.92) 100%)",
        }}
        aria-hidden
      />
      {/* Top-to-bottom darkening */}
      <div
        className="absolute inset-0 z-[3] bg-gradient-to-b from-black/55 via-black/35 to-black/80"
        aria-hidden
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 z-[4] bg-gradient-to-r from-black/40 via-transparent to-black/40"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-[210px] sm:min-h-[260px] md:min-h-[310px] px-4 py-8 sm:py-10 md:py-12">
        <div className="mx-auto w-full max-w-[900px] flex flex-col items-center">


          {/* Main headline */}
          <h1
            className="text-center font-display text-xl sm:text-4xl md:text-5xl font-bold leading-[1.12] tracking-[-0.01em] text-[hsl(38_38%_94%)] text-balance"
            style={{ textShadow: "0 2px 24px hsl(128 40% 3% / 0.95), 0 0 60px hsl(128 40% 3% / 0.6)" }}
          >
            The United Kingdom&apos;s{" "}
            <span className="block sm:inline font-normal italic text-[hsl(42_68%_62%)]">
              Premier Casino Guide
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-3 sm:mt-4 max-w-[560px] text-center font-sans text-[9px] sm:text-[12px] leading-relaxed text-[hsl(100_10%_78%)]">
            Every operator vetted against UK Gambling Commission standards. Offers decoded clearly — no small print hidden, no hyperbole.
          </p>

          {/* Trust indicators */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5">
            {trustLine.map(({ icon: Icon, text }, i) => (
              <span key={text} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span className="text-[hsl(42_38%_38%)] text-[10px]" aria-hidden>
                    ·
                  </span>
                )}
                <Icon
                  className="h-[11px] w-[11px] sm:h-[12px] sm:w-[12px] shrink-0 text-[hsl(42_62%_55%)]"
                  strokeWidth={2.2}
                  aria-hidden
                />
                <span className="text-[9px] sm:text-[11px] font-sans font-semibold tracking-wide text-[hsl(100_12%_80%)]">
                  {text}
                </span>
              </span>
            ))}
          </div>

          {/* Update date */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-[8px] sm:text-[10px] font-sans font-bold uppercase tracking-widest text-[hsl(100_8%_58%)]">
              Rankings updated
            </span>
            <span className="text-[hsl(42_35%_38%)]" aria-hidden>·</span>
            <LiveUkDate
              variant="short"
              className="font-sans text-[9px] sm:text-[11px] font-bold tabular-nums text-[hsl(42_60%]"
            />
          </div>

          {/* Disclosure bar */}
          <div className="mt-4 pt-2.5 border-t border-[hsl(42_30%_28%/0.35)] w-full flex items-center justify-center gap-1.5 flex-wrap">
            <span className="px-1.5 py-0.5 bg-[hsl(42_58%_48%)] text-[hsl(128_30%_6%)] text-[8px] sm:text-[10px] font-sans font-bold rounded-[2px]">
              18+
            </span>
            <span className="text-[hsl(100_8%_55%)] text-[8px] sm:text-[10px]">·</span>
            <a
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[8px] sm:text-[10px] font-sans font-semibold text-[hsl(42_58%]  hover:text-[hsl(42_68%_68%)] underline-offset-2 hover:underline transition-colors"
            >
              BeGambleAware.org
            </a>
            <span className="text-[hsl(100_8%_55%)] text-[8px] sm:text-[10px]">·</span>
            <button
              type="button"
              onClick={onAdvertiserClick}
              className="text-[8px] sm:text-[10px] font-sans font-semibold text-[hsl(42_55%_55%)] hover:text-[hsl(42_65%_65%)] underline-offset-2 hover:underline transition-colors"
            >
              Advertiser Disclosure
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(42_58%_42%/0.6)] to-transparent" aria-hidden />
    </section>
  )
}
