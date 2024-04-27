import { Card } from '@/components/card'
import { Badge } from '@/ui/badge'
import { forwardRef } from 'react'

const technologies = [
  {
    title: 'mobile',
    tech: [
      'React Native',
      'Reanimated v3',
      'Gesture Handler',
      'Restyle',
      'Native Base',
    ],
  },
  {
    title: 'web',
    tech: ['React', 'Next.js'],
  },
]

export const Technologies = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="tech" className="my-20 flex h-screen flex-col gap-4">
      <h2>Tecnologias</h2>
      <Card>
        <ul className="flex flex-col gap-2">
          {technologies.map((tech) => (
            <div key={tech.title}>
              <h5 className="capitalize">{tech.title}</h5>
              {tech.tech.map((tech) => (
                <Badge variant="primary" key={tech} className="mr-4">
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
