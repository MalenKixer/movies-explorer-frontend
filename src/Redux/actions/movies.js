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

export function setMovies(movies) {
  return {
    type: MOVIES,
    payload: movies,
  };
}
export function setAllMovies(allMovies) {
  return {
    type: ALL_MOVIES,
    payload: allMovies,
  };
}
export function setAllSavedMovies(allSavedMovies) {
  return {
    type: ALL_SAVED_MOVIES,
    payload: allSavedMovies,
  };
}
export function setFilterShortMovies(filterMovies) {
  return {
    type: FILTER_SHORT_MOVIES,
    payload: filterMovies,
  };
}
export function setMoreMovies(moreMovies) {
  return {
    type: ADD_MORE_MOVIES,
    payload: moreMovies,
  };
}
export function setRenderMovies(renderingMovies) {
  return {
    type: RENDERING_MOVIES,
    payload: renderingMovies,
  };
}
export function setMoviesName(moviesName) {
  return {
    type: MOVIES_NAME,
    payload: moviesName,
  };
}
export function setMoviesMaxLength(maxLength) {
  return {
    type: MOVIES_MAX_LENGTH,
    payload: maxLength,
  };
}
export function setQuantityOfAddMovies(quantityOfAddMovies) {
  return {
    type: QUANTITY_OF_ADD_MOVIES,
    payload: quantityOfAddMovies,
  };
}
