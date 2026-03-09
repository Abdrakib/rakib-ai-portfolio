import { motion } from 'framer-motion'
import { getProjectMeta } from '../data/projectMeta'
import './ProjectCard.css'

export default function ProjectCard({ repo, labMode = false, onClick }) {
  const meta = getProjectMeta(repo.name)
  const updated = repo.updated_at
    ? new Date(repo.updated_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '—'
  const hasHomepage = repo.homepage && repo.homepage.trim() !== ''

  const content = (
    <>
      <div className="project-card-header">
        <h3 className="project-name">{repo.name}</h3>
        <span className="project-lang">{repo.language || '—'}</span>
      </div>
      <p className="project-desc">
        {repo.description || 'No description available.'}
      </p>
      {labMode && meta && (
        <div className="project-lab-meta">
          {meta.dataset && (
            <span className="lab-tag">Dataset: {meta.dataset}</span>
          )}
          {meta.model && (
            <span className="lab-tag">Model: {meta.model}</span>
          )}
          {meta.metrics &&
            Object.entries(meta.metrics).map(([k, v]) => (
              <span key={k} className="lab-tag">
                {k}: {v}
              </span>
            ))}
          {meta.highlights?.slice(0, 3).map((h) => (
            <span key={h} className="lab-highlight">{h}</span>
          ))}
        </div>
      )}
      <div className="project-meta">
        <span title="Stars">★ {repo.stargazers_count ?? 0}</span>
        <span title="Forks">⎇ {repo.forks_count ?? 0}</span>
        <span className="project-date">Updated {updated}</span>
      </div>
      <div className="project-actions">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gh"
          onClick={(e) => e.stopPropagation()}
        >
          GitHub
        </a>
        {hasHomepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            onClick={(e) => e.stopPropagation()}
          >
            Live Demo
          </a>
        )}
      </div>
    </>
  )

  if (onClick) {
    return (
      <motion.article
        className="project-card"
        whileHover={{ borderColor: 'var(--accent)', boxShadow: '0 0 20px rgba(34, 197, 94, 0.15)' }}
        transition={{ duration: 0.2 }}
        onClick={() => onClick(repo)}
      >
        {content}
      </motion.article>
    )
  }

  return <article className="project-card">{content}</article>
}
