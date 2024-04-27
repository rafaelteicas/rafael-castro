'use client'

import { Navbar, Sidebar } from '@/components'
import { About } from '@/pages/about'
import { Hero } from '@/pages/hero'
import { Projects } from '@/pages/projects'
import { Technologies } from '@/pages/technologies'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const [visibleItem, setVisibleItem] = useState('')
  const { scrollYProgress } = useScroll()

  const { ref: homeRef, inView: inViewHome } = useInView({
    threshold: 0,
  })
  const { ref: projectsRef, inView: inViewProjects } = useInView({
    threshold: 0.1,
  })
  const { ref: techRef, inView: inViewTech } = useInView({
    threshold: 0.1,
  })
  const { ref: aboutRef, inView: inViewAbout } = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    if (inViewHome) {
      setVisibleItem('home')
    }
    if (inViewProjects) {
      setVisibleItem('projects')
    }
    if (inViewTech) {
      setVisibleItem('tech')
    }
    if (inViewAbout) {
      setVisibleItem('about')
    }
  }, [inViewAbout, inViewHome, inViewProjects, inViewTech])

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 top-0 z-10 h-1 w-full origin-left bg-emerald-500/80"
      />
      <main className="mx-auto grid min-h-screen max-w-app grid-cols-app gap-20 space-y-10 antialiased">
        <Sidebar />
        <div className="flex flex-col">
          <Navbar visibleItem={visibleItem} />
          <Hero ref={homeRef} />
          <About ref={aboutRef} />
          <Projects ref={projectsRef} />
          <Technologies ref={techRef} />
        </div>
        <div className="fixed -z-10 h-full w-full opacity-40">
          <div className="fixed bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </main>
    </>
  )
}
