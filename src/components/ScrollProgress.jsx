import { useEffect, useState } from 'react'
import './ScrollProgress.css'
import { motion } from 'framer-motion'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const st = h.scrollTop
      const sh = h.scrollHeight - h.clientHeight
      setProgress(sh > 0 ? st / sh : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-progress" aria-hidden>
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleY: progress }}
      />
    </div>
  )
}
