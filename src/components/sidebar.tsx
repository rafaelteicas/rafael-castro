import { Button } from '@/ui/button'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'
import { Eye } from './eye'

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen items-center">
      <div className=" flex h-sidebar w-full flex-col rounded-md border border-foreground/5 bg-secondary p-5 shadow-xl">
        <div className="relative flex items-center justify-center">
          <Eye className="absolute left-[90px] top-[85px] h-5 w-6 shadow-eye" />
          <Eye className="absolute left-[130px] top-[85px] h-5 w-6 shadow-eye " />
          <Image
            src="/images/avatar.png"
            width={500}
            height={500}
            alt="Image"
            className="z-10 h-60 w-full self-center rounded-md"
          />
        </div>
        <div className="flex-1">
          <h4>Rafael Castro</h4>
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
