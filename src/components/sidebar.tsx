import { Button } from '@/ui/button'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen items-center">
      <div className=" flex h-sidebar w-full flex-col rounded-md border border-foreground/5 bg-secondary p-5 shadow-xl">
        <Image
          src="https://github.com/rafaelteicas.png"
          width={500}
          height={500}
          alt="Image"
          className="h-60 w-full self-center rounded-md"
        />
        <div className="flex-1">
          <h1>Rafael Castro</h1>
          <p>Desenvolvedor Full Stack na ??</p>
        </div>
        <div className="w-full space-y-5">
          <InstagramLogoIcon width={20} height={20} />
          <Button variant="default">Olá</Button>
        </div>
      </div>
    </aside>
  )
}
