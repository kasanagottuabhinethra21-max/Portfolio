import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
}) {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  const hidden = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    scale: { opacity: 0, scale: 0.9 },
  }

  const visible = {
    up: { opacity: 1, y: 0 },
    down: { opacity: 1, y: 0 },
    left: { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    scale: { opacity: 1, scale: 1 },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden[direction] ?? variants.hidden}
      animate={isInView ? (visible[direction] ?? variants.visible) : (hidden[direction] ?? variants.hidden)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
