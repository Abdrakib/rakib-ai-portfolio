import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiX, HiExternalLink } from 'react-icons/hi'
import { getProjectMeta } from '../data/projectMeta'
import './ProjectModal.css'

export default function ProjectModal({ repo, meta, onClose }) {
  useEffect(() => {
    const onEsc = (e) => e.key === 'Escape' && onClose()
    const onKeyDown = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!repo) return null

  const m = meta || getProjectMeta(repo.name)
  const demoUrl = repo.homepage?.trim() || m?.demoUrl
  const hasDemo = demoUrl && demoUrl.length > 0
  const updated = repo.updated_at
    ? new Date(repo.updated_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : '—'

  return (
    <motion.div
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
        <motion.div
          className="project-modal"
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <HiX size={24} />
          </button>
          <div className="modal-header">
            <h2>{repo.name}</h2>
            <div className="modal-meta">
              <span>{repo.language || '—'}</span>
              <span>★ {repo.stargazers_count ?? 0}</span>
              <span>⎇ {repo.forks_count ?? 0}</span>
              <span>Updated {updated}</span>
            </div>
          </div>
          <p className="modal-desc">{repo.description || 'No description available.'}</p>
          {m && (
            <>
              {m.overview && (
                <div className="modal-section">
                  <h3>Overview</h3>
                  <p>{m.overview}</p>
                </div>
              )}
              <div className="modal-columns">
                {m.problem && (
                  <div className="modal-col">
                    <h3>Problem</h3>
                    <p>{m.problem}</p>
                  </div>
                )}
                {m.approach && (
                  <div className="modal-col">
                    <h3>Approach</h3>
                    <p>{m.approach}</p>
                  </div>
                )}
                {m.results && (
                  <div className="modal-col">
                    <h3>Results</h3>
                    <p>{m.results}</p>
                  </div>
                )}
              </div>
              {(m.techStack?.length || m.highlights?.length || m.metrics) && (
                <div className="modal-badges">
                  {m.techStack?.map((t) => (
                    <span key={t} className="badge badge-tech">
                      {t}
                    </span>
                  ))}
                  {m.highlights?.map((h) => (
                    <span key={h} className="badge badge-highlight">
                      {h}
                    </span>
                  ))}
                  {m.metrics &&
                    Object.entries(m.metrics).map(([k, v]) => (
                      <span key={k} className="badge badge-metric">
                        {k}: {v}
                      </span>
                    ))}
                </div>
              )}
              {m.dataset && (
                <p className="modal-extra">
                  <strong>Dataset:</strong> {m.dataset}
                </p>
              )}
              {m.model && (
                <p className="modal-extra">
                  <strong>Model:</strong> {m.model}
                </p>
              )}
            </>
          )}
          <div className="modal-actions">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gh"
            >
              <HiExternalLink size={16} />
              GitHub
            </a>
            {hasDemo && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <HiExternalLink size={16} />
                Live Demo
              </a>
            )}
            {m?.reportUrl && (
              <a
                href={m.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Report
              </a>
            )}
            {m?.notebookUrl && (
              <a
                href={m.notebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Notebook
              </a>
            )}
          </div>
        </motion.div>
    </motion.div>
  )
}
