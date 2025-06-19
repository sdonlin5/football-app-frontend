import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // loads tailwind, components and utilitgies
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)