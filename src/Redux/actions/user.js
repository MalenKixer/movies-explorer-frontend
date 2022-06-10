import { CURRENT_USER, USER } from "../types/user";

export function setCurrentUser(curentUser){
  return {
    type: CURRENT_USER,
    payload: curentUser,
  }
}
export function setUser(user){
  return {
    type: USER,
    payload: user,
  }
}