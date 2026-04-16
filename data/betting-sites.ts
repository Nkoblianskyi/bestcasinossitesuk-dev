export interface BettingSite {
  reviews: number
  id: string
  name: string
  logo: string
  score: number
  bonus: string
  features: string[]
  paymentMethods: string[]
  link: string
}

export const bettingSites: BettingSite[] = [
  {
    id: "betfred",
    name: "Betfred",
    logo: "/betfred.webp",
    score: 9.7,
    bonus: "Stake £10 & Get 200 Free Spins",
    features: ["Slots & Live Casino", "Jackpots", "Fast Withdrawals"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betfred.com/casino",
    reviews: 4120,
  },
  {
    id: "boylesports",
    name: "BoyleSports",
    logo: "/boylesports.webp",
    score: 9.6,
    bonus: "Bet £10 & Get £50 Casino Bonus",
    features: ["Wide Game Range", "Ongoing Promotions", "UK Support"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Bank Transfer"],
    link: "https://games.boylesports.com",
    reviews: 4980,
  },
  {
    id: "betvictor",
    name: "BetVictor",
    logo: "/betvictor.webp",
    score: 9.5,
    bonus: "Deposit £10 & Get £20 Casino Bonus + 50 Free Spins",
    features: ["Extensive Slots Library", "Table Games", "Regular Offers"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.betvictor.com/en-gb/casino",
    reviews: 3912,
  },
  {
    id: "ladbrokes",
    name: "Ladbrokes",
    logo: "/ladbrokes.webp",
    score: 9.4,
    bonus: "Play £10 on Slots and Get 100 Free Spins",
    features: ["Trusted Heritage Brand", "Loyalty Perks", "Slots Focus"],
    paymentMethods: ["Visa/Mastercard", "PayPal", "Apple Pay"],
    link: "https://www.ladbrokes.com/en/games/",
    reviews: 3654,
  },
  {
    id: "midnite",
    name: "Midnite",
    logo: "/midnite.webp",
    score: 9.2,
    bonus: "Wager £20 and Get 100 Free Spins",
    features: ["Modern Casino Lobby", "Quick Cashout", "Slots & More"],
    paymentMethods: ["Visa/Mastercard", "Skrill", "Neteller"],
    link: "https://www.midnite.com/casino",
    reviews: 2891,
  },
]
