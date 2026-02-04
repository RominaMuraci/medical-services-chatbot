import Message from './Message'
import './ChatContainer.css'

function ChatContainer({ messages, isLoading, messagesEndRef }) {
  if (messages.length === 0 && !isLoading) {
    return (
      <div className="chat-container">
        <div className="welcome-message">
          👋 Welcome! How can I help you today?
        </div>
        <div ref={messagesEndRef} />
      </div>
    )
  }

  return (
    <div className="chat-container">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      {isLoading && (
        <div className="message assistant">
          <div className="message-content loading">
            <span>Thinking</span>
            <span className="loading-dots">...</span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default ChatContainer

