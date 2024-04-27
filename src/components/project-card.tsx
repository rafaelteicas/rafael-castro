import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type ProjectCardProps = {
  title: string
  imageUri: string
  className?: string
  link?: string
}

export function ProjectCard({ title, imageUri, className }: ProjectCardProps) {
  return (
    <div
      className={cn('relative flex h-full overflow-hidden rounded', className)}
    >
      <div className="absolute h-full w-full bg-gradient-to-t from-black to-transparent" />
      <Image
        src={imageUri}
        alt="Projeto"
        fill
        className="absolute -z-[1] object-cover"
      />
      <div className="z-10 flex flex-1 items-center justify-between self-end p-4">
        <h4 className="text-white">{title}</h4>
        <button className="group flex items-center gap-2">
          <p className="group-hover:text-white">Ver mais</p>
          <ArrowRight
            size={16}
            className="text-muted-foreground group-hover:text-white"
          />
        </button>
      </div>
    </div>
  )
}
