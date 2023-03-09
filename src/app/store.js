import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import tagReducer from "../features/tags/tagsSlice";

export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    videos: videosReducer,
    tags: tagReducer,
  },
});
