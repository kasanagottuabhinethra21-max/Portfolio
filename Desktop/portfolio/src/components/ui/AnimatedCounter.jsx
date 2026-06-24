import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

export default function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [ref, isInView] = useInView({ threshold: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = value
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.floor(eased * end)
      setCount(start)

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <motion.span
      ref={ref}
      className="font-heading text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 md:text-5xl"
    >
      {count}
      {suffix}
    </motion.span>
  )
}
