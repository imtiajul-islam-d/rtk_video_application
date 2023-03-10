import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoAPI";

// initial state
const initialState = {
    isLoading: false,
    isError: false,
    video: {},
    error: "",
  };
  
  export const fetchVideo = createAsyncThunk("video/fetchTags", async (id) => {
    const video = await getVideo(id);
    return video;
  });
  
  // tags slice
  const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchVideo.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.video = {};
          state.error = "";
        })
        .addCase(fetchVideo.fulfilled, (state, action) => {
          state.isLoading = false;
          state.video = action.payload;
        })
        .addCase(fetchVideo.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.error.message;
          state.video = {};
        });
    },
  });
  
  export default videoSlice.reducer;