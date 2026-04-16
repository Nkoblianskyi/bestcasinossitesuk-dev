import Link from "next/link"
import Image from "next/image"
import { Info, AlertTriangle, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-[hsl(42_35%_22%/0.4)] bg-gradient-to-b from-[hsl(128_32%_7%)] to-[hsl(128_30%_5%)] text-ivory">
      {/* Top gold rule */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[hsl(42_62%_48%/0.55)] to-transparent" />

      <div className="mx-auto max-w-[1250px] px-5 pt-10 pb-6">
        {/* Brand + nav row */}
        <div className="flex flex-col gap-10 border-b border-[hsl(128_22%_16%)] pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm space-y-3">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 rounded-[2px] items-center justify-center overflow-hidden border border-[hsl(42_48%_38%/0.45)] bg-[hsl(128_28%_11%)] shadow-[0_2px_10px_hsl(128_40%_3%/0.4)] transition-all duration-300 group-hover:border-[hsl(42_58%_44%/0.65)]">
                <Image src="/favicon.ico" alt="" width={36} height={36} className="object-contain" />
              </div>
              <div>
                <span className="block font-display text-[17px] font-semibold leading-tight text-ivory transition-colors group-hover:text-gold">
                  BestCasinoSitesUK
                </span>
                <span className="font-sans text-[10px] tracking-[0.15em] text-gold-muted">bestcasinossitesuk.com</span>
              </div>
            </Link>
            <p className="font-sans text-[13px] leading-relaxed text-ivory-muted">
              Independent rankings of UK-licensed casino brands — bonuses, game ranges, and responsible gambling tools presented without bias.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-10">
            {[
              { href: "/", label: "Rankings" },
              { href: "/about-us", label: "About" },
              { href: "/privacy-policy", label: "Privacy" },
              { href: "/cookie-policy", label: "Cookies" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-[13px] font-medium text-ivory-muted hover:text-gold transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Info cards */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-[3px] border border-[hsl(128_22%_16%)] bg-[hsl(128_28%_9%)] p-5">
            <div className="mb-3 flex items-center gap-2 text-gold">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em]">Operator</span>
            </div>
            <p className="font-display text-[15px] font-semibold text-ivory">SHOPCANARY s.r.o.</p>
            <p className="mt-1 font-sans text-[13px] text-ivory-muted leading-relaxed">
              Lidická 700/19, Veveří<br />
              602 00 Brno<br />
              Czech Republic
            </p>
          </div>

          <div className="rounded-[3px] border-2 border-[hsl(0_35%_25%/0.45)] bg-[hsl(0_22%_9%/0.5)] p-5">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-[2px] bg-[hsl(42_58%_48%)] px-2 py-0.5 font-sans text-[10px] font-bold text-[hsl(128_30%_6%)]">18+</span>
              <span className="font-display text-[14px] font-semibold text-ivory">Responsible Gambling</span>
            </div>
            <p className="font-sans text-[12px] leading-relaxed text-ivory-muted">
              For adults in Great Britain only. Set limits, take breaks, and self-exclude via GAMSTOP if needed. Help is always available at BeGambleAware.org.
            </p>
          </div>
        </div>

        {/* Logos row */}
        <div className="mt-8 rounded-[3px] border border-[hsl(128_20%_14%)] bg-[hsl(128_28%_7%)] px-5 py-6">
          <p className="mb-5 text-center font-sans text-[9px] font-semibold uppercase tracking-[0.24em] text-[hsl(100_8%_44%)]">
            Regulation &amp; Support
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { href: "https://www.gambleaware.org/",          src: "/gamble-aware.png",              alt: "BeGambleAware" },
              { href: "https://www.gamcare.org.uk/",           src: "/gamcare.png",                   alt: "GamCare" },
              { href: "https://gordonmoody.org.uk/",           src: "/GORDON_MOODY-logo.svg",         alt: "Gordon Moody" },
              { href: "https://www.gamstop.co.uk/",            src: "/gamstop.svg",                   alt: "GAMSTOP" },
              { href: "https://www.gamblingcommission.gov.uk/", src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission" },
            ].map(({ href, src, alt }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity duration-200"
              >
                <Image src={src} alt={alt} width={100} height={35} />
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-7 flex gap-3 rounded-[3px] bg-[hsl(128_28%_6%)] p-4 text-[11px] leading-relaxed text-ivory-muted border border-[hsl(128_18%_12%)]">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-muted" aria-hidden />
          <p className="font-sans">
            bestcasinossitesuk.com is an independent information resource. We may receive commission if you register through our links — this never affects our editorial assessments. You must be aged 18 or over and located in the United Kingdom. Gambling carries risk; never stake more than you can comfortably afford to lose. All listed operators hold a current UKGC licence. If gambling is causing harm, seek immediate support.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(128_18%_11%)] bg-[hsl(128_28%_5%)] py-4">
        <div className="mx-auto flex max-w-[1250px] flex-col items-center justify-between gap-3 px-5 sm:flex-row">
          <p className="font-sans text-center text-[11px] text-[hsl(100_8%_42%)] sm:text-left">
            &copy; {new Date().getFullYear()} bestcasinossitesuk.com &middot; All rights reserved
          </p>
          <div className="flex items-center gap-2 text-[hsl(100_8%_42%)]">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-gold-muted" aria-hidden />
            <span className="font-sans text-[11px]">Gambling can be harmful. Play within your means.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
