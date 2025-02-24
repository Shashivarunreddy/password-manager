"use client"

import { useState, useEffect } from "react"

interface Card {
  id: string
  cardNumber: string
  expiryDate: string
}

export default function YourCards() {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    // Simulating fetching cards from an API
    const mockCards: Card[] = [
      { id: "1", cardNumber: "1234", expiryDate: "12/25" },
      { id: "2", cardNumber: "5678", expiryDate: "06/24" },
    ]
    setCards(mockCards)
  }, [])

  return (
    <div className="space-y-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <p className="text-lg font-semibold">Card Number: **** **** **** {card.cardNumber}</p>
          <p className="text-sm text-blue-200">Expiry Date: {card.expiryDate}</p>
        </div>
      ))}
    </div>
  )
}

