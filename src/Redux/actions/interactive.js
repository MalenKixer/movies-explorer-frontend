import {
  BAR,
  BUTTON_MORE,
  NOTHING_FOUND,
  OPEN_INFO_TOOL_TIP_POPUP,
  PRELOADER,
} from "../types/interactive";

export function addButtonMore(bool) {
  return {
    type: BUTTON_MORE,
    payload: bool,
  };
}
export function preloaderOpen(bool) {
  return {
    type: PRELOADER,
    payload: bool,
  };
}
export function barOpen(bool) {
  return {
    type: BAR,
    payload: bool,
  };
}
export function openInfoToolTipPopup(bool) {
  return {
    type: OPEN_INFO_TOOL_TIP_POPUP,
    payload: bool,
  };
}
export function setNothingFound(bool) {
  return {
    type: NOTHING_FOUND,
    payload: bool,
  };
}
