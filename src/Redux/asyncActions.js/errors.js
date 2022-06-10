import { message } from "../../utils/const";
import { setError } from "../actions/auth";
import { openInfoToolTipPopup } from "../actions/interactive";
import { setMessageError, setMessage } from "../actions/message";

export function handleError(err) {
  return async function (dispatch) {
      await dispatch(setMessageError(err.message));
      await dispatch(setMessage(err.message));//message.auth.fail
      await dispatch(setError(true));
      dispatch(openInfoToolTipPopup(true));
  };
}