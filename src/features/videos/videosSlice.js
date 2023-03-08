import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

// initial state
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// // async thunk
export const fetchVideos = createAsyncThunk(
  "videos/fetchVideos",
  async () => {
    const videos = await getVideos();
    return videos;
  }
);

// // reducer

const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.videos = [];
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
