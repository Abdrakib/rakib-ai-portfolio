import { Link } from 'react-router-dom'
import { GITHUB_URL, LINKEDIN_URL, FULL_NAME } from '../lib/constants'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-social">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} {FULL_NAME}. Built with React + Vite.</p>
      </div>
    </footer>
  )
}
