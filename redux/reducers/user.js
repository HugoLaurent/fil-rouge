import { user } from "../store";

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        user: { userLoggedIn: true, userData: action.payload },
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        user: { userLoggedIn: false, userData: null },
      };
    }
    default:
      return state;
  }
};
