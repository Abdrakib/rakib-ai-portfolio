import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  variants = defaultVariants,
  once = true,
  as: Component = motion.div,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration, delay }}
    >
      {children}
    </Component>
  )
}
