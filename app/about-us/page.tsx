import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata = {
  title: "About Us | BestCasinoSitesUK",
  description: "Who we are, how bestcasinossitesuk.com evaluates UK casino operators, and how the site is funded.",
}

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <SiteHeader />

      <section className="pt-28 pb-12 flex-grow">
        <div className="mx-auto max-w-[1250px] px-4">
          <div className="rounded-[4px] border border-[hsl(128_22%_16%)] bg-[hsl(128_28%_9%)] shadow-[0_16px_48px_-12px_hsl(128_40%_3%/0.5)] p-8 md:p-10">

            {/* Top gold rule */}
            <div className="h-[2px] w-16 bg-gradient-to-r from-[hsl(42_58%_44%/0.8)] to-transparent mb-6" />

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-8 text-ivory border-b border-[hsl(128_20%_15%)] pb-5">
              About BestCasinoSitesUK
            </h1>

            <div className="space-y-8 text-ivory-muted">

              <div>
                <h2 className="font-display text-xl font-semibold text-gold mb-3">What we do</h2>
                <p className="font-sans text-[14px] leading-relaxed">
                  bestcasinossitesuk.com provides adults in Great Britain with authoritative, independent comparisons of licensed online casino operators. Our focus is clarity and rigour: explaining precisely what a welcome package requires, how a lobby performs on a smartphone, and whether support and payments hold up under real conditions — not just on launch day.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-gold mb-3">Our review methodology</h2>
                <p className="font-sans text-[14px] leading-relaxed">
                  Each brand is evaluated against a consistent seven-point framework: UK Gambling Commission licence validity, security and data protection, game range and software quality, mobile experience, welcome package transparency, payment options and withdrawal speed, and the depth of responsible gambling tools on offer. Editorial scores reflect that work independently of commercial arrangements.
                </p>
                <p className="font-sans text-[14px] leading-relaxed mt-3">
                  Offers, games, and operator standards change frequently. We refresh our rankings on a regular cycle, but we always encourage readers to verify current terms directly on an operator&apos;s own site before registering or depositing.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-gold mb-3">Who operates this site</h2>
                <p className="font-sans text-[14px] leading-relaxed">
                  This website is published on behalf of{" "}
                  <strong className="text-ivory">SHOPCANARY s.r.o.</strong>, Lidická 700/19, Veveří, 602 00 Brno, Czech Republic. For privacy-related enquiries, please refer to the contact information in our Privacy Policy.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-gold mb-3">Funding and editorial independence</h2>
                <p className="font-sans text-[14px] leading-relaxed">
                  Access to bestcasinossitesuk.com is free of charge for all readers. We may receive affiliate commission when a reader registers with an operator through one of our links. Those commercial relationships help sustain the cost of research, writing, and site maintenance. They do not, however, determine our scores or editorial conclusions — a brand that underperforms is penalised in our rankings regardless of its commercial value to us.
                </p>
              </div>

              <div>
                <h2 className="font-display text-xl font-semibold text-gold mb-3">Responsible gambling commitment</h2>
                <p className="font-sans text-[14px] leading-relaxed">
                  We take our responsibility to promote safer gambling seriously. Responsible gambling guidance, links to support organisations, and information on self-exclusion tools appear throughout the site. We encourage all readers to set personal limits, take regular breaks, and make use of GAMSTOP if they wish to self-exclude from all UK-licensed platforms simultaneously. If gambling is affecting your wellbeing or relationships, please contact BeGambleAware or GamCare without delay.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
