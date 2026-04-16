import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LiveUkDate } from "@/components/live-uk-date"

export const metadata = {
  title: "Privacy Policy | BestCasinoSitesUK",
  description: "How bestcasinossitesuk.com collects, uses, and protects personal data in line with UK GDPR.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <SiteHeader />

      <section className="pt-28 pb-12 flex-grow">
        <div className="mx-auto max-w-[1250px] px-4">
          <div className="rounded-[4px] border border-[hsl(128_22%_16%)] bg-[hsl(128_28%_9%)] shadow-[0_16px_48px_-12px_hsl(128_40%_3%/0.5)] p-8 md:p-10">

            {/* Top gold rule */}
            <div className="h-[2px] w-16 bg-gradient-to-r from-[hsl(42_58%_44%/0.8)] to-transparent mb-6" />

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-8 text-ivory border-b border-[hsl(128_20%_15%)] pb-5">
              Privacy Policy
            </h1>

            <div className="space-y-6 text-ivory-muted">
              <p className="font-sans text-[12px]">
                Last updated:{" "}
                <LiveUkDate variant="short" className="font-semibold text-gold" />
              </p>

              <p className="font-sans text-[14px] leading-relaxed">
                This Privacy Policy sets out how <strong className="text-ivory">bestcasinossitesuk.com</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) processes personal data when you use our website. The site is operated by{" "}
                <strong className="text-ivory">SHOPCANARY s.r.o.</strong>, Lidická 700/19, Veveří, 602 00 Brno, Czech Republic. We process personal data in accordance with applicable law, including the UK GDPR and the Data Protection Act 2018 as they apply to visitors from Great Britain.
              </p>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">1. Data we collect</h2>
              <p className="font-sans text-[14px] leading-relaxed">Depending on how you interact with this site, we may process the following categories of data:</p>
              <ul className="space-y-3 list-none pl-0">
                {[
                  { title: "Contact details", body: "If you email us, we retain your address and message content in order to respond." },
                  { title: "Technical & usage data", body: "IP address, browser type, approximate location, pages visited, and referral source — collected through server logs, cookies, and equivalent technologies (see our Cookie Policy)." },
                  { title: "Affiliate identifiers", body: "When you follow an outbound link to an operator, tracking cookies may record that you arrived from bestcasinossitesuk.com so that referral commissions can be attributed." },
                ].map(({ title, body }) => (
                  <li key={title} className="flex items-start gap-3 font-sans text-[14px] leading-relaxed">
                    <span className="text-gold font-bold shrink-0 mt-0.5">&#10003;</span>
                    <div><strong className="text-ivory">{title}</strong> — {body}</div>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">2. Purposes and legal bases</h2>
              <p className="font-sans text-[14px] leading-relaxed">We use personal data to:</p>
              <ul className="space-y-2 list-none pl-0">
                {[
                  "Deliver, secure, and improve the website (legitimate interests or contract, as applicable).",
                  "Measure audience engagement and refine editorial content (consent or legitimate interests, depending on the tool used).",
                  "Comply with applicable law and respond to lawful requests from regulatory authorities.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-[14px] leading-relaxed">
                    <span className="text-gold font-bold shrink-0 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">3. Sharing personal data</h2>
              <p className="font-sans text-[14px] leading-relaxed">
                We engage trusted service providers (hosting, analytics, security) under appropriate data processing agreements. We do not sell personal data. Where affiliate networks are involved, those partners act under their own published privacy policies once you navigate to their platforms.
              </p>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">4. Retention</h2>
              <p className="font-sans text-[14px] leading-relaxed">
                Personal data is retained only for as long as is necessary for the purpose for which it was collected, after which it is securely deleted or anonymised — unless a longer retention period is required by law.
              </p>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">5. Your rights</h2>
              <p className="font-sans text-[14px] leading-relaxed">
                Subject to applicable law, you may have the right to access, rectify, erase, restrict, or object to the processing of your personal data, and to data portability. You also have the right to lodge a complaint with a supervisory authority — in the UK, that is the Information Commissioner&apos;s Office (ico.org.uk).
              </p>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">6. International transfers</h2>
              <p className="font-sans text-[14px] leading-relaxed">
                Where personal data is transferred outside the UK or EEA, we rely on appropriate safeguards such as adequacy decisions or standard contractual clauses, as required by applicable law.
              </p>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">7. Contact & complaints</h2>
              <p className="font-sans text-[14px] leading-relaxed">
                To exercise your rights or raise a privacy concern, email{" "}
                <a href="mailto:privacy@bestcasinossitesuk.com" className="text-gold font-semibold underline hover:text-[hsl(42_70%_65%)] transition-colors">
                  privacy@bestcasinossitesuk.com
                </a>{" "}
                or write to: SHOPCANARY s.r.o., Lidická 700/19, Veveří, 602 00 Brno, Czech Republic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
