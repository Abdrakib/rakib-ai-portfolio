import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { GITHUB_URL, LINKEDIN_URL } from '../lib/constants'
import CurrentlyBuilding from '../components/CurrentlyBuilding'
import './Home.css'

const TITLES = [
  'Aspiring Machine Learning Engineer',
  2000,
  'Computer Vision • Deep Learning',
  2000,
  'NLP • Audio ML • Risk Modeling',
  2000,
  'Building AI products end-to-end',
  2000,
]

const KEYWORDS = 'Computer Vision • Deep Learning • NLP • Data Science'

const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  particles: {
    number: { value: 50, density: { enable: true, width: 800, height: 600 } },
    color: { value: '#22c55e' },
    opacity: { value: { min: 0.1, max: 0.3 } },
    size: { value: { min: 1, max: 2 } },
    links: {
      enable: true,
      color: '#22c55e',
      opacity: 0.15,
      distance: 120,
    },
    move: { enable: true, speed: 0.5 },
  },
  detectRetina: true,
}

export default function Home() {
  const [particlesReady, setParticlesReady] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setParticlesReady(true))
  }, [])

  return (
    <section className="home">
      {particlesReady && (
        <div className="hero-particles">
          <Particles id="hero-particles" options={particlesOptions} />
        </div>
      )}
      <div className="hero">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I'm Abdou Rakib Abente
        </motion.h1>
        <motion.p
          className="hero-keywords"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {KEYWORDS}
        </motion.p>
        <motion.div
          className="hero-subtitle-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TypeAnimation
            sequence={TITLES}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            cursor={true}
            className="hero-typewriter"
          />
        </motion.div>
        <motion.p
          className="hero-summary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I build intelligent machine learning applications across computer vision, audio AI, NLP, and risk modeling. My work focuses on transforming data into practical AI solutions through end-to-end projects, model training, evaluation, and deployment.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/projects" className="btn btn-primary">
            View Projects
          </Link>
          <a href="/resume.pdf" download className="btn btn-outline">
            Download Resume
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            LinkedIn
          </a>
        </motion.div>
      </div>
      <CurrentlyBuilding />
    </section>
  )
}
