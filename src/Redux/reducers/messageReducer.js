import { MESSAGE_ERROR, MESSAGE } from "../types/message";

const initialState = {
  messageError: "",
  message: "",
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE:
      return { ...state, message: action.payload };
    case MESSAGE_ERROR:
      return { ...state, messageError: action.payload };
    default:
      return state;
  }
};
