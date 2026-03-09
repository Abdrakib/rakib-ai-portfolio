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
    githubUrl: 'https://github.com/Abdrakib/AI_ML-Portfolio/tree/main/03_computer_vision/Brain_Tumor_Detection',
    notebookUrl: 'https://github.com/Abdrakib/AI_ML-Portfolio/blob/main/03_computer_vision/Brain_Tumor_Detection/Brain_tumor_(1)_prediction_project.ipynb',
    tags: ['Computer Vision', 'Deep Learning', 'Grad-CAM'],
    modelTech: 'TensorFlow • CNN • Grad-CAM',
    description: 'End-to-end MRI tumor classification with explainability.',
  },
  {
    id: 'consumer-credit-risk',
    category: 'machine_learning',
    title: 'Consumer Credit Risk Prediction',
    githubUrl: 'https://github.com/Abdrakib/AI_ML-Portfolio/tree/main/01_machine_learning/Consumer_Credit_Risk_Prediction',
    notebookUrl: 'https://github.com/Abdrakib/AI_ML-Portfolio/blob/main/01_machine_learning/Consumer_Credit_Risk_Prediction/Customer_Credit_Risk_Prediction_Project.ipynb',
    tags: ['Machine Learning', 'XGBoost', 'Feature Engineering'],
    modelTech: 'Scikit-learn • XGBoost • Threshold Tuning',
    description: 'Predict credit risk and identify high-risk vs low-risk borrowers.',
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
    id: 'min-gpt-from-scratch',
    category: 'language_models',
    title: 'Mini GPT from Scratch',
    githubUrl: 'https://github.com/Abdrakib/min_gpt_from_sctratch',
    tags: ['Language Models', 'Transformers', 'PyTorch'],
    modelTech: 'PyTorch • GPT • Training from scratch',
    description: 'Training a small language model from scratch.',
  },
]
