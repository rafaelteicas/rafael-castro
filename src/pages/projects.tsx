import { ProjectCard } from '@/components'
import React, { forwardRef } from 'react'

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section id="projects" ref={ref} className="my-20 h-screen px-10">
      <h2>Projetos</h2>
      <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-2">
        <ProjectCard
          title="VConnection"
          description="Conecte-se com outros jogadores e encontre a DUO perfeita para vencer todas as partidas."
          tech={['React Native', 'Firebase', 'Node.js']}
        />
        <ProjectCard
          title="Delivery App"
          description="Gerencie seu delivery e receba pedidos pelo aplicativo."
          tech={['Next.js', 'Node.js', 'React Native']}
        />
        <ProjectCard
          title="Bookwise"
          description="Avalie seus livros favoritos e interaja com outros leitores."
          tech={['Next.js', 'Tailwind', 'Next Auth']}
        />
        <ProjectCard
          title="Blog"
          description="Avalie seus livros favoritos e interaja com outros leitores."
          tech={['Svelte', 'Nest.js']}
        />
      </div>
    </section>
  )
})

Projects.displayName = 'Projects'
