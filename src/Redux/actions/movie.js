import { IS_SAVED_MOVIE, SET_MOVIE } from "../types/movie";

export function setMovie(movie){
  return{
    type: SET_MOVIE,
    payload: movie,
  }
}
export function setSavedMovie(bool){
  return{
    type: IS_SAVED_MOVIE,
    payload: bool,
  }
}