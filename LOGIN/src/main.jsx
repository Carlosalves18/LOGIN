import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './App/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login/>
  </StrictMode>,
)
