"use client"

import type React from "react"

import { useState } from "react"

export default function AddCard() {
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the card addition
    console.log("Card added:", { cardNumber, expiryDate, cvv })
    setCardNumber("")
    setExpiryDate("")
    setCvv("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="Card Number"
          className="w-full p-2 bg-transparent border-b border-blue-500 text-white placeholder-blue-300 focus:outline-none focus:border-blue-300"
          required
        />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-300 origin-left group-focus-within:scale-x-100"></div>
      </div>
      <div className="relative">
        <input
          type="text"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="Expiry Date (MM/YY)"
          className="w-full p-2 bg-transparent border-b border-blue-500 text-white placeholder-blue-300 focus:outline-none focus:border-blue-300"
          required
        />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-300 origin-left group-focus-within:scale-x-100"></div>
      </div>
      <div className="relative">
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="CVV"
          className="w-full p-2 bg-transparent border-b border-blue-500 text-white placeholder-blue-300 focus:outline-none focus:border-blue-300"
          required
        />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-300 origin-left group-focus-within:scale-x-100"></div>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
      >
        Add Card
      </button>
    </form>
  )
}

