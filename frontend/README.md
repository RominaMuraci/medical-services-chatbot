# Chatbot për Shërbimin e Klientëve

Një chatbot i thjeshtë dhe i fuqishëm i zhvilluar me **Transformers pre-trained** për shërbimin e klientëve. Nuk kërkon trajnim kompleks - funksionon menjëherë!

## 🚀 Karakteristika

- ✅ **Pre-trained Models** - Përdor modele të trajnuar nga Hugging Face (DialoGPT)
- ✅ **RAG (Retrieval-Augmented Generation)** - Përgjigje bazuar në knowledge base
- ✅ **Fast Setup** - Funksionon në pak minuta, pa trajnim të gjatë
- ✅ **API Ready** - FastAPI backend i gatshëm
- ✅ **Streamlit Frontend** - Interface i thjeshtë dhe i bukur
- ✅ **Easy to Customize** - Lehtë për t'u modifikuar për industrinë tënde

## 📋 Kërkesat

- Python 3.8 ose më i lartë
- GPU (opsionale, por e rekomanduar për trajnim)
- 8GB+ RAM
- 10GB+ hapësirë disk për modelet

## 🛠️ Instalimi i Shpejtë

1. Krijoni një virtual environment:
```bash
python -m venv venv
venv\Scripts\activate  # Në Windows
# ose: source venv/bin/activate  # Në Linux/Mac
```

2. Instaloni dependencat:
```bash
pip install -r requirements_simple.txt
```

## 🎯 Përdorimi i Shpejtë

### 1. Testo Chatbotin Bazë
```bash
python run_chatbot.py
```

### 2. Testo RAG
```bash
python run_rag_test.py
```

### 3. Nis API-n
```bash
python run_api.py
```
Pastaj hap browser në `http://localhost:8000/docs` për API documentation.

### 4. Nis Frontend

**Option A: React Frontend (Recommended for React developers) ⚛️**
```bash
cd frontend-react
npm install
npm run dev
```
Frontend do të jetë në `http://localhost:3000`
Shiko `FRONTEND_REACT_SETUP.md` për detaje.

**Option B: Streamlit Frontend (Quick start)**
```bash
python run_frontend_streamlit.py
# ose
streamlit run frontend_streamlit.py
```
Frontend do të jetë në `http://localhost:8501`

**Option C: HTML/JavaScript Frontend (Simple web app)**
1. Nis API-n: `python run_api.py`
2. Hap `frontend/index.html` në browser-in tënd
3. Ose përdor një local server:
```bash
# Python
python -m http.server 8080 -d frontend
```
Pastaj hap `http://localhost:8080`

## 📁 Struktura e Projektit

```
Chatbot/
├── src/
│   ├── chatbot.py          # Chatbot me DialoGPT
│   ├── rag.py              # RAG implementation
│   └── api.py              # FastAPI backend
├── data/                    # Të dhënat (krijo manualisht)
├── app.py                   # Streamlit frontend
├── run_chatbot.py          # Test chatbot
├── run_rag_test.py         # Test RAG
├── run_api.py              # Nis API
├── requirements_simple.txt  # Dependencies
├── setup_knowledge_base.py  # Setup knowledge base
├── STEP_BY_STEP.md         # Udhëzues hap-pas-hapi ⭐
├── PYCHARM_SETUP.md        # Setup për PyCharm 🐍
├── START_HERE.md           # Filloni këtu
├── QUICK_START.md          # Udhëzues i shpejtë
└── PLAN_SIMPLE.md          # Plan i thjeshtë
```

## 📚 Dokumentacioni

- **STEP_BY_STEP.md** ⭐ - **Udhëzues hap-pas-hapi i plotë** (Lexo këtë së pari!)
- **PYCHARM_SETUP.md** 🐍 - **Hapja e projektit në PyCharm** (Për PyCharm users!)
- **START_HERE.md** - Udhëzues i shpejtë për fillim
- **QUICK_START.md** - Udhëzues i detajuar për fillim
- **PLAN_SIMPLE.md** - Plan i thjeshtë për zhvillim

## 🤝 Kontribut

Kontributet janë të mirëpritura! Ju lutemi hapni një issue ose pull request.

## 📄 Licenca

[Specifikoni licencën tuaj këtu]

## 👥 Autorët

[Emri juaj/ekipit]

