/**
 * Extra metadata for projects displayed in Lab Mode and the Case Study Modal.
 * Keys must match GitHub repo names exactly.
 *
 * Add entries for projects you want to showcase with detailed info.
 */
export const projectMeta = {
  'AI_ML-Portfolio': {
    overview:
      'Brain MRI AI application for tumor classification with Grad-CAM explainability, confidence scoring, and production deployment.',
    problem:
      'Medical imaging diagnosis requires interpretable AI that clinicians can trust. Standard classifiers lack visibility into model reasoning.',
    approach:
      'Built EfficientNetB0-based binary classifier with Grad-CAM overlay, uncertain prediction handling (<60% confidence), and full-stack deployment on Vercel + Render.',
    results:
      'Production-ready app with explainable predictions, PDF export, and live demo. Handles JPEG/PNG validation and request traceability.',
    techStack: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Vercel', 'Render'],
    dataset: 'Brain MRI (public benchmarks)',
    model: 'EfficientNetB0 + custom head',
    metrics: {
      'Binary Acc': '—',
      'Grad-CAM': 'Enabled',
    },
    highlights: ['Explainable AI', 'Production deployment', 'Grad-CAM overlay', 'PDF export'],
    reportUrl: null,
    notebookUrl: null,
    demoImages: [],
  },
}

/**
 * Get meta for a repo by name. Handles underscores/dashes.
 */
export function getProjectMeta(repoName) {
  return projectMeta[repoName] || projectMeta[repoName.replace(/-/g, '_')] || null
}
