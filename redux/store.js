import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/user";
import likedImagesReducer from "./reducers/likedImages";

export const store = configureStore({
  reducer: {
    user: usersReducer,
    likedImages: likedImagesReducer,
  },
});
