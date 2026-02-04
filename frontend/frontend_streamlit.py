"""
Streamlit Frontend për Chatbot
Easier për development dhe demos
"""
import streamlit as st
import requests
import time

# Configuration
API_URL = "http://localhost:8000"

# Page config
st.set_page_config(
    page_title="Customer Service Chatbot",
    page_icon="💬",
    layout="wide"
)

# Initialize session state
if "messages" not in st.session_state:
    st.session_state.messages = []
if "api_available" not in st.session_state:
    st.session_state.api_available = False

# Check API health
@st.cache_data(ttl=10)
def check_api_health():
    try:
        response = requests.get(f"{API_URL}/health", timeout=2)
        return response.status_code == 200
    except:
        return False

# Send message to API
def send_message(message, use_rag=True):
    try:
        response = requests.post(
            f"{API_URL}/chat",
            json={"message": message, "use_rag": use_rag},
            timeout=30
        )
        if response.status_code == 200:
            return response.json()
        else:
            return {"response": f"Error: {response.status_code}", "context_used": None}
    except requests.exceptions.ConnectionError:
        return {"response": "❌ Cannot connect to API. Make sure the API is running (python run_api.py)", "context_used": None}
    except Exception as e:
        return {"response": f"Error: {str(e)}", "context_used": None}

# Main UI
st.title("💬 Customer Service Chatbot")
st.markdown("Ask me anything about our services, policies, or support!")

# Sidebar for settings
with st.sidebar:
    st.header("⚙️ Settings")
    use_rag = st.checkbox("Use RAG (Knowledge Base)", value=True, help="Enable to use knowledge base for better answers")
    
    st.divider()
    st.header("📊 API Status")
    api_status = check_api_health()
    if api_status:
        st.success("✅ API Connected")
    else:
        st.error("❌ API Not Available")
        st.info("Run: `python run_api.py`")
    
    st.divider()
    st.header("ℹ️ About")
    st.markdown("""
    This chatbot uses:
    - **DialoGPT** for conversation
    - **RAG** with ChromaDB for knowledge
    - **FastAPI** backend
    """)

# Display chat messages
chat_container = st.container()
with chat_container:
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])
            if message.get("context"):
                with st.expander("📚 Context Used"):
                    st.text(message["context"])

# Chat input
if prompt := st.chat_input("Type your message here..."):
    # Add user message
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)
    
    # Get response
    with st.chat_message("assistant"):
        with st.spinner("Thinking..."):
            result = send_message(prompt, use_rag=use_rag)
            response = result.get("response", "Sorry, I couldn't generate a response.")
            context = result.get("context_used")
        
        st.markdown(response)
        
        if context:
            with st.expander("📚 Context Used"):
                st.text(context)
    
    # Add assistant message
    st.session_state.messages.append({
        "role": "assistant",
        "content": response,
        "context": context
    })

# Clear chat button
if st.session_state.messages:
    if st.button("🗑️ Clear Chat"):
        st.session_state.messages = []
        st.rerun()

