import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import GameMap from './components/map-stuff/Map.tsx'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    <App />
    {/*<Map />*/}
  </StrictMode>,
)
