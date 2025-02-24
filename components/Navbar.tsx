"use client"
import React from 'react'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'

function Navbar() {
  const { theme, setTheme } = useTheme()
  const toggletheme = () => {
    setTheme(theme === 'dark'? 'light' : 'dark')
  }
  return (
    <nav className='flex justify-between  h-14 items-center px-4 text-foreground bg-primary'>
      <span className='font-bold text-xl'>PASS MANAGER</span>
      <ul className='flex gap-5 items-center justify-start'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='flex gap-5 items-center justify-centerx'>
            
        <Button variant="outline" size="icon" onClick={toggletheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      
             <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
