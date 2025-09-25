# 🚀 MarvelTech - Quick Start Guide for GitHub

## 🌐 How to Run MarvelTech Project from GitHub

### 📋 Prerequisites
- Git installed
- Node.js 18+ installed
- Java 17+ installed
- Maven 3.6+ installed

---

## 🚀 **Method 1: GitHub Codespaces (Easiest)**

1. **Go to your repository**: https://github.com/prasanthkk123/marvel-tech
2. **Click the green "Code" button**
3. **Select "Codespaces" tab**
4. **Click "Create codespace on main"**
5. **Wait for the environment to load**
6. **In the terminal, run:**
   ```bash
   # Start backend
   cd backend && mvn spring-boot:run &
   
   # Start frontend
   cd frontend && npm install && npm start
   ```

✅ **Your app will be running in the browser automatically!**

---

## 🚀 **Method 2: Clone and Run Locally**

### Step 1: Clone the Repository
```bash
git clone https://github.com/prasanthkk123/marvel-tech.git
cd marvel-tech
```

### Step 2: Start Backend
```bash
cd backend
mvn spring-boot:run
```
Backend will be available at: http://localhost:8080

### Step 3: Start Frontend (New Terminal)
```bash
cd frontend
npm install
npm start
```
Frontend will be available at: http://localhost:3000

---

## 🚀 **Method 3: GitHub Pages (Frontend Only)**

1. **Go to repository Settings**
2. **Scroll to "Pages" section**
3. **Select "GitHub Actions" as source**
4. **The workflow will automatically deploy your frontend**
5. **Visit**: https://prasanthkk123.github.io/marvel-tech

---

## 🚀 **Method 4: One-Click Deploy**

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/prasanthkk123/marvel-tech)

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prasanthkk123/marvel-tech)

### Deploy to Railway
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/zUcpux)

---

## 🔧 **Development Commands**

### Backend Commands
```bash
cd backend
mvn spring-boot:run          # Start development server
mvn clean package           # Build JAR file
mvn test                    # Run tests
```

### Frontend Commands
```bash
cd frontend
npm start                   # Start development server
npm run build              # Build for production
npm test                   # Run tests
```

---

## 🌟 **Quick Demo URLs**

Once running, visit:
- 🏠 **Homepage**: http://localhost:3000
- 🔧 **Products**: http://localhost:3000/#products
- 🏢 **About Us**: http://localhost:3000/#about
- 📧 **Contact**: http://localhost:3000/#contact
- 🔍 **Backend Health**: http://localhost:8080/api/health

---

## 📱 **Mobile Access**

To access from mobile devices on same network:
1. Find your computer's IP address
2. Replace `localhost` with your IP
3. Example: `http://192.168.1.100:3000`

---

## 🎯 **Troubleshooting**

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 8080
npx kill-port 8080
```

### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Java/Maven Issues
```bash
# Check Java version
java -version

# Check Maven version
mvn -version
```

---

## 🎊 **That's it! Your MarvelTech application is ready to run!**

Choose any method above based on your preference and environment. 
GitHub Codespaces is the easiest for quick testing!