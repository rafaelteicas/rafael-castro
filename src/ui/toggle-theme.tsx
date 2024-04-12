'use client'

import React, { useState } from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

type Theme = 'dark' | 'light'

interface ToggleThemeProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function ToggleTheme({ ...buttonProps }: ToggleThemeProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>('dark')

  const { setTheme } = useTheme()

  function handleToggleTheme() {
    if (currentTheme === 'dark') {
      setCurrentTheme('light')
      setTheme('light')
    } else {
      setCurrentTheme('dark')
      setTheme('dark')
    }
  }

  return (
    <button onClick={handleToggleTheme} {...buttonProps}>
      {currentTheme === 'light' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
