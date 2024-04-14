import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk('news/fetchNews', () => {
  return axios
    .get(
      // `https://newsapi.org/v2/everything?qInTitle=dinosaurs&apiKey=82fe875a3ebf429badca4cb752ea227d`
      'https://v48-tier3-team-22-api.onrender.com/api/news'
    )
    .then((response) => response.data);
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
