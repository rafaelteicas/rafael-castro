import { Card } from '@/components'
import React, { forwardRef } from 'react'
import { getAge } from '@/utils'
import { Brever } from '@/assets'

const YEAR_OF_BIRTH = 2002

export const About = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="about"
      ref={ref}
      className="flex flex-col justify-center gap-4 px-10"
    >
      <h2 className="self-start">
        <span className="pr-4">👋</span> Sobre mim
      </h2>
      <div className="gap-4 md:grid md:grid-cols-[1fr_auto]">
        <Card className="indent-4">
          <p>Olá, meu nome é Rafael e tenho {getAge(YEAR_OF_BIRTH)} anos!</p>
          <br />
          <p>
            Sou desenvolvedor desde 2022, quando resolvi migrar para essa área.
            Atualmente meu principal foco é o desenvolvimento de aplicações
            full-stack, utilizando principalmente{' '}
            <b>React Native, Node.js, Next.js</b> entre outras tecnologias e
            sempre estou aprendendo novas coisas.
          </p>
        </Card>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        <Card className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded border border-foreground/5 p-2">
            <Brever className="fill-foreground" />
          </div>
          <div>
            <h6>Brever</h6>
            <p>Desenvolvedor mobile</p>
          </div>
        </Card>
        <Card>
          <span className="flex items-center gap-2">
            📚 <h6>Formação</h6>
          </span>
          <p>Graduando em Eng. Software</p>
        </Card>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        <Card>
          <span className="flex items-center gap-2">
            📝 <h6> Metas</h6>
          </span>

          <ul className="list-disc px-5">
            <li>
              <p>Criar projetos em Java/Angular</p>
            </li>
            <li>
              <p>Aprender mais sobre Android Nativo</p>
            </li>
          </ul>
        </Card>

        <Card>
          <span className="flex items-center gap-2">
            🎮 <h6>Hobbies</h6>
          </span>
          <ul className="list-disc px-5">
            <li>
              <p>Jogar Valorant ou algum jogo de história</p>
            </li>
            <li>
              <p>Assistir filmes/séries</p>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  )
})

About.displayName = 'About'
