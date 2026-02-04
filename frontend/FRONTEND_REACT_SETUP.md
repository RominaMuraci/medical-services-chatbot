# React Frontend Setup Guide

## 🎯 Quick Setup (3 Steps)

### Step 1: Install Dependencies
```bash
cd frontend-react
npm install
```

### Step 2: Start API (in main project directory)
```bash
# In one terminal
python run_api.py
```

### Step 3: Start React App
```bash
# In another terminal (from frontend-react directory)
npm run dev
```

That's it! Open `http://localhost:3000` in your browser.

---

## 📋 Detailed Setup

### Prerequisites
- **Node.js 16+** - Download from [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Verify Installation
```bash
node --version  # Should be 16.0.0 or higher
npm --version   # Should be 7.0.0 or higher
```

### Installation Steps

1. **Navigate to React frontend directory:**
```bash
cd frontend-react
```

2. **Install dependencies:**
```bash
npm install
```

This will install:
- React 18
- Vite (build tool)
- Axios (HTTP client)

3. **Configure API URL (if needed):**
   - Default API URL is `http://localhost:8000`
   - To change it, create `.env` file:
```bash
# Copy example file
cp .env.example .env

# Edit .env and change:
VITE_API_URL=http://your-api-url:port
```

4. **Start development server:**
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

---

## 🏃 Running Both API and Frontend

### Option 1: Two Terminals (Recommended)

**Terminal 1 - API:**
```bash
cd C:\Users\Admin\Desktop\Chatbot
python run_api.py
```

**Terminal 2 - React:**
```bash
cd C:\Users\Admin\Desktop\Chatbot\frontend-react
npm run dev
```

### Option 2: Single Terminal (Windows PowerShell)

```powershell
# Start API in background
Start-Process python -ArgumentList "run_api.py" -WorkingDirectory "C:\Users\Admin\Desktop\Chatbot"

# Start React
cd frontend-react
npm run dev
```

---

## 🎨 Features Overview

### What You Get:
- ✅ **Modern React UI** - Clean, responsive design
- ✅ **Real-time Status** - See if API is connected
- ✅ **RAG Toggle** - Enable/disable knowledge base
- ✅ **Context Display** - See what context was used
- ✅ **Chat History** - All messages saved in session
- ✅ **Loading States** - Visual feedback
- ✅ **Error Handling** - User-friendly error messages
- ✅ **Mobile Responsive** - Works on all devices

### Component Structure:
```
App.jsx (Main)
├── Header.jsx (Status indicator)
├── Sidebar.jsx (Settings)
└── ChatWrapper
    ├── ChatContainer.jsx (Messages)
    └── ChatInput.jsx (Input form)
```

---

## 🔧 Customization

### Change Colors
Edit `src/components/Header.css`:
```css
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Change API URL
Edit `src/services/api.js`:
```javascript
const API_URL = 'http://your-api-url:port'
```

### Add New Features
- Components are in `src/components/`
- API calls are in `src/services/api.js`
- Styles are in component-specific CSS files

---

## 🐛 Common Issues

### Issue: "Cannot connect to API"
**Solution:**
1. Make sure API is running: `python run_api.py`
2. Check API URL matches (default: `http://localhost:8000`)
3. Check CORS in `src/api.py` allows your frontend origin

### Issue: "Port 3000 already in use"
**Solution:**
Edit `vite.config.js`:
```javascript
server: {
  port: 3001  // Use different port
}
```

### Issue: "npm install fails"
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Module not found"
**Solution:**
```bash
# Reinstall dependencies
npm install
```

---

## 📦 Production Build

### Build
```bash
npm run build
```

This creates optimized files in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Deploy
Upload the `dist/` folder to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting

**Remember:** Update API URL to production URL!

---

## 🚀 Next Steps

1. ✅ Start using the frontend
2. 🎨 Customize colors and styling
3. ➕ Add new features (file upload, voice input, etc.)
4. 🚀 Deploy to production

---

## 💡 Tips

- Use React DevTools browser extension for debugging
- Hot reload works automatically - just save files
- Check browser console for errors
- API status updates every 10 seconds automatically

Enjoy your React chatbot! 🎉

