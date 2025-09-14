import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
// import App from './App'
// import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <p>hello</p>
    {/* <HashRouter>
      <App />
    </HashRouter> */}
  </StrictMode>,
)
