import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Chatbot from './components/Chatbot'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/medical-services" element={<LandingPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/" element={<Navigate to="/medical-services" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

