# Frontend Guide

This project includes **two frontend options** for your chatbot. Choose the one that best fits your needs!

## 🎨 Frontend Options

### 1. Streamlit Frontend (Recommended for Quick Start)

**Best for:**
- Quick demos and prototypes
- Python developers
- No build tools needed
- Built-in UI components

**Features:**
- ✅ Clean, modern interface
- ✅ Real-time API status checking
- ✅ Toggle RAG on/off
- ✅ Shows context used for answers
- ✅ Chat history
- ✅ Easy to customize

**How to run:**
```bash
# Make sure API is running first
python run_api.py

# In another terminal, run:
python run_frontend_streamlit.py
# or
streamlit run frontend_streamlit.py
```

Then open `http://localhost:8501` in your browser.

---

### 2. HTML/JavaScript Frontend (Modern Web App)

**Best for:**
- Production deployments
- Custom styling needs
- Better mobile experience
- Traditional web app feel

**Features:**
- ✅ Beautiful gradient design
- ✅ Responsive layout
- ✅ Smooth animations
- ✅ Real-time API status
- ✅ Context toggle
- ✅ No dependencies (pure HTML/CSS/JS)

**How to run:**

**Method 1: Direct file open**
1. Start API: `python run_api.py`
2. Open `frontend/index.html` directly in your browser
   - Note: Some browsers may block CORS. Use Method 2 if you see errors.

**Method 2: Local server (Recommended)**
```bash
# Start API first
python run_api.py

# In another terminal, start a local server:

# Option A: Python HTTP server
python -m http.server 8080 -d frontend

# Option B: Node.js (if you have it)
cd frontend && npx serve

# Option C: PHP (if you have it)
cd frontend && php -S localhost:8080
```

Then open `http://localhost:8080` in your browser.

---

## 🔧 Configuration

### Change API URL

**Streamlit:** Edit `frontend_streamlit.py`
```python
API_URL = "http://localhost:8000"  # Change this
```

**HTML/JS:** Edit `frontend/script.js`
```javascript
const API_URL = 'http://localhost:8000';  // Change this
```

### Customize Styling

**Streamlit:** Edit `frontend_streamlit.py` - Streamlit has built-in theming

**HTML/JS:** Edit `frontend/style.css` - Full CSS control

---

## 🚀 Deployment

### Streamlit
- Deploy to Streamlit Cloud: https://streamlit.io/cloud
- Or use any Python hosting (Heroku, Railway, etc.)

### HTML/JS
- Deploy to any static hosting:
  - Netlify
  - Vercel
  - GitHub Pages
  - AWS S3 + CloudFront
  - Any web server

**Important:** Update the API URL to point to your production API!

---

## 📱 Mobile Support

Both frontends are mobile-responsive:
- **Streamlit:** Built-in responsive design
- **HTML/JS:** Custom responsive CSS included

---

## 🐛 Troubleshooting

### "Cannot connect to API"
- Make sure `python run_api.py` is running
- Check the API URL matches your API port (default: 8000)
- Check CORS settings in `src/api.py`

### CORS Errors (HTML/JS)
- Use a local server (Method 2) instead of opening file directly
- Or update CORS settings in `src/api.py` to allow your domain

### Streamlit not starting
- Make sure Streamlit is installed: `pip install streamlit`
- Check if port 8501 is already in use

---

## 💡 Tips

1. **For Development:** Use Streamlit - faster iteration
2. **For Production:** Use HTML/JS - better performance, smaller bundle
3. **For Demos:** Both work great! Streamlit is easier to show off quickly
4. **For Customization:** HTML/JS gives you full control

---

## 🎨 Customization Ideas

### Streamlit
- Add sidebar widgets for settings
- Add file upload for knowledge base
- Add chat export functionality
- Custom theme colors

### HTML/JS
- Add dark mode toggle
- Add message timestamps
- Add typing indicators
- Add emoji reactions
- Add voice input (Web Speech API)

---

Enjoy your chatbot frontend! 🎉

