import axios from "axios";

const API_URL = "http://localhost:8000/api/auth"; // Adjust based on your backend

// Login API call
export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token); // Store JWT in localStorage
  }
  return response.data;
};

// Signup API call
export const signupUser = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data;
};

// Logout API call
export const logoutUser = async () => {
  localStorage.removeItem("token"); // Remove JWT token from localStorage
  return { message: "Logged out successfully" };
};
