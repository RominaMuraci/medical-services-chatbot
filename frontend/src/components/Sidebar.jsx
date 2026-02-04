import './Sidebar.css'

function Sidebar({ useRAG, onToggleRAG, onClearChat, hasMessages }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>⚙️ Settings</h3>
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={useRAG}
            onChange={(e) => onToggleRAG(e.target.checked)}
          />
          <span>Use RAG (Knowledge Base)</span>
        </label>
        <p className="setting-description">
          Enable to use knowledge base for better, context-aware answers
        </p>
      </div>

      <div className="sidebar-section">
        <h3>ℹ️ About</h3>
        <p className="about-text">
          This chatbot uses:
        </p>
        <ul className="about-list">
          <li><strong>DialoGPT</strong> for conversation</li>
          <li><strong>RAG</strong> with ChromaDB for knowledge</li>
          <li><strong>FastAPI</strong> backend</li>
        </ul>
      </div>

      {hasMessages && (
        <div className="sidebar-section">
          <button className="clear-button" onClick={onClearChat}>
            🗑️ Clear Chat
          </button>
        </div>
      )}
    </aside>
  )
}

export default Sidebar

