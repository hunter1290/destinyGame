import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signupUser, logoutUser } from "../../services/authService";

// Async Thunks for API calls
export const login = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
  try {
    return await loginUser(userData);
  } catch (error) {
    return rejectWithValue(error.response?.data || "Login failed");
  }
});

export const signup = createAsyncThunk("auth/signup", async (userData, { rejectWithValue }) => {
  try {
    return await signupUser(userData);
  } catch (error) {
    return rejectWithValue(error.response?.data || "Signup failed");
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  return logoutUser();
});

// Redux slice
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: localStorage.getItem("token") || null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export default authSlice.reducer;
