import { ProjectCard } from '@/components'
import React, { forwardRef } from 'react'

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="projects" ref={ref} className="my-20 h-screen">
      <h2>Projetos</h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <ProjectCard
          title="Bookwise"
          imageUri={'/images/bookwise.png'}
          className="col-start-1 row-start-1 h-72 "
        />
      </div>
    </section>
  )
})

Projects.displayName = 'Projects'
