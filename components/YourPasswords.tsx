"use client"

import { useState, useEffect } from "react"

interface Password {
  id: string
  website: string
  username: string
}

export default function YourPasswords() {
  const [passwords, setPasswords] = useState<Password[]>([])

  useEffect(() => {
    // Simulating fetching passwords from an API
    const mockPasswords: Password[] = [
      { id: "1", website: "example.com", username: "user1" },
      { id: "2", website: "test.com", username: "user2" },
    ]
    setPasswords(mockPasswords)
  }, [])

  return (
    <div className="space-y-4">
      {passwords.map((password) => (
        <div
          key={password.id}
          className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <p className="text-lg font-semibold">Website: {password.website}</p>
          <p className="text-sm text-purple-200">Username: {password.username}</p>
        </div>
      ))}
    </div>
  )
}

