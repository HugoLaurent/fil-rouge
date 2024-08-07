export const likedImagesReducer = (state = [], action) => {
  switch (action.type) {
    case "LIKE_IMAGE": {
      const newLikedImages = action.payload;
      return [...state, newLikedImages];
    }
    case "UNLIKE_IMAGE": {
      const stateWithoutLikedImage = state.filter(
        (item) => item !== action.payload
      );
      return stateWithoutLikedImage;
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
