import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const CallBackeffect = React(() => {
  const dispatch = useDispatch();
  return useCallback(
    (prevState, state, action) => {
      if (prevState === state) {
        return;
      } else {
        dispatch(action(state));
      }
    },
    [dispatch]
  );
});
export default CallBackeffect;
