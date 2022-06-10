import { IS_SAVED_MOVIE, SET_MOVIE } from "../types/movie";

const initialState = {
  movieName: "",
  movie: '',
  isSavedMovie: false,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case IS_SAVED_MOVIE:
      return {
        ...state,
        isSavedMovie: action.payload,
      };
    default:
      return state;
  }
};
