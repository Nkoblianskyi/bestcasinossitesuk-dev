"use client"

import { useEffect, useState } from "react"

type Variant = "long" | "short"

function formatUk(d: Date, variant: Variant) {
  return d.toLocaleDateString(
    "en-GB",
    variant === "long"
      ? { weekday: "long", day: "numeric", month: "long", year: "numeric" }
      : { day: "numeric", month: "long", year: "numeric" },
  )
}

export function LiveUkDate({
  className,
  variant = "long",
}: {
  className?: string
  variant?: Variant
}) {
  const [text, setText] = useState(() => formatUk(new Date(), variant))
  const [isoDate, setIsoDate] = useState(() => new Date().toISOString().slice(0, 10))

  useEffect(() => {
    const now = new Date()
    setText(formatUk(now, variant))
    setIsoDate(now.toISOString().slice(0, 10))
  }, [variant])

  return (
    <time className={className} dateTime={isoDate || undefined} suppressHydrationWarning>
      {text || "\u00A0"}
    </time>
  )
}
