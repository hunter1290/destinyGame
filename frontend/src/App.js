import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Page404 from './pages/Page404'
import GamePage from './pages/GamePage'
import Test from './pages/Test'
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {

  const user = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <SignUp />} />
        
        {/* Protected Routes */}
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/playingArea" element={<GamePage />} />
            <Route path="/profile" element={<UserProfile />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}

        {/* 404 Page */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App
