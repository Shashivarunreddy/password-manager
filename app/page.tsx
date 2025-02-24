"use client"
import AddCard from "@/components/AddCard"
import AddPassword from "@/components/AddPassword"
import YourCards from "@/components/YourCards"
import YourPasswords from "@/components/YourPasswords"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Password Manager
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black bg-opacity-50 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
          
          <h2 className="text-2xl font-bold mt-6 text-blue-400">Add a Credit Card</h2>
          <AddCard />
        </div>
        <div className="bg-black bg-opacity-50 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
         
          <h2 className="text-2xl font-bold mt-6 text-purple-400">Add Password</h2>
          <AddPassword />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <div className="bg-black bg-opacity-50 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
          
          <h2 className="text-2xl font-bold mt-6 text-blue-400">Your Credit Cards</h2>
          <YourCards />
        </div>
        <div className="bg-black bg-opacity-50 p-6 rounded-xl backdrop-filter backdrop-blur-lg">
          
          
          <h2 className="text-2xl font-bold mt-6 text-purple-400 text-center">Your Passwords</h2>
          <YourPasswords />
        </div>
      </div>
    </div>
  )
}

