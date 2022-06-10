import * as auth from "../../utils/Api/auth";
import { message } from "../../utils/const";
import { setError, setloggedIn } from "../actions/auth";
import { openInfoToolTipPopup, preloaderOpen } from "../actions/interactive";
import { setMessage } from "../actions/message";
import { setCurrentUser } from "../actions/user";
import { handleError } from "./errors";

// function preloader(asyncFunction) {
//   return function(dispatch){
//     dispatch(preloaderOpen(true));
//     asyncFunction().finally(() => {
//       dispatch(preloaderOpen(false));
//     });
//   }
// }
export function handleLogin(email, password) {
  return async function (dispatch) {
    dispatch(preloaderOpen(true));
    auth
      .auhtorize(email, password)
      .then(() => {
        dispatch(setloggedIn(true));
      })
      .catch((err) => {
        handleError(err)(dispatch);
      })
      .finally(() => {
        dispatch(preloaderOpen(false));
      });
  };
}
export function handleRegister(name, email, password) {
  return async function (dispatch) {
    dispatch(preloaderOpen(true));
    auth.register(name, email, password).then((res) => {
      dispatch(setloggedIn(true));
      dispatch(setCurrentUser(res));
      dispatch(setMessage(message.auth.succes));
      dispatch(setError(false));
      dispatch(openInfoToolTipPopup(true));
    })
    .catch((err) => {
      handleError(err)(dispatch);
    })
    .finally(() => {
      dispatch(preloaderOpen(false));
    });
  };
}
