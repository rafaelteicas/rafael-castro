import { ToggleTheme } from '@/ui/toggle-theme'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const menuLinks = [
  { href: 'home', title: 'Home' },
  { href: 'about', title: 'Sobre' },
  { href: 'projects', title: 'Projetos' },
  { href: 'tech', title: 'Tecnologias' },
]

interface Props {
  visibleItem: string
}

export function Navbar({ visibleItem }: Props) {
  return (
    <header className="sticky top-10 z-10 ">
      <nav className="flex items-center justify-between">
        <ul className="flex flex-row items-center space-x-4">
          {menuLinks.map((link) => (
            <motion.li key={link.title} className="flex">
              <Link
                href={`#${link.href}`}
                className={`rounded-full bg-background/10 px-4 py-2 text-sm leading-none ${visibleItem.toLowerCase() === link.href.toLowerCase() && 'scale-110 shadow-links shadow-foreground/35 backdrop-blur-sm transition'}`}
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
        </ul>
        <ToggleTheme className="" />
      </nav>
    </header>
  )
}
