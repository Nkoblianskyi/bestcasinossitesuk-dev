"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"
import { Cookie } from "lucide-react"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[hsl(128_34%_6%/0.97)] text-ivory shadow-[0_-8px_40px_hsl(128_40%_3%/0.7)] border-t-2 border-[hsl(42_55%_40%/0.5)] animate-slide-up backdrop-blur-sm">
      {/* Top gold rule */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[hsl(42_62%_48%/0.5)] to-transparent" />

      <div className="mx-auto max-w-[1250px] px-5 py-5">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 flex items-start gap-3">
            <Cookie className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" aria-hidden />
            <div>
              <h3 className="font-display text-[15px] font-semibold mb-1.5 text-ivory">
                Cookies on bestcasinossitesuk.com
              </h3>
              <p className="font-sans text-[12px] text-ivory-muted leading-relaxed">
                We use cookies to operate the site, remember your choices, and — where you agree — measure how our content performs. Selecting &ldquo;Accept All&rdquo; means you consent as described in our{" "}
                <a
                  href="/cookie-policy"
                  className="text-gold underline font-medium hover:text-[hsl(42_72%_66%)] transition-colors"
                >
                  Cookie Policy
                </a>
                . You may adjust preferences at any time through your browser.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto shrink-0">
            <Button
              variant="outline"
              className="border border-[hsl(42_40%_30%/0.55)] text-ivory hover:bg-[hsl(128_28%_11%)] hover:text-ivory hover:border-[hsl(42_48%_36%/0.65)] transition-all duration-300 bg-transparent font-sans font-semibold rounded-[2px] text-[12px] tracking-wide"
              onClick={declineAll}
            >
              Decline
            </Button>
            <Button
              className="bg-[hsl(42_65%_46%)] hover:bg-[hsl(42_65%_42%)] text-[hsl(128_30%_6%)] transition-all duration-300 border border-[hsl(42_68%_52%)] font-sans font-bold rounded-[2px] text-[12px] tracking-wide shadow-[0_2px_14px_hsl(42_50%_22%/0.4)]"
              onClick={acceptAll}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
