import { Card } from '@/components'
import { Badge } from '@/ui/badge'
import { forwardRef } from 'react'

const technologies = [
  {
    title: 'mobile',
    stack: [
      { tech: 'React Native' },
      { tech: 'Swift', learning: true },
      { tech: 'Kotlin', learning: true },
    ],
  },
  {
    title: 'Front-end',
    stack: [
      {
        tech: 'React',
      },
      {
        tech: 'Next.js',
      },
      {
        tech: 'Svelte',
        learning: true,
      },
    ],
  },
  {
    title: 'Back-end',
    stack: [
      {
        tech: 'Node.js',
      },
      {
        tech: 'Nest.js',
      },
      {
        tech: 'Java',
        learning: true,
      },
    ],
  },
  {
    title: 'DevOps/Cloud',
    stack: [
      {
        tech: 'Git',
      },
      {
        tech: 'Docker',
      },
    ],
  },
]

export const Technologies = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="tech" className="mb-20 flex flex-col gap-4 px-10">
      <h2>Tecnologias</h2>
      <Card>
        <ul className="flex flex-col gap-2">
          {technologies.map((tech) => (
            <div key={tech.title}>
              <h5 className="mb-2 capitalize">{tech.title}</h5>
              {tech.stack?.map(({ tech, learning }) => (
                <Badge
                  variant={learning ? 'secondary' : 'primary'}
                  key={tech}
                  className="mb-2 mr-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          ))}
        </ul>
      </Card>
    </section>
  )
})

Technologies.displayName = 'Technologies'
