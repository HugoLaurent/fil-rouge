import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestBase } from "../utils/constants";

export const fetchLikedImages = createAsyncThunk(
  "likedImages/initLikedImages",
  async () => {
    const response = await fetch(`${requestBase}/john_doe/likedImages.json`);
    const data = await response.json();
    return data;
  }
);
