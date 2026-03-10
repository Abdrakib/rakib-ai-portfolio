import { motion } from 'framer-motion'
import { HiExternalLink } from 'react-icons/hi'
import './FeaturedProjectCard.css'

export default function FeaturedProjectCard({ project }) {
  return (
    <motion.article
      className="featured-project-card"
      whileHover={{
        borderColor: 'var(--accent)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px var(--accent-glow)',
      }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="featured-project-title">{project.title}</h3>
      <p className="featured-project-desc">{project.description}</p>
      {project.modelTech && (
        <p className="featured-project-modeltech">Model / Tech: {project.modelTech}</p>
      )}
      <div className="featured-project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="featured-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="featured-project-actions">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gh"
          >
            <HiExternalLink size={16} />
            GitHub
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <HiExternalLink size={16} />
            Live Demo
          </a>
        )}
        {project.notebookUrl && (
          <a
            href={project.notebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gh"
          >
            <HiExternalLink size={16} />
            Notebook
          </a>
        )}
      </div>
    </motion.article>
  )
}
