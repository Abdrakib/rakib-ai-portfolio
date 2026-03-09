import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { fetchUserRepos } from '../lib/githubApi'
import { featuredProjects, featuredProjectCategories } from '../data/featuredProjects'
import ProjectCard from '../components/ProjectCard'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import ProjectModal from '../components/ProjectModal'
import Filters from '../components/Filters'
import ScrollReveal from '../components/ScrollReveal'
import { HiBeaker, HiViewGrid } from 'react-icons/hi'
import './Projects.css'

const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'Abdrakib'

function filterRepos(repos, search, lang) {
  return repos.filter((r) => {
    const matchSearch =
      !search ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(search.toLowerCase()))
    const matchLang = !lang || (r.language || '') === lang
    return matchSearch && matchLang
  })
}

function getLanguages(repos) {
  const set = new Set()
  repos.forEach((r) => r.language && set.add(r.language))
  return [...set].sort()
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [selectedLang, setSelectedLang] = useState('')
  const [allExpanded, setAllExpanded] = useState(true)
  const [labMode, setLabMode] = useState(false)
  const [modalRepo, setModalRepo] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError(null)
      try {
        const reposData = await fetchUserRepos(USERNAME)
        if (cancelled) return
        setRepos(reposData)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [])

  const languages = getLanguages(repos)
  const filteredRepos = filterRepos(repos, search, selectedLang)

  if (loading) {
    return (
      <section className="projects page">
        <h1 className="page-title">Projects</h1>
        <div className="projects-loading">
          <div className="spinner" />
          <p>Loading projects from GitHub…</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="projects page">
        <h1 className="page-title">Projects</h1>
        <div className="projects-error">
          <p>{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="projects page">
      <h1 className="page-title">Projects</h1>
      <div className="projects-toolbar">
        <Filters
          search={search}
          setSearch={setSearch}
          languages={languages}
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
        />
        <div className="mode-toggle">
          <button
            className={`toggle-btn ${!labMode ? 'active' : ''}`}
            onClick={() => setLabMode(false)}
            title="Showcase Mode"
          >
            <HiViewGrid size={18} />
            Showcase
          </button>
          <button
            className={`toggle-btn ${labMode ? 'active' : ''}`}
            onClick={() => setLabMode(true)}
            title="Lab Mode"
          >
            <HiBeaker size={18} />
            Lab
          </button>
        </div>
      </div>
      <ScrollReveal className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        {featuredProjectCategories.map((cat) => {
          const projectsInCategory = featuredProjects.filter((p) => p.category === cat.id)
          if (projectsInCategory.length === 0) return null
          return (
            <div key={cat.id} className="featured-category">
              <h3 className="featured-category-title">{cat.label}</h3>
              <div className="project-grid">
                {projectsInCategory.map((project) => (
                  <FeaturedProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )
        })}
      </ScrollReveal>
      <div className="projects-section all-projects">
        <button
          className="section-toggle"
          onClick={() => setAllExpanded(!allExpanded)}
          aria-expanded={allExpanded}
        >
          All Projects {allExpanded ? '▲' : '▼'}
        </button>
        {allExpanded && (
          <div className="project-grid">
            {filteredRepos.map((repo) => (
              <ProjectCard
                key={repo.id}
                repo={repo}
                labMode={labMode}
                onClick={setModalRepo}
              />
            ))}
          </div>
        )}
      </div>
      <AnimatePresence>
        {modalRepo && (
          <ProjectModal
            key={modalRepo.id}
            repo={modalRepo}
            onClose={() => setModalRepo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
