import React, { forwardRef } from 'react'

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="projects" ref={ref} className="h-screen py-20">
      <h2>Projetos</h2>
      <div className="mt-4 grid h-full grid-cols-2 gap-4"></div>
    </section>
  )
})

Projects.displayName = 'Projects'
