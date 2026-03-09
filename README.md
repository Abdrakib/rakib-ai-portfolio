# Abdou Rakib Abente — AI & ML Portfolio

Personal portfolio website showcasing AI/ML projects, research, and demos. Built with React, Vite, and a premium dark theme.

🔗 **Live Demo:** [Deploy to Vercel for your link]

---

## Overview

| | |
|---|---|
| **Name** | Abdou Rakib Abente |
| **Role** | Aspiring AI & Machine Learning Engineer |
| **Focus** | Computer Vision • Deep Learning • NLP • Data Science |

---

## Features

- **Home** — Hero with particle background, typewriter titles, "Currently Building" section
- **About** — Bio, grouped skills, education, certifications, highlights
- **Projects** — Featured projects (manual) + All repos (GitHub API), search/filter, Lab Mode
- **Contact** — Email, phone, location, LinkedIn, GitHub, contact form (mailto)
- **Polish** — Framer Motion animations, scroll reveal, scroll progress, loading screen
- **Responsive** — Mobile and desktop

---

## Tech Stack

- **Frontend:** React 18, Vite, React Router
- **Styling:** CSS (dark theme, custom properties)
- **Animations:** Framer Motion, tsparticles, react-type-animation
- **Icons:** react-icons
- **Deployment:** Vercel-ready (static build)

---

## Quick Start

```bash
# Clone
git clone https://github.com/Abdrakib/rakib-ai-portfolio.git
cd rakib-ai-portfolio

# Install
npm install

# Run locally
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Build & Deploy

```bash
npm run build
```

Output in `dist/`. Deploy to [Vercel](https://vercel.com) by importing this repo.

**Environment variable (optional):** `VITE_GITHUB_USERNAME=Abdrakib`

---

## Project Structure

```
├── public/          # resume.pdf, favicon, og-image
├── src/
│   ├── components/  # Navbar, Footer, ProjectCard, etc.
│   ├── data/        # featuredProjects, currentlyBuilding, projectMeta
│   ├── lib/         # constants, githubApi
│   └── pages/       # Home, About, Projects, Contact
└── package.json
```

---

## Customization

| File | Purpose |
|------|---------|
| `src/lib/constants.js` | Name, email, phone, LinkedIn, GitHub |
| `src/data/featuredProjects.js` | Featured project cards |
| `src/data/currentlyBuilding.js` | Homepage "Currently Building" items |
| `src/pages/About.jsx` | Bio, skills, education, certifications |
| `public/resume.pdf` | Download Resume button |

---

## Related

- [AI_ML-Portfolio](https://github.com/Abdrakib/AI_ML-Portfolio) — ML projects, notebooks, Brain Tumor demo
- [LinkedIn](https://www.linkedin.com/in/rakib-abente-3a5466300/)
