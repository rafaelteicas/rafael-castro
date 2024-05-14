import { useMousePosition } from '@/hooks/useMousePosition'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  className?: string
}
export function Eye({ className }: Props) {
  const { x, y } = useMousePosition()

  const x1 = (x * 100) / window.innerWidth + '%'
  const y1 = (y * 60) / window.innerHeight + '%'

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full bg-white',
        className,
      )}
    >
      <motion.div
        className="absolute h-3 w-3 rounded-full border-[3px] border-[#451800] bg-black opacity-95 blur-xxs"
        animate={{
          left: x1 < '55%' ? x1 : '55%',
          top: y1,
          translateX: -x1,
          translateY: -y1,
        }}
        transition={{
          duration: 0,
          delay: 0,
        }}
      />
    </div>
  )
}
