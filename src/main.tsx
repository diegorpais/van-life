import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/* import App from './App.tsx' */
/* import Home from './pages/Home/Home.tsx'; */
import About from './pages/About/About.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
)
