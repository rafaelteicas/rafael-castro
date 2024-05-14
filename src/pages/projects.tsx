import { ProjectCard } from '@/components'
import React, { forwardRef } from 'react'

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="projects" ref={ref} className="my-20 h-screen">
      <h2>Projetos</h2>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <ProjectCard
          title="VConnection"
          description="Conecte-se com outros jogadores e encontre a DUO perfeita para vencer todas as partidas."
          tech={['React Native', 'Node.js', 'Firebase']}
        />
        <ProjectCard
          title="Delivery App"
          description="Gerencie seu delivery e receba pedidos pelo aplicativo."
          tech={['Next.js', 'Node.js', 'React Native']}
        />
      </div>
    </section>
  )
})

Projects.displayName = 'Projects'
