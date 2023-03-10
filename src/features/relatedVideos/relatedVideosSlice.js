import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";

// initial state
const initialState = {
    isLoading: false,
    isError: false,
    relatedVideos: [],
    error: "",
  };
  
  export const fetchRelatedVideos = createAsyncThunk("tags/fetchTags", async ({currentId, tags}) => {
    const relatedVideos = await getRelatedVideos({currentId, tags});
    return relatedVideos;
  });
  
  // tags slice
  const relatedVideoSlice = createSlice({
    name: "relatedVideos",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(fetchRelatedVideos.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
          state.relatedVideos = [];
          state.error = "";
        })
        .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
          state.isLoading = false;
          state.relatedVideos = action.payload;
        })
        .addCase(fetchRelatedVideos.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.error = action.error.message;
          state.relatedVideos = [];
        });
    },
  });
  
  export default relatedVideoSlice.reducer;