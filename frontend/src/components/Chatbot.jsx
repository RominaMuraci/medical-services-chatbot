import { useState, useEffect, useRef } from 'react'
import ChatContainer from './ChatContainer'
import ChatInput from './ChatInput'
import Header from './Header'
import Sidebar from './Sidebar'
import { checkAPIHealth, sendMessage } from '../services/api'
import '../App.css'

function Chatbot() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [apiStatus, setApiStatus] = useState('checking')
  const [useRAG, setUseRAG] = useState(true)
  const messagesEndRef = useRef(null)

  // Check API health on mount and periodically
  useEffect(() => {
    const checkHealth = async () => {
      const status = await checkAPIHealth()
      setApiStatus(status ? 'connected' : 'disconnected')
    }

    checkHealth()
    const interval = setInterval(checkHealth, 10000) // Check every 10 seconds

    return () => clearInterval(interval)
  }, [])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Clean response text by intelligently removing context/metadata prefixes
  // This works generically for any industry or domain
  const cleanResponse = (text) => {
    if (!text) return text
    
    let cleaned = text.trim()
    
    // Strategy: Find the transition point from metadata/context to actual response
    // Metadata/context typically has these characteristics:
    // 1. All uppercase text
    // 2. No proper sentence structure
    // 3. Appears before natural language content
    
    // Find where natural language content starts
    // Natural language indicators:
    // - Mixed case (not all caps)
    // - Starts with a capital letter followed by lowercase
    // - Contains sentence structure (punctuation, articles, etc.)
    
    const findNaturalLanguageStart = (str) => {
      // Look for patterns that indicate natural language:
      // 1. Capital letter followed by lowercase (sentence start)
      // 2. Common sentence starters (articles, pronouns, etc.)
      // 3. Proper sentence structure
      
      // Pattern: Find where we transition from all-caps/metadata to natural language
      // Look for: [ALL CAPS] followed by [Capital Letter][lowercase] (actual sentence)
      const naturalLanguagePattern = /([A-Z\s]{10,}?)([A-Z][a-z])/
      const match = str.match(naturalLanguagePattern)
      
      if (match && match.index !== undefined) {
        // Check if the part before is mostly/all caps (metadata)
        const beforePart = match[1]
        const afterPart = str.substring(match.index + match[1].length)
        
        // If before part is all/mostly caps and after part looks like natural language
        const isMetadata = /^[A-Z\s]{8,}$/.test(beforePart.trim())
        const isNaturalLanguage = /^[A-Z][a-z]/.test(afterPart.trim())
        
        if (isMetadata && isNaturalLanguage) {
          return match.index + match[1].length
        }
      }
      
      // Alternative: Find first proper sentence start (capital + lowercase)
      // that comes after potential metadata
      const sentenceStartPattern = /([A-Z\s]{8,}?)([A-Z][a-z][a-z]+)/
      const sentenceMatch = str.match(sentenceStartPattern)
      
      if (sentenceMatch && sentenceMatch.index !== undefined) {
        const beforePart = sentenceMatch[1]
        // If the before part is all caps and reasonably long, it's likely metadata
        if (/^[A-Z\s]{10,}$/.test(beforePart.trim())) {
          return sentenceMatch.index + sentenceMatch[1].length
        }
      }
      
      return -1
    }
    
    // Find the natural language start point
    const naturalStart = findNaturalLanguageStart(cleaned)
    
    if (naturalStart > 0 && naturalStart < cleaned.length * 0.7) {
      // Found a transition point, use content from there
      cleaned = cleaned.substring(naturalStart).trim()
    } else {
      // Fallback: Remove all-caps prefixes at the start
      // If text starts with all caps followed by mixed case, remove the all-caps part
      const allCapsPrefix = /^([A-Z][A-Z\s]{8,}?)(\s+[A-Z][a-z])/
      cleaned = cleaned.replace(allCapsPrefix, '$2').trim()
    }
    
    // Final cleanup: Remove any remaining all-caps text at the very start
    // that's clearly metadata (no punctuation, no sentence structure)
    const metadataPrefix = /^([A-Z][A-Z\s]{10,}?)(?=\s+[A-Z][a-z])/
    const metadataMatch = cleaned.match(metadataPrefix)
    if (metadataMatch) {
      // Check if it looks like metadata (all caps, no punctuation, no articles)
      const potentialMetadata = metadataMatch[1]
      const hasNoPunctuation = !/[.!?,;:]/.test(potentialMetadata)
      const hasNoArticles = !/\b(THE|A|AN|IS|ARE|WAS|WERE)\b/i.test(potentialMetadata)
      
      if (hasNoPunctuation && hasNoArticles) {
        cleaned = cleaned.substring(metadataMatch[1].length).trim()
      }
    }
    
    return cleaned.trim()
  }

  const handleSendMessage = async (message) => {
    if (!message.trim() || isLoading) return

    // Add user message
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: message,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await sendMessage(message, useRAG)
      
      // Clean the response to remove any embedded context
      const cleanedContent = cleanResponse(response.response || response.message || '')
      
      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: cleanedContent,
        context: response.context_used,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: `❌ Error: ${error.message}. Make sure the API is running (python run_api.py)`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleClearChat = () => {
    setMessages([])
  }

  return (
    <div className="app">
      <Header apiStatus={apiStatus} />
      <div className="app-body">
        <Sidebar 
          useRAG={useRAG} 
          onToggleRAG={setUseRAG}
          onClearChat={handleClearChat}
          hasMessages={messages.length > 0}
        />
        <div className="chat-wrapper">
          <ChatContainer 
            messages={messages} 
            isLoading={isLoading}
            messagesEndRef={messagesEndRef}
          />
          <ChatInput 
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            disabled={apiStatus !== 'connected'}
          />
        </div>
      </div>
    </div>
  )
}

export default Chatbot

