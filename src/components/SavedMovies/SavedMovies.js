import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import React from "react";
import More from "../More/More";
import Footer from "../Footer/Footer";
import HeaderMovies from "../HeaderLoggedIn/HeaderLoggedIn";
import { useDispatch, useSelector } from "react-redux";
import { setMovies, setMoviesName } from "../../Redux/actions/movies";

const SavedMovies = React.memo((props) => {
  const dispatch = useDispatch();
  const savedAllMovies = useSelector((state) => state.movies.allSavedMovies);
  const moviesName = useSelector((state) => state.movies.moviesName);
  function enableMovies(movies) {
    dispatch(setMovies(movies));
  }
  React.useEffect(() => {
    dispatch(setMoviesName("saved-movies"));
    return () => {
      dispatch(setMoviesName(""));
    };
  }, []);
  React.useEffect(() => {
    if (moviesName === "saved-movies") {
      enableMovies(savedAllMovies);
    }
    return () => {
      enableMovies([]);
    };
  }, [savedAllMovies, moviesName]);
  return (
    <main className="content">
      <HeaderMovies closePopup={props.closePopup}></HeaderMovies>
      <SearchForm></SearchForm>
      <MovieCardList></MovieCardList>
      <More></More>
      <Footer></Footer>
    </main>
  );
});

export default SavedMovies;
