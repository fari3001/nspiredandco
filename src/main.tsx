import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
import { HashRouter } from 'react-router-dom'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </StrictMode>,
// )



// Get root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

// Render the app
createRoot(rootElement).render(
  <StrictMode>
    <HashRouter>
      {/* You can temporarily render a debug message inside App */}
      {/* <App> */}
        <p>hello — debug mode</p>
      {/* </App> */}
    </HashRouter>
  </StrictMode>
);
