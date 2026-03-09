import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen'
import App from './App'
import './index.css'

function Root() {
  const [loadingDone, setLoadingDone] = useState(false)

  if (!loadingDone) {
    return (
      <LoadingScreen onComplete={() => setLoadingDone(true)} />
    )
  }

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
