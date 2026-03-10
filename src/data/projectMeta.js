/**
 * Extra metadata for projects displayed in Lab Mode and the Case Study Modal.
 * Keys must match GitHub repo names exactly.
 *
 * Add entries for projects you want to showcase with detailed info.
 */
export const projectMeta = {
  'brain-tumor-ai-app': {
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
    githubUrl: 'https://github.com/Abdrakib/brain-tumor-ai-app',
    demoUrl: 'https://ai-ml-portfolio-theta.vercel.app',
    reportUrl: null,
    notebookUrl: null,
    demoImages: [],
  },
  'credit-risk-predictor': {
    overview:
      'ML web app predicting customer credit default risk with an interactive form, risk visualization, and explainability panel.',
    problem:
      'Lenders need fast, interpretable credit risk assessment for loan applicants.',
    approach:
      'Trained scikit-learn model with financial features; deployed FastAPI backend and dark-theme UI with tooltips and prediction history.',
    results:
      'Production-ready API with Low/Medium/High risk classification, color-coded results, and rule-based explainability.',
    techStack: ['Python', 'FastAPI', 'Scikit-learn', 'Pandas', 'NumPy', 'Render'],
    dataset: 'Consumer credit data',
    model: 'Scikit-learn classifier',
    metrics: { Risk: 'Low / Medium / High' },
    highlights: ['Interactive form', 'Risk visualization', 'Explainability panel', 'Prediction history'],
    githubUrl: 'https://github.com/Abdrakib/credit-risk-predictor',
    demoUrl: 'https://credit-risk-predictor-mpt9.onrender.com',
    reportUrl: null,
    notebookUrl: 'https://github.com/Abdrakib/credit-risk-predictor/blob/main/Customer_Credit_Risk_Prediction_Project%20(1).ipynb',
    demoImages: [],
  },
  'ai-cs-tutor': {
    overview:
      'AI-powered computer science tutor using retrieval and web search to answer programming and CS questions.',
    problem: 'Students need on-demand help with programming and computer science concepts.',
    approach:
      'Combines retrieval-augmented generation with web search to provide accurate, context-aware answers.',
    results: 'Interactive tutor for programming questions and CS topics.',
    techStack: ['Python', 'RAG', 'Web Search', 'AI/LLM'],
    dataset: null,
    model: null,
    metrics: {},
    highlights: ['Retrieval-augmented', 'Web search', 'Programming Q&A'],
    reportUrl: null,
    notebookUrl: null,
    demoImages: [],
  },
  'AI_ML-Portfolio': {
    overview:
      '50+ notebook learning repository covering Machine Learning, Deep Learning, Computer Vision, NLP, and Data Science.',
    problem: 'Hands-on learning and experimentation across AI/ML domains.',
    approach:
      'Organized notebooks by domain (01–07 folders) with step-by-step implementations, datasets, and explanations. Ready for Colab or Jupyter.',
    results: 'Portfolio of experiments and learning projects across ML, CV, NLP, and more.',
    techStack: ['Python', 'Jupyter', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas'],
    dataset: 'Various (see notebooks)',
    model: 'Various',
    metrics: {},
    highlights: ['50+ notebooks', 'Multi-domain', 'Colab-ready'],
    reportUrl: null,
    notebookUrl: 'https://github.com/Abdrakib/AI_ML-Portfolio',
    demoImages: [],
  },
}

/**
 * Get meta for a repo by name. Handles underscores/dashes.
 */
export function getProjectMeta(repoName) {
  return projectMeta[repoName] || projectMeta[repoName.replace(/-/g, '_')] || null
}
