require('dotenv').config();
const { Server } = require('socket.io');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const aiRoutes = require('./routes/aiRoutes');  // Keep only the Express routes
const http = require('http');

const app = express();
const port = process.env.PORT || 8000;

// Connect to Database
connectDB();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Import WebSocket functionality
const aiSocketHandler = require('./routes/aiSocket');
aiSocketHandler(io); // Pass the `io` instance to WebSocket logic

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ai', aiRoutes); // AI REST API
app.use('/api/auth', authRoutes); // Authentication Routes
app.use('/api', protectedRoutes); // Protected API routes

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
