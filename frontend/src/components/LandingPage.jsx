import { useNavigate } from 'react-router-dom'
import './LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()

  const handleStartChat = () => {
    navigate('/chatbot')
  }

  return (
    <div className="landing-page">
      {/* Navigation Header */}
      <nav className="website-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="nav-logo-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8v8M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="nav-logo-text">Medical Services</span>
          </div>
          <div className="nav-links">
            <a href="#services" className="nav-link">Services</a>
            <a href="#appointments" className="nav-link">Appointments</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button className="nav-chat-button" onClick={handleStartChat}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Chat with Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="landing-hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Medical Services</h1>
          <p className="hero-subtitle">Your trusted healthcare partner providing comprehensive medical care</p>
          <div className="hero-buttons">
            <button className="hero-primary-button" onClick={handleStartChat}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Chat with Customer Service
            </button>
            <a href="tel:+355672839456" className="hero-secondary-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Call Us: +355672839456
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="landing-info">
        <div className="info-container">
          <section id="services" className="info-section">
            <h2 className="info-section-title">Our Services</h2>
            <p className="info-text">We offer comprehensive healthcare services including:</p>
            <ul className="info-list">
              <li>Primary care and family medicine</li>
              <li>Preventive care and annual checkups</li>
              <li>Chronic disease management (diabetes, hypertension, etc.)</li>
              <li>Women's health services</li>
              <li>Pediatric care</li>
              <li>Mental health counseling</li>
              <li>Laboratory services and diagnostic testing</li>
            </ul>
          </section>

          <section id="appointments" className="info-section">
            <h2 className="info-section-title">Appointment Scheduling</h2>
            <p className="info-text">Appointments can be scheduled:</p>
            <ul className="info-list">
              <li>Online through our patient portal</li>
              <li>By phone: <a href="tel:+355672839456" className="info-link">+355672839456</a></li>
              <li>In-person at our reception desk</li>
              <li>Same-day appointments available for urgent care</li>
            </ul>
            <p className="info-note">We recommend scheduling routine appointments 2-4 weeks in advance. Urgent care appointments are available on a walk-in basis.</p>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">Cancel or Reschedule Appointment</h2>
            <p className="info-text">To cancel or reschedule your appointment:</p>
            <ul className="info-list">
              <li>Call us at <a href="tel:+355672839456" className="info-link">+355672839456</a> at least 24 hours in advance</li>
              <li>Use the patient portal to cancel or reschedule online</li>
              <li>Contact us via email at <a href="mailto:info@medicalservices.com" className="info-link">info@medicalservices.com</a></li>
            </ul>
            <p className="info-note">Please cancel or reschedule at least 24 hours before your appointment to avoid cancellation fees.</p>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">Insurance and Payment</h2>
            <p className="info-text">We accept most major insurance plans including:</p>
            <ul className="info-list">
              <li>Medicare and Medicaid</li>
              <li>Blue Cross Blue Shield</li>
              <li>Aetna, Cigna, UnitedHealthcare</li>
              <li>Most HMO and PPO plans</li>
            </ul>
            <p className="info-text">For patients without insurance, we offer:</p>
            <ul className="info-list">
              <li>Self-pay options with payment plans</li>
              <li>Sliding scale fees based on income</li>
              <li>Financial assistance programs</li>
            </ul>
            <p className="info-note">Copays and deductibles vary by insurance plan. Please bring your insurance card to each visit.</p>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">Fees and Payment Options</h2>
            <p className="info-text">Our fees vary by service type:</p>
            <ul className="info-list">
              <li>Routine office visit: $150-$250</li>
              <li>Specialist consultation: $200-$350</li>
              <li>Urgent care visit: $175-$275</li>
              <li>Lab work and diagnostic tests: Varies by test</li>
            </ul>
            <p className="info-text">Payment options include:</p>
            <ul className="info-list">
              <li>Insurance coverage (copays apply)</li>
              <li>Self-pay with payment plans available</li>
              <li>Credit cards, debit cards, and cash accepted</li>
              <li>Financial assistance programs for qualifying patients</li>
            </ul>
            <p className="info-note">Contact our billing department at <a href="tel:+355672839456" className="info-link">+355672839456</a> for specific fee information.</p>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">Office Hours</h2>
            <div className="hours-grid">
              <div className="hours-item">
                <span className="hours-day">Monday - Friday:</span>
                <span className="hours-time">8:00 AM - 6:00 PM</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Saturday:</span>
                <span className="hours-time">9:00 AM - 2:00 PM (urgent care only)</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Sunday:</span>
                <span className="hours-time">Closed</span>
              </div>
              <div className="hours-item">
                <span className="hours-day">Holidays:</span>
                <span className="hours-time">Closed (emergency services available)</span>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">What to Bring to Your First Visit</h2>
            <ul className="info-list">
              <li>Photo ID</li>
              <li>Insurance card</li>
              <li>List of current medications</li>
              <li>Medical records from previous providers (if available)</li>
              <li>Completed new patient forms (available online)</li>
            </ul>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">Arrival Time for First Visit</h2>
            <p className="info-text">Please arrive 15-20 minutes early for your first appointment to complete registration and paperwork. If you have completed forms online, arrive 10 minutes early.</p>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">Prescription Refills</h2>
            <p className="info-text">Prescription refills can be requested:</p>
            <ul className="info-list">
              <li>Through the patient portal (fastest method)</li>
              <li>By calling our pharmacy line: <a href="tel:+355672839456" className="info-link">+355672839456</a></li>
              <li>During your appointment</li>
            </ul>
            <p className="info-note">Please allow 48 hours for prescription refills. Controlled substances require an office visit.</p>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">Test Results</h2>
            <p className="info-text">Test results are typically available:</p>
            <ul className="info-list">
              <li>Lab results: 2-3 business days</li>
              <li>Imaging results: 3-5 business days</li>
              <li>Biopsy results: 7-10 business days</li>
            </ul>
            <p className="info-note">Results are available through the patient portal or by phone. We will contact you immediately if results require urgent attention.</p>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">Emergency Situations</h2>
            <p className="info-text">For life-threatening emergencies, call <strong className="emergency-number">911</strong> immediately.</p>
            <p className="info-text">For urgent but non-life-threatening situations:</p>
            <ul className="info-list">
              <li>Visit our urgent care during office hours</li>
              <li>Call our 24/7 nurse hotline: <a href="tel:+355672839456" className="info-link">+355672839456</a></li>
              <li>Visit the nearest emergency room</li>
            </ul>
          </section>

          <section id="contact" className="info-section">
            <h2 className="info-section-title">Contact Information</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <strong>Main Office Phone:</strong>
                <a href="tel:+355672839456" className="info-link">+355672839456</a>
              </div>
              <div className="contact-item">
                <strong>Patient Portal:</strong>
                <a href="https://www.medicalservicesportal.com" target="_blank" rel="noopener noreferrer" className="info-link">www.medicalservicesportal.com</a>
              </div>
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:info@medicalservices.com" className="info-link">info@medicalservices.com</a>
              </div>
              <div className="contact-item">
                <strong>Office Address:</strong>
                <span>123 Medical Center Drive, Health City, HC 12345</span>
              </div>
            </div>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">Location and Address</h2>
            <p className="info-text">Our office is located at: <strong>123 Medical Center Drive, Health City, HC 12345</strong></p>
            <p className="info-text">We are easily accessible by public transportation and have free parking available. The office is located on the first floor of the Medical Center Building.</p>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">After-Hours Care</h2>
            <p className="info-text">Our 24/7 nurse hotline is available for medical questions and concerns. For emergencies, please call 911 or visit the nearest emergency room.</p>
          </section>

          <section className="info-section">
            <h2 className="info-section-title">Privacy and HIPAA</h2>
            <p className="info-text">We strictly adhere to HIPAA regulations. Your medical information is confidential and secure. We never share patient information without written consent.</p>
          </section>

          {/* Chatbot Integration Section */}
          <section className="chatbot-integration-section">
            <div className="chatbot-card">
              <div className="chatbot-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="chatbot-title">Need Help? Chat with Our Customer Service</h2>
              <p className="chatbot-description">Get instant answers to your questions about appointments, services, insurance, and more. Our AI-powered chatbot is available 24/7 to assist you.</p>
              <button className="chatbot-button" onClick={handleStartChat}>
                Start Chat Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="website-footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Medical Services</h3>
            <p>Your trusted healthcare partner</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a href="#services">Services</a>
            <a href="#appointments">Appointments</a>
            <a href="#contact">Contact</a>
            <button onClick={handleStartChat} className="footer-link-button">Chat Support</button>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Phone: <a href="tel:+355672839456">+355672839456</a></p>
            <p>Email: <a href="mailto:info@medicalservices.com">info@medicalservices.com</a></p>
            <p>123 Medical Center Drive<br />Health City, HC 12345</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Medical Services. All rights reserved. | Privacy Policy | HIPAA Compliance</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

