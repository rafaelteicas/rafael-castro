import { ToggleTheme } from '@/ui/toggle-theme'
import Link from 'next/link'
import React from 'react'

export function Navbar() {
  return (
    <header className="sticky top-5">
      <nav className="flex items-center justify-between text-sm">
        <ul>
          <li className="flex items-center space-x-10">
            <Link
              href="#home"
              title="Home"
              className="backdrop-blur-xs shadow-links rounded-full px-5 py-2 shadow-foreground/15"
            >
              Home
            </Link>
            <Link
              href="#projects"
              title="Home"
              className="rounded-full px-5 py-2"
            >
              Projetos
            </Link>
          </li>
        </ul>
        <ToggleTheme className="" />
      </nav>
    </header>
  )
}
