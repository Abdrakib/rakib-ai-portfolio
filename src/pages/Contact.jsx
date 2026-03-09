import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import { EMAIL, PHONE, LINKEDIN_URL, GITHUB_URL, LOCATION } from '../lib/constants'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(form.message)
    const subject = encodeURIComponent(form.subject || 'Portfolio Contact')
    const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    window.location.href = mailto
  }

  return (
    <section className="contact page">
      <h1 className="page-title">Contact</h1>
      <div className="contact-content">
        <ScrollReveal className="contact-info">
          <h2>Get in touch</h2>
          <div className="contact-details">
            <p><strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <p><strong>Phone:</strong> <a href={`tel:${PHONE.replace(/\D/g, '')}`}>{PHONE}</a></p>
            <p><strong>Location:</strong> {LOCATION}</p>
            <div className="contact-socials">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </label>
          <label>
            Subject
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={5}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send (Opens Mailto)
          </button>
        </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
