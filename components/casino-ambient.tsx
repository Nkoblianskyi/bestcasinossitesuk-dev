"use client"

/**
 * Decorative layer: subtle casino motifs (suits) for hero/list sections — no canvas, low CPU.
 */
export function CasinoAmbientBackground() {
  const suits = ["♠", "♦", "♣", "♥"]
  const cells = Array.from({ length: 48 }, (_, i) => ({
    suit: suits[i % 4],
    left: `${(i * 7.3) % 100}%`,
    top: `${(i * 11.7) % 100}%`,
    delay: `${(i % 12) * 0.4}s`,
    scale: 0.6 + (i % 5) * 0.15,
  }))

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,hsl(43_42%_42%/0.12),transparent)]" />
      {cells.map((c, i) => (
        <span
          key={i}
          className="absolute text-[hsl(43_38%_55%/0.09)] font-serif animate-float-suit"
          style={{
            left: c.left,
            top: c.top,
            animationDelay: c.delay,
            fontSize: `${1.25 * c.scale}rem`,
          }}
        >
          {c.suit}
        </span>
      ))}
    </div>
  )
}
