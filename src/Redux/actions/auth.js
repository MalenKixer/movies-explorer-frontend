import { ERROR, LOGGED_IN } from "../types/auth"

export function setloggedIn(bool){
  return{
    type: LOGGED_IN,
    payload: bool,
  }
}
export function setError(bool){
  return{
    type: ERROR,
    payload: bool,
  }
}
