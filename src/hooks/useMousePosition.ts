import { useEffect, useState } from 'react'

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.addEventListener('mousemove', handleMousePosition)

    function handleMousePosition(e: MouseEvent) {
      const x = e.clientX
      const y = e.clientY
      setMousePosition({
        x,
        y,
      })
    }

    return () => document.removeEventListener('mousemove', handleMousePosition)
  }, [])

  return {
    x: mousePosition.x,
    y: mousePosition.y,
  }
}
