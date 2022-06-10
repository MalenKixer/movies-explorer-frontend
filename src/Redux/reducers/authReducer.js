import { ERROR, LOGGED_IN } from "../types/auth";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, loggedIn: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
