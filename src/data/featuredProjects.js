/**
 * Featured projects with category support.
 * Categories: language_models | computer_vision | nlp_audio | deployment | machine_learning
 *
 * To add a new project:
 * 1. Add an object with id, title, description, tags, githubUrl, notebookUrl (or homepage)
 * 2. Set category to one of the above
 * 3. Optional: modelTech for the "Model / Tech:" line
 * 4. Set **addedAt** to the calendar day you add it (ISO `YYYY-MM-DD`). The UI sorts
 *    newest-first, so new entries automatically appear at the top—you can append anywhere in this file.
 */

export const featuredProjectCategories = [
  { id: 'language_models', label: 'Mini GPT / Language Models' },
  { id: 'computer_vision', label: 'Computer Vision' },
  { id: 'nlp_audio', label: 'NLP / Audio AI' },
  { id: 'deployment', label: 'Deployment / Full-stack AI apps' },
  { id: 'machine_learning', label: 'Machine Learning' },
]

export const featuredProjects = [
  {
    id: 'brain-tumor-detection',
    addedAt: '2024-09-01',
    category: 'computer_vision',
    title: 'Brain Tumor Detection (MRI)',
    githubUrl: 'https://github.com/Abdrakib/brain-tumor-ai-app',
    demoUrl: 'https://ai-ml-portfolio-theta.vercel.app',
    notebookUrl: 'https://github.com/Abdrakib/AI_ML-Portfolio/tree/main/03_computer_vision/Brain_Tumor_Detection',
    tags: ['Computer Vision', 'Deep Learning', 'Grad-CAM'],
    modelTech: 'TensorFlow • CNN • Grad-CAM',
    description: 'Deep learning web app for brain tumor detection from MRI scans with Grad-CAM explainability.',
  },
  {
    id: 'consumer-credit-risk',
    addedAt: '2025-03-10',
    category: 'machine_learning',
    title: 'Consumer Credit Risk Prediction',
    githubUrl: 'https://github.com/Abdrakib/credit-risk-predictor',
    demoUrl: 'https://credit-risk-predictor-mpt9.onrender.com',
    notebookUrl: 'https://github.com/Abdrakib/credit-risk-predictor/blob/main/Customer_Credit_Risk_Prediction_Project%20(1).ipynb',
    tags: ['Machine Learning', 'XGBoost', 'Feature Engineering'],
    modelTech: 'Scikit-learn • XGBoost • Threshold Tuning',
    description: 'ML web app predicting credit default risk with interactive interface and trained model.',
  },
  {
    id: 'explainable-ml-pipeline-agent',
    addedAt: '2026-05-04',
    category: 'machine_learning',
    title: 'Explainable ML Pipeline Agent',
    githubUrl: 'https://github.com/Abdrakib/Explainable_ML-Pipeline-Agent',
    demoUrl: 'https://huggingface.co/spaces/Abdourakib/explainable-ml-pipeline-analysis-agent',
    tags: ['Explainable AI', 'AutoML', 'Pipelines', 'Qwen'],
    modelTech: 'Qwen 2.5 • Scikit-learn • XGBoost • SHAP • Gradio',
    description:
      'Full ML pipeline on tabular CSV data with plain-English explanations for every step—hosted demo via Hugging Face.',
  },
  {
    id: 'visual-analyst-agent',
    addedAt: '2026-05-06',
    category: 'computer_vision',
    title: 'Visual Analyst Agent',
    githubUrl: 'https://github.com/Abdrakib/visual-analyst-agent',
    demoUrl: 'https://huggingface.co/spaces/Abdourakib/visual-analyst-agent',
    tags: ['Computer Vision', 'Gemini', 'Streamlit', 'Analytics'],
    modelTech: 'Google Gemini • Streamlit • Plotly',
    description:
      'Analyzes chart, table, and dashboard images: trend analysis, structured extraction, and interactive insights.',
  },
  {
    id: 'speech-emotion-recognition',
    addedAt: '2026-04-18',
    category: 'nlp_audio',
    title: 'Speech Emotion Recognition (RAVDESS)',
    githubUrl: 'https://github.com/Abdrakib/Speech-emotion-recognition',
    demoUrl: 'https://huggingface.co/spaces/Abdourakib/Speech-emotion-demo',
    tags: ['Audio ML', 'HuBERT', 'Gradio', 'RAVDESS'],
    modelTech: 'HuBERT • RAVDESS • Gradio',
    description: 'Fine-tuned HuBERT for speech emotion recognition—upload or record audio in the live Gradio demo.',
  },
  {
    id: 'ai-cs-tutor',
    addedAt: '2025-11-20',
    category: 'deployment',
    title: 'AI Computer Science Tutor',
    githubUrl: 'https://github.com/Abdrakib/ai-cs-tutor',
    demoUrl: 'https://huggingface.co/spaces/Abdourakib/ai-computer-science-tutor',
    tags: ['AI', 'Retrieval', 'Web Search', 'Education'],
    modelTech: 'RAG • Web Search • Programming Q&A',
    description: 'AI-powered CS tutor using retrieval and web search to answer programming and CS questions.',
  },
  {
    id: 'gpt-from-scratch',
    addedAt: '2026-05-01',
    category: 'language_models',
    title: 'TinyStories GPT-2 (124M) From Scratch',
    githubUrl: 'https://github.com/Abdrakib/gpt-from-scratch',
    demoUrl: 'https://huggingface.co/Abdourakib/tinystories-gpt2-124m',
    tags: ['Language Models', 'PyTorch', 'Hugging Face', 'TinyStories'],
    modelTech: 'GPT-2 • PyTorch • 124M params • HF Hub',
    description:
      'GPT-2 trained from scratch on 1M children’s stories—full pipeline and live text generation on Hugging Face.',
  },
]

function cmpFeaturedByDateNewestFirst(a, b) {
  const ta = new Date(a.addedAt || 0).getTime()
  const tb = new Date(b.addedAt || 0).getTime()
  return tb - ta
}

/** Newest `addedAt` first—use this in the UI instead of iterating `featuredProjects` directly. */
export function getFeaturedProjectsForDisplay() {
  return [...featuredProjects].sort(cmpFeaturedByDateNewestFirst)
}
