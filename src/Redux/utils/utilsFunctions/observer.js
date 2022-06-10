import { store } from "../../App";

export function observeStore(state, onChange) {
  let currentState;

  function handleChange() {
    let nextState = state;
    if (nextState !== currentState) {
      currentState = nextState;
      onChange(state);
    }
  }
  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
