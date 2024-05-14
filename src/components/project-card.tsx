import React from 'react'
import { Card } from './card'
import { Badge } from '@/ui/badge'
import { ArrowRight } from 'lucide-react'

type ProjectCardProps = {
  link?: string
  title: string
  description: string
  tech: string[]
}

export function ProjectCard({ title, description, tech }: ProjectCardProps) {
  return (
    <Card className="flex items-center gap-4 space-y-2">
      <div className="space-y-2">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="flex flex-wrap">
          <div className="flex flex-1 gap-2">
            {tech.map((tech) => (
              <Badge variant="primary" key={tech}>
                {tech}
              </Badge>
            ))}
          </div>
          <button className="group flex items-center gap-2">
            <p className="group-hover:text-white">Ver mais</p>
            <ArrowRight
              size={16}
              className="text-muted-foreground group-hover:text-white"
            />
          </button>
        </div>
      </div>
    </Card>
  )
}
