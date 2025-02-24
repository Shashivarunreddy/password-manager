"use client"

import type React from "react"

import { useState } from "react"

export default function AddPassword() {
  const [website, setWebsite] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the password addition
    console.log("Password added:", { website, username, password })
    setWebsite("")
    setUsername("")
    setPassword("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Website"
          className="w-full p-2 bg-transparent border-b border-purple-500 text-white placeholder-purple-300 focus:outline-none focus:border-purple-300"
          required
        />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 transition-transform duration-300 origin-left group-focus-within:scale-x-100"></div>
      </div>
      <div className="relative">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="w-full p-2 bg-transparent border-b border-purple-500 text-white placeholder-purple-300 focus:outline-none focus:border-purple-300"
          required
        />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 transition-transform duration-300 origin-left group-focus-within:scale-x-100"></div>
      </div>
      <div className="relative">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 bg-transparent border-b border-purple-500 text-white placeholder-purple-300 focus:outline-none focus:border-purple-300"
          required
        />
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 transition-transform duration-300 origin-left group-focus-within:scale-x-100"></div>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-md hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
      >
        Add Password
      </button>
    </form>
  )
}

