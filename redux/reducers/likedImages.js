import { createSlice } from "@reduxjs/toolkit";
import { fetchLikedImages } from "./../../src/api/fecthLikedImages";

export const likedImagesSlice = createSlice({
  name: "likedImages",
  initialState: {
    likedImages: [],
    loading: true,
  },
  reducers: {
    likedImage: (state, action) => {
      const newLikedImage = action.payload;
      return { ...state, likedImages: [...state.likedImages, newLikedImage] };
    },
    unLikeImage: (state, action) => {
      const stateWithoutLikedImage = state.likedImages.filter(
        (item) => item.itemId !== action.payload.itemId
      );
      state.likedImages = stateWithoutLikedImage;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLikedImages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLikedImages.fulfilled, (state, action) => {
      state.likedImages = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchLikedImages.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { initLikedImages, likedImage, unLikeImage } =
  likedImagesSlice.actions;

export default likedImagesSlice.reducer;
