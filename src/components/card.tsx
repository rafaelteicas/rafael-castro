import { cn } from '@/lib/utils'
import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-md border border-foreground/5 bg-card p-5',
        className,
      )}
    >
      {children}
    </div>
  )
}
