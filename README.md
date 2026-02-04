# Medical Services Chatbot

This repository contains a **full-stack chatbot** for **Medical Services**.  
It helps patients with:

- Appointment scheduling
- Prescription refills
- Test results inquiries
- Insurance and billing questions
- General medical service information

---

## Project Structure


- **frontend/**: Contains all frontend code, React components, CSS, and Streamlit scripts.  
- **backend/**: Contains backend code, including Python logic, API endpoints, and the Retrieval-Augmented Generation (RAG) system.  

---

## Features

- **Intelligent conversation** using DialoGPT  
- **Semantic search** using Sentence Transformers embeddings  
- **Vector database** for storing medical knowledge (ChromaDB)  
- **FastAPI backend** for API endpoints  
- **Frontend interface** for user interaction  

---

## How to Run

### Backend

```bash
cd backend
pip install -r requirements.txt
python run_python_api.py
cd frontend

# If using React:
npm install
npm run dev

# If using Streamlit:
streamlit run frontend_streamlit.py
