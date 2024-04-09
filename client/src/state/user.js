import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../components/auth/authService";

// Async thunk for logging in
export const login = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://v48-tier3-team-22-api.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        },
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();

      authService.setUserData(data); // Save to local storage
      return data; // Contains { token, userName } assumed
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Async thunk for logging out
export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    // getting token from localstorage directly as it isnt stored in the state
    const token = localStorage.getItem("token");

    if (!token) {
      return rejectWithValue("No token found");
    }
    try {
      const response = await fetch(
        "https://v48-tier3-team-22-api.onrender.com/api/auth/logout",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Logout failed");
      }
      authService.clearUserData();
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: authService.isLoggedIn(),
    userName: authService.getUserName(),
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.userName;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
        state.userName = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.userName = null;
      });
    // Handle pending, rejected for both thunks as needed
  },
});

export default userSlice.reducer;