import { Button } from '@/ui/button'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import React from 'react'
import IconButton from './icon-button'
import Image from 'next/image'

export function Sidebar() {
  return (
    <aside className="left-4 hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center xl:left-0">
      <div className=" flex h-sidebar w-full flex-col rounded-md border border-foreground/5 bg-secondary p-5 shadow-xl">
        <div className="flex-1">
          <div className="relative mb-4 flex flex-col">
            <Image
              src="https://github.com/rafaelteicas.png"
              alt="Foto"
              width={500}
              height={200}
              className="h-30 w-30 mb-4 mt-auto rounded-xl"
            />
            <h3>Rafael Castro</h3>
            <p>Desenvolvedor full-stack</p>
          </div>
          <div className="w-full space-y-4">
            <IconButton icon={LinkedInLogoIcon} label="LinkedIn" />
            <IconButton icon={GitHubLogoIcon} label="GitHub" />
          </div>
        </div>
        <Button variant="default">Contato</Button>
      </div>
    </aside>
  )
}
