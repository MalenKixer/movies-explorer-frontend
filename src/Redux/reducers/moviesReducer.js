import {
  ADD_MORE_MOVIES,
  ALL_MOVIES,
  ALL_SAVED_MOVIES,
  FILTER_SHORT_MOVIES,
  MOVIES,
  MOVIES_MAX_LENGTH,
  MOVIES_NAME,
  QUANTITY_OF_ADD_MOVIES,
  RENDERING_MOVIES,
  SAVED_MOVIES,
} from "../types/movies";

const initialState = {
  movies: [],
  allMovies: [],
  allSavedMovies: [],
  filterShortMovies: false,
  moreMovies: false,
  renderingMovies: [],
  moviesName: "",
  quantityOfAddMovies: 0,
  moviesMaxLength: 0,
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ALL_MOVIES:
      return {
        ...state,
        allMovies: action.payload,
      };
    case ALL_SAVED_MOVIES:
      return {
        ...state,
        allSavedMovies: action.payload,
      };
    case FILTER_SHORT_MOVIES:
      return {
        ...state,
        filterShortMovies: action.payload,
      };
    case ADD_MORE_MOVIES:
      return {
        ...state,
        moreMovies: action.payload,
      };
    case RENDERING_MOVIES:
      return {
        ...state,
        renderingMovies: action.payload,
      };
    case MOVIES_NAME:
      return {
        ...state,
        moviesName: action.payload,
      };
    case MOVIES_MAX_LENGTH:
      return {
        ...state,
        moviesMaxLength: action.payload,
      };
    case QUANTITY_OF_ADD_MOVIES:
      return {
        ...state,
        quantityOfAddMovies: action.payload,
      };
    default:
      return state;
  }
};
