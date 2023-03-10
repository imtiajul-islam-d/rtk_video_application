import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsApi";

// initial state
const initialState = {
  isLoading: false,
  isError: false,
  tags: [],
  error: "",
};

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

// tags slice
const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.tags = [];
        state.error = "";
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.tags = [];
      });
  },
});

export default tagsSlice.reducer;
