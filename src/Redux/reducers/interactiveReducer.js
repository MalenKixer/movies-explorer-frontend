import {
  BAR,
  BUTTON_MORE,
  NOTHING_FOUND,
  OPEN_INFO_TOOL_TIP_POPUP,
  PRELOADER,
} from "../types/interactive";

const initialState = {
  barOpen: false,
  preloaderOpen: false,
  infoToolTipPopup: false,
  buttonMore: false,
  nothingFound: false,
};

export const interactiveReducer = (state = initialState, action) => {
  switch (action.type) {
    case BAR:
      return { ...state, barOpen: action.payload };
    case PRELOADER:
      return { ...state, preloaderOpen: action.payload };
    case OPEN_INFO_TOOL_TIP_POPUP:
      return { ...state, infoToolTipPopup: action.payload };
    case BUTTON_MORE:
      return { ...state, buttonMore: action.payload };
    case NOTHING_FOUND:
      return { ...state, nothingFound: action.payload };
    default:
      return state;
  }
};
