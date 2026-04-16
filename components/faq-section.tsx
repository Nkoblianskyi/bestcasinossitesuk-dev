"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    id: "faq-1",
    question: "How does bestcasinossitesuk.com select and rank casino operators?",
    answer:
      "Each operator is assessed against a fixed editorial framework covering seven dimensions: UK Gambling Commission licence validity, security infrastructure, welcome package transparency, breadth of games, quality of mobile experience, payment options, and the responsiveness of customer support. Only brands that meet our minimum threshold across all categories are included in the rankings.",
  },
  {
    id: "faq-2",
    question: "Are all listed casinos fully legal in the United Kingdom?",
    answer:
      "Yes. Every brand featured on this site holds a current licence issued by the UK Gambling Commission, the statutory body responsible for regulating commercial gambling in Great Britain. A UKGC licence obliges operators to meet rigorous standards on fairness, customer fund protection, and problem-gambling safeguards. Unlicensed sites are never listed.",
  },
  {
    id: "faq-3",
    question: "What types of welcome offers do UK casino sites typically provide?",
    answer:
      "Common sign-up incentives include matched deposits (the operator adds funds proportional to your initial deposit), free spins on designated slot titles, and combinations of both. Wagering requirements, eligible games, time limits, and minimum stake rules all vary considerably between brands. We summarise the headline deal; reading the full terms on the operator's own site remains essential before you play.",
  },
  {
    id: "faq-4",
    question: "What steps are involved in claiming a casino welcome offer?",
    answer:
      "The typical process involves creating a new account, completing identity verification (required by UKGC licensees), opting in if the offer requires it, and making a qualifying deposit or placing a qualifying stake on eligible games. Certain promotions require a promo code at registration. Confirm minimum stake amounts, game contributions to wagering, and expiry dates before proceeding.",
  },
  {
    id: "faq-5",
    question: "Which payment methods do UK-licensed casinos accept?",
    answer:
      "Most operators accept debit cards (Visa, Mastercard), PayPal, Skrill, Neteller, and bank transfer. Apple Pay and Google Pay are increasingly available. Note that credit cards are prohibited for gambling transactions in the UK under UKGC rules. Withdrawal processing times differ by method and by operator — we note typical speeds where available.",
  },
  {
    id: "faq-6",
    question: "Can I access casino games on a smartphone or tablet?",
    answer:
      "All brands we rank offer a mobile-optimised experience, whether via a dedicated iOS or Android application or a responsive browser-based site. The game library, account management tools, and deposit options are generally mirrored from the desktop version. Check each operator's app store listing for device compatibility and data requirements.",
  },
  {
    id: "faq-7",
    question: "What responsible gambling tools should I know about?",
    answer:
      "UK-licensed casinos must provide deposit limits, session time reminders, cooling-off periods, and self-exclusion options. GAMSTOP is the national self-exclusion register for all UKGC-licensed sites — registering blocks access across every participating operator. For confidential support, contact BeGambleAware (0808 8020 133) or GamCare at any time.",
  },
  {
    id: "faq-8",
    question: "What is the UK Gambling Commission and why does it matter?",
    answer:
      "The UK Gambling Commission is the non-departmental public body established under the Gambling Act 2005 to licence and regulate commercial gambling in Great Britain. It sets statutory requirements for game fairness, player fund segregation, anti-money-laundering compliance, and responsible gambling standards. A valid UKGC licence is the single most important indicator of a trustworthy online casino for players based in Britain.",
  },
]

export function FaqSection() {
  return (
    <section className="py-12 rounded-[4px] border border-[hsl(128_22%_16%)] bg-[hsl(128_28%_9%)] shadow-[0_12px_48px_-16px_hsl(128_40%_3%/0.5)]">
      <div className="px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-9">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[hsl(42_50%_36%/0.7)]" />
            <span className="font-sans text-[10px] tracking-[0.28em] uppercase font-bold text-gold-muted">
              Common Questions
            </span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[hsl(42_50%_36%/0.7)]" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ivory mb-2">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-[13px] text-ivory-muted max-w-xl mx-auto leading-relaxed">
            Answers from the editorial team at bestcasinossitesuk.com — licences, bonuses, and safer play explained clearly.
          </p>
        </div>

        <div className="max-w-[1250px] mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border border-[hsl(128_20%_15%)] bg-[hsl(128_26%_10%)] rounded-[3px] px-5 hover:border-[hsl(42_40%_24%/0.55)] transition-colors duration-200"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-[15px] py-4 hover:text-gold transition-colors duration-300 text-ivory [&>svg]:text-gold-muted">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-ivory-muted pb-4 leading-relaxed text-[13px] border-t border-[hsl(128_18%_13%)] pt-3">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
