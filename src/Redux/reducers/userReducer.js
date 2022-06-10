import { CURRENT_USER, USER } from "../types/user";

const initialState = {
  currentUser: {},
  user: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
