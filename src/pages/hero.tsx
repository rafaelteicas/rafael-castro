import { Badge } from '@/ui/badge'
import { Button } from '@/ui/button'
import React, { forwardRef } from 'react'

export const Hero = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      id="home"
      className="flex h-screen items-center justify-center px-10 xl:px-0"
    >
      <div className="space-y-6">
        <Badge className="gap-2">
          <span className="relative h-2 w-2">
            <span className="absolute h-2 w-2 rounded-full bg-green-600" />
            <span className="absolute h-2 w-2 animate-ping rounded-full bg-green-600" />
          </span>
          Disponível
        </Badge>
        <div className="relative">
          <h1>Olá, me chamo Rafael Castro!</h1>
        </div>

        <Button className="w-40">Download CV</Button>
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'
