import { FILTER_FORM, SEARCH_WORD } from "../types/searchForm";

const initialState = {
  searchWord: "",
  filterForm: false,
};

export const searchFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload,
      };
    case FILTER_FORM:
      return {
        ...state,
        filterForm: action.payload,
      };
    default:
      return state;
  }
};
