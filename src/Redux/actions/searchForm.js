import { FILTER_FORM, SEARCH_WORD } from "../types/searchForm"

export function setSearchWord(searchWord){
  return{
    type: SEARCH_WORD,
    payload: searchWord,
  }
}
export function setFilterForm(bool){
  return{
    type: FILTER_FORM,
    payload: bool,
  }
}

