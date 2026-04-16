import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LiveUkDate } from "@/components/live-uk-date"

export const metadata = {
  title: "Cookie Policy | BestCasinoSitesUK",
  description: "How bestcasinossitesuk.com uses cookies and how you can manage them.",
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <SiteHeader />

      <section className="pt-28 pb-12 flex-grow">
        <div className="mx-auto max-w-[1250px] px-4">
          <div className="rounded-[4px] border border-[hsl(128_22%_16%)] bg-[hsl(128_28%_9%)] shadow-[0_16px_48px_-12px_hsl(128_40%_3%/0.5)] p-8 md:p-10">

            {/* Top gold rule */}
            <div className="h-[2px] w-16 bg-gradient-to-r from-[hsl(42_58%_44%/0.8)] to-transparent mb-6" />

            <h1 className="font-display text-3xl md:text-4xl font-bold mb-8 text-ivory border-b border-[hsl(128_20%_15%)] pb-5">
              Cookie Policy
            </h1>

            <div className="space-y-6 text-ivory-muted">
              <p className="font-sans text-[12px]">
                Last updated:{" "}
                <LiveUkDate variant="short" className="font-semibold text-gold" />
              </p>

              <p className="font-sans text-[14px] leading-relaxed">
                This Cookie Policy explains how <strong className="text-ivory">bestcasinossitesuk.com</strong> uses cookies and similar tracking technologies when you visit our site. The site is operated by{" "}
                <strong className="text-ivory">SHOPCANARY s.r.o.</strong>, Lidická 700/19, Veveří, 602 00 Brno, Czech Republic.
              </p>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">1. What are cookies?</h2>
              <p className="font-sans text-[14px] leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They enable the site to function correctly, remember your preferences across sessions, and provide insights into how visitors engage with content.
              </p>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">2. Types of cookies we use</h2>
              <ul className="space-y-3 list-none pl-0">
                {[
                  {
                    title: "Strictly Necessary",
                    body: "Required for core site functions such as cookie consent management and session security. These cannot be disabled through our banner without impairing how the site operates.",
                  },
                  {
                    title: "Analytics",
                    body: "Allow us to measure which pages attract the most visits and identify content that may need improvement. Where required by law, we request your consent before activating analytics cookies.",
                  },
                  {
                    title: "Marketing & Affiliate",
                    body: "Third-party partners may set cookies when you follow outbound links so that referrals can be attributed correctly. Those partners operate under their own privacy notices.",
                  },
                ].map(({ title, body }) => (
                  <li key={title} className="flex items-start gap-3 font-sans text-[14px] leading-relaxed">
                    <span className="text-gold font-bold shrink-0 mt-0.5">&#10003;</span>
                    <div>
                      <strong className="text-ivory">{title}</strong> — {body}
                    </div>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">3. Managing your cookie preferences</h2>
              <p className="font-sans text-[14px] leading-relaxed">
                You may accept or decline non-essential cookies via the consent banner displayed on your first visit. You can also block or delete cookies at any time through your browser settings. Disabling certain cookies may affect the functionality of pages on this site.
              </p>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">4. Policy updates</h2>
              <p className="font-sans text-[14px] leading-relaxed">
                We review this policy periodically and update it when our technology or legal obligations change. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
              </p>

              <h2 className="font-display text-xl font-semibold text-gold mt-8">5. Contact</h2>
              <p className="font-sans text-[14px] leading-relaxed">
                For questions about our use of cookies, please email{" "}
                <a href="mailto:cookies@bestcasinossitesuk.com" className="text-gold font-semibold underline hover:text-[hsl(42_70%_65%)] transition-colors">
                  cookies@bestcasinossitesuk.com
                </a>{" "}
                or write to SHOPCANARY s.r.o. at the address above.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
