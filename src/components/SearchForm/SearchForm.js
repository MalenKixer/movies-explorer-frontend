import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import React from "react";
import "./SearchForm.css";
import { useDispatch, useSelector } from "react-redux";
import { preloaderOpen } from "../../Redux/actions/interactive";
import { setFilterShortMovies, setMovies } from "../../Redux/actions/movies";
import { setFilterForm, setSearchWord } from "../../Redux/actions/searchForm";

const SearchForm = React.memo(() => {
  const dispatch = useDispatch();
  const searchingWord = useSelector((state) => state.searchForm.searchWord);
  const moviesName = useSelector((state) => state.movies.moviesName);
  const allMovies = useSelector((state) => state.movies.allMovies);
  const savedAllMovies = useSelector((state) => state.movies.allSavedMovies);
  const filterShortMovies = useSelector(
    (state) => state.movies.filterShortMovies
  );

  const filterMovies = JSON.parse(
    localStorage.getItem("filter-movies")
  ).checkbox;
  const searchWord = JSON.parse(localStorage.getItem("search-word")).searchWord;

  function setShortFilterMovies(value) {
    dispatch(setFilterShortMovies(value));
  }
  function setPreloaderOpen(value) {
    dispatch(preloaderOpen(value));
  }
  function setSearchingWord(searchWord) {
    dispatch(setSearchWord(searchWord));
  }
  async function enableMovies(movies) {
    dispatch(setMovies(movies));
  }
  function onChange(evt) {
    setSearchingWord(evt.target.value);
  }
  function onSubmit(evt) {
    evt.preventDefault();
    handleSearchMovies(searchingWord, moviesName);
    if (moviesName === "movies") {
      localStorage.setItem(
        "search-word",
        JSON.stringify({
          searchWord: searchingWord,
        })
      );
    }
  }
  async function handleSearchMovies(searchWord, moviesName) {
    setPreloaderOpen(true);
    const movies = moviesName === "movies" ? allMovies : savedAllMovies;
    const searchMovies = await movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchWord.toLowerCase())
    );
    if (moviesName === "movies") {
      enableMovies(searchMovies).then(() => {
        setShortFilterMovies(filterMovies);
      });
    }
    if (moviesName === "saved-movies") {
      enableMovies(searchMovies);
    }
    dispatch(setFilterForm(filterShortMovies));
    setPreloaderOpen(false);
  }
  React.useEffect(() => {
    if (
      filterMovies !== null &&
      searchWord !== null &&
      moviesName === "movies"
    ) {
      setSearchingWord(searchWord);
      handleSearchMovies(searchWord, moviesName);
    }
    return () => {
      setSearchingWord("");
      setShortFilterMovies(false);
    };
  }, [moviesName]);
  return (
    <form className="search-form" name="search" onSubmit={onSubmit}>
      <label className="search-form__field">
        <div className="search-form__icon"></div>
        <input
          className="search-form__input"
          type="text"
          name="search"
          placeholder="Фильм"
          required
          id="name-search-input"
          autoComplete="off"
          value={searchingWord}
          onChange={onChange}
        />
        <span className="search-form__input-error name-search-input-error"></span>
        <button
          className="search-form__icon search-form__button"
          type="submit"
        ></button>
      </label>
      <FilterCheckbox></FilterCheckbox>
    </form>
  );
});

export default SearchForm;
