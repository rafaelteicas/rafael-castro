import React from 'react'
import { Card } from './card'
import { Badge } from '@/ui/badge'
import { ArrowRight } from 'lucide-react'
import IconButton from './icon-button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

type ProjectCardProps = {
  link?: string
  title: string
  description: string
  tech: string[]
}

export function ProjectCard({ title, description, tech }: ProjectCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex flex-1 flex-col space-y-2">
        <span className="flex flex-row justify-between">
          <h5>{title}</h5>
          <IconButton icon={GitHubLogoIcon} />
        </span>
        <p>{description}</p>
      </div>
      <footer className="flex flex-row flex-wrap">
        <div className="flex flex-1 flex-wrap gap-2">
          {tech.map((tech) => (
            <Badge variant="primary" key={tech}>
              {tech}
            </Badge>
          ))}
        </div>
        <span className="group flex items-center gap-2">
          <a className="cursor-pointer group-hover:text-white">Ver mais</a>
          <ArrowRight
            size={16}
            className="text-muted-foreground  group-hover:text-white"
          />
        </span>
      </footer>
    </Card>
  )
}
