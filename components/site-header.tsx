"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Rankings" },
    { href: "/about-us", label: "About" },
    { href: "/privacy-policy", label: "Privacy" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-400 ${
        scrolled
          ? "bg-[hsl(128_34%_6%/0.97)] backdrop-blur-md shadow-[0_4px_28px_hsl(128_40%_3%/0.7)] border-b border-[hsl(42_45%_38%/0.35)]"
          : "bg-[hsl(128_34%_7%)] border-b border-[hsl(42_40%_32%/0.3)]"
      }`}
    >
      {/* Top gold rule */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[hsl(42_62%_52%/0.8)] to-transparent" />

      <div className="mx-auto flex h-[62px] max-w-[1250px] items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-9 rounded-[2px] overflow-hidden flex items-center justify-center border border-[hsl(42_50%_40%/0.5)] bg-[hsl(128_30%_11%)] shadow-[0_2px_10px_hsl(128_40%_3%/0.5)] transition-all duration-300 group-hover:border-[hsl(42_58%_48%/0.7)]">
            <Image src="/favicon.ico" alt="" width={28} height={28} className="object-contain opacity-90" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[15px] md:text-[17px] font-semibold tracking-[0.01em] text-ivory transition-colors duration-300 group-hover:text-gold">
              BestCasinoSitesUK
            </span>
            <span className="text-[9px] font-sans tracking-[0.2em] uppercase text-gold-muted">
              Independent Reviews
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative px-4 py-1.5 text-[12px] font-sans font-semibold tracking-[0.08em] uppercase text-ivory-muted hover:text-gold transition-colors duration-300 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[1px] after:bg-gold after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* 18+ badge desktop */}
        <div className="hidden md:flex items-center gap-3">
          <span className="px-2.5 py-1 text-[10px] font-sans font-bold tracking-widest bg-transparent border border-[hsl(42_48%_42%/0.5)] text-gold-muted rounded-[2px]">
            18+
          </span>
          <span className="text-[10px] font-sans text-ivory-muted tracking-wide">
            UKGC Licensed Only
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ivory hover:text-gold transition-colors"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-[hsl(128_34%_7%)] animate-fade-in border-t border-[hsl(42_38%_28%/0.35)]"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-[1250px] px-5 py-4 flex flex-col gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block py-2.5 px-2 text-sm font-sans font-semibold tracking-wide text-ivory hover:text-gold border-b border-[hsl(128_22%_16%/0.5)] last:border-0 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
