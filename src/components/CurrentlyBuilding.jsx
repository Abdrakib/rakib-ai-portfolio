import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { currentlyBuildingItems } from '../data/currentlyBuilding'
import './CurrentlyBuilding.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export default function CurrentlyBuilding() {
  return (
    <motion.section
      className="currently-building"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="currently-building-title">Currently Building</h2>
      <motion.div
        className="currently-building-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        {currentlyBuildingItems.map((item) => (
          <motion.article
            key={item.id}
            className="currently-building-card"
            variants={itemVariants}
            whileHover={{
              borderColor: 'var(--accent)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--accent-glow)',
            }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="currently-building-card-title">{item.title}</h3>
            <p className="currently-building-card-desc">{item.description}</p>
          </motion.article>
        ))}
      </motion.div>
      <Link to="/projects" className="currently-building-link">
        View all projects
        <HiArrowRight size={18} />
      </Link>
    </motion.section>
  )
}
