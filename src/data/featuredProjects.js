/**
 * Featured projects with category support.
 * Categories: language_models | computer_vision | nlp_audio | deployment | machine_learning
 *
 * To add a new project:
 * 1. Add an object with id, title, description, tags, githubUrl, notebookUrl (or homepage)
 * 2. Set category to one of the above
 * 3. Optional: modelTech for the "Model / Tech:" line
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
    category: 'machine_learning',
    title: 'Consumer Credit Risk Prediction',
    githubUrl: 'https://github.com/Abdrakib/credit-risk-predictor',
    notebookUrl: 'https://github.com/Abdrakib/credit-risk-predictor/blob/main/Customer_Credit_Risk_Prediction_Project%20(1).ipynb',
    tags: ['Machine Learning', 'XGBoost', 'Feature Engineering'],
    modelTech: 'Scikit-learn • XGBoost • Threshold Tuning',
    description: 'ML web app predicting credit default risk with interactive interface and trained model.',
  },
  {
    id: 'speech-emotion-recognition',
    category: 'nlp_audio',
    title: 'Speech Emotion Recognition (RAVDESS)',
    githubUrl: 'https://github.com/Abdrakib/AI_ML-Portfolio/tree/main/02_deep_learning/Speech_Emotion_Recognition',
    notebookUrl: 'https://github.com/Abdrakib/AI_ML-Portfolio/blob/main/02_deep_learning/Speech_Emotion_Recognition/Speech_emotion_classification_project%20(1).ipynb',
    tags: ['Audio ML', 'Transformers', 'NLP'],
    modelTech: 'Transformers • Audio Features • RAVDESS',
    description: 'Classify emotions from speech using transformer-based audio models.',
  },
  {
    id: 'ai-cs-tutor',
    category: 'deployment',
    title: 'AI Computer Science Tutor',
    githubUrl: 'https://github.com/Abdrakib/ai-cs-tutor',
    tags: ['AI', 'Retrieval', 'Web Search', 'Education'],
    modelTech: 'RAG • Web Search • Programming Q&A',
    description: 'AI-powered CS tutor using retrieval and web search to answer programming and CS questions.',
  },
  {
    id: 'min-gpt-from-scratch',
    category: 'language_models',
    title: 'Mini GPT from Scratch',
    githubUrl: 'https://github.com/Abdrakib/AI_ML-Portfolio',
    tags: ['Language Models', 'Transformers', 'PyTorch'],
    modelTech: 'PyTorch • GPT • Training from scratch',
    description: 'Training a small language model from scratch.',
  },
]
