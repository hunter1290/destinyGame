# The Globetrotter Challenge

## 🌍 About the Project
**The Globetrotter Challenge** is a full-stack web-based game where users guess famous destinations based on cryptic clues. The project includes:
- **Backend:** Node.js with JWT authentication & Gemini AI support for clue generation.
- **Frontend:** React with styled-components for a dynamic UI.
- **Real-time Features:** WebSocket support for multiplayer & leaderboard tracking.
- **Authentication:** JWT-based authentication for secure user sessions.

🚀 **Note:** Some features are still in development!

---

## ⚙️ Tech Stack
### **Backend (Node.js - Express.js)**
- **Authentication:** JWT for secure login/logout
- **AI Support:** Gemini AI to generate cryptic clues
- **Database:** MongoDB for storing users, scores, and destinations
- **WebSockets:** Real-time game interactions

### **Frontend (React - Styled Components)**
- **Dynamic UI:** Styled-components for modular styles
- **Game Logic:** React state management for interactive guessing
- **Routing:** React Router for navigation

---

## 🔥 Features
- **🧠 AI-Generated Clues:** Powered by Gemini AI
- **🔒 Secure Login:** JWT-based authentication
- **🌎 Multiplayer Mode:** Real-time gameplay using WebSockets
- **📊 Leaderboard:** Track top players
- **📍 Challenge Friends:** Invite and compete

---

## 🚀 Installation & Setup (Run Locally)

### **1️⃣ Clone the Repository**
```sh
  git clone https://github.com/your-username/globetrotter-challenge.git
  cd globetrotter-challenge
```

### **2️⃣ Backend Setup**
```sh
  cd backend
  npm install  # Install dependencies
  npm start    # Run backend server
```

**Backend `.env` Example:**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_api_key
```

### **3️⃣ Frontend Setup**
```sh
  cd frontend
  npm install  # Install dependencies
  npm start    # Run React frontend
```

**Frontend `.env` Example:**
```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

---

## 🛠️ API Endpoints

### **Authentication Routes**
| Method | Route        | Description        |
|--------|------------|------------------|
| POST   | /api/auth/signup | Register a new user |
| POST   | /api/auth/login  | Login & get JWT token |
| POST   | /api/auth/logout | Logout user |

### **Game Routes**
| Method | Route          | Description             |
|--------|--------------|---------------------|
| GET    | /api/game/clue | Get AI-generated clue |
| POST   | /api/game/answer | Submit guessed answer |
| GET    | /api/game/leaderboard | Get top players |

---

## 🎮 Usage
1. Sign up and log in to access the game.
2. Receive AI-generated clues and guess the destination.
3. Submit your answer and earn points.
4. Compete with friends and climb the leaderboard!

---

## 🚧 Features in Progress
- **Multiplayer Lobby System**
- **Daily Challenges**
- **Hint System using AI**
- **Admin Dashboard for Managing Clues**

---

## 🤝 Contributing
Feel free to fork, submit issues, or contribute via PRs! 🚀

---

## 📜 License
MIT License - Free to use and modify.

---

## 📬 Contact
For questions, reach out via GitHub issues or email at `your-email@example.com`.

---

🚀 Happy Coding & Have Fun Guessing! 🌍🎮

