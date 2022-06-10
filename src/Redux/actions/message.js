import { MESSAGE_ERROR, MESSAGE } from "../types/message";

export function setMessage(value) {
  return {
    type: MESSAGE,
    payload: value,
  };
}
export function setMessageError(value) {
  return {
    type: MESSAGE_ERROR,
    payload: value,
  };
}
