import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  tags: [],
  search: "",
};

// slice
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      if (state.tags.includes(action.payload)) {
        const indexToRemove = state.tags.indexOf(action.payload);
        state.tags.splice(indexToRemove, 1);
      } else {
        state.tags.push(action.payload);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const {tagSelected, searched} = filterSlice.actions;
