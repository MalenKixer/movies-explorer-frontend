import "./FilterCheckbox.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterShortMovies } from "../../Redux/actions/movies";

const FilterCheckbox = React.memo(() => {
  const dispatch = useDispatch();
  const filterShortMovies = useSelector(
    (state) => state.movies.filterShortMovies
  );
  function filterCheck(evt) {
    localStorage.setItem(
      "filter-movies",
      JSON.stringify({
        checkbox: !filterShortMovies,
      })
    );
    if (evt.target.checked) {
      dispatch(setFilterShortMovies(true));
    } else {
      dispatch(setFilterShortMovies(false));
    }
  }
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__input"
        type="checkbox"
        name="genre"
        id="genre"
        checked={filterShortMovies}
        onChange={filterCheck}
      />
      <span className="filter-checkbox__slider"></span>Короткометражки
    </label>
  );
});

export default FilterCheckbox;
