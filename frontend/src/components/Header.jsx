import { useNavigate } from 'react-router-dom'
import './Header.css'

function Header({ apiStatus }) {
  const navigate = useNavigate()

  const handleBackToLanding = () => {
    navigate('/medical-services')
  }
  const getStatusColor = () => {
    switch (apiStatus) {
      case 'connected':
        return '#44ff44'
      case 'disconnected':
        return '#ff4444'
      default:
        return '#ffaa00'
    }
  }

  const getStatusText = () => {
    switch (apiStatus) {
      case 'connected':
        return 'API Connected'
      case 'disconnected':
        return 'API Not Available - Run: python run_api.py'
      default:
        return 'Checking API...'
    }
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <button className="back-button" onClick={handleBackToLanding} title="Back to Home">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="logo-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">Medical Services</span>
          </div>
        </div>
        <div className="header-main">
          <h1>💬 Customer Service Chatbot</h1>
          <p>Ask me anything about our services, policies, or support!</p>
          <div className="status">
            <span 
              className="status-indicator" 
              style={{ backgroundColor: getStatusColor() }}
            />
            <span className="status-text">{getStatusText()}</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

