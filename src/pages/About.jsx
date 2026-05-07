import ScrollReveal from '../components/ScrollReveal'
import './About.css'

const skillsGroups = [
  {
    title: 'Programming',
    items: ['Python', 'SQL', 'Java'],
  },
  {
    title: 'Machine Learning',
    items: ['Regression', 'Classification', 'Decision Trees', 'Random Forest', 'XGBoost', 'Ensemble Methods'],
  },
  {
    title: 'Deep Learning',
    items: ['CNNs', 'RNNs', 'Transformers', 'Transfer Learning', 'Backpropagation'],
  },
  {
    title: 'Libraries & Frameworks',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'OpenCV', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Jupyter', 'Google Colab', 'VS Code', 'FastAPI', 'React'],
  },
]

const education = [
  {
    degree: 'Associate Degree in Computer Science',
    institution: 'Community College of Philadelphia',
    location: 'Philadelphia, PA',
    year: '2023 – Present',
  },
]

const certifications = [
  'Machine Learning Specialization — Andrew Ng (Coursera)',
  'Data Science & Machine Learning Bootcamp — Udemy',
]

const highlights = [
  'Built end-to-end machine learning projects across computer vision, tabular ML, and audio AI',
  'Developed a CNN-based brain tumor detection pipeline for MRI image classification',
  'Built a consumer credit risk prediction system with model evaluation and threshold tuning',
  'Implemented speech emotion recognition using transformer-based audio models',
]

export default function About() {
  return (
    <section className="about page">
      <h1 className="page-title">About Me</h1>
      <div className="about-content">
        <ScrollReveal className="bio-section">
          <h2>Bio</h2>
          <p>
            Computer Science student specializing in Artificial Intelligence and Machine Learning.
          </p>
          <p>
            I design and build end-to-end machine learning systems using Python, TensorFlow, PyTorch, and scikit-learn, with projects spanning computer vision, natural language processing, and predictive modeling.
          </p>
          <p>
            My work focuses on developing practical AI applications, including deployed systems using FastAPI, React, Vercel, and Render, with an emphasis on solving real-world problems through intelligent data-driven solutions.
          </p>
          <p>
            I am currently expanding my expertise in deep learning, transformer models, and scalable AI systems, with the goal of becoming a Machine Learning Engineer building impactful AI technologies.
          </p>
          <a href="/resume.pdf" download className="btn btn-primary about-resume">
            Download Resume
          </a>
        </ScrollReveal>
        <ScrollReveal className="skills-section" delay={0.1}>
          <h2>Skills</h2>
          <div className="skills-groups">
            {skillsGroups.map((group) => (
              <div key={group.title} className="skills-group">
                <h3 className="skills-group-title">{group.title}</h3>
                <ul className="skills-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
        <ScrollReveal className="education-section" delay={0.2}>
          <h2>Education</h2>
          <ul className="education-list">
            {education.map((e, i) => (
              <li key={i}>
                <strong>{e.degree}</strong>
                <span className="education-institution">{e.institution} — {e.location}</span>
                <span className="education-year">{e.year}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal className="certifications-section" delay={0.25}>
          <h2>Certifications / Training</h2>
          <ul className="certifications-list">
            {certifications.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal className="highlights-section" delay={0.3}>
          <h2>Highlights</h2>
          <ul className="highlights-list">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
