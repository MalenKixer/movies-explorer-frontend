import "./Movies.css";
import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import More from "../More/More";
import Footer from "../Footer/Footer";
import HeaderMovies from "../HeaderLoggedIn/HeaderLoggedIn";
import { useDispatch } from "react-redux";
import { setMoviesName } from "../../Redux/actions/movies";

const Movies = React.memo((props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setMoviesName("movies"));
    return () => {
      dispatch(setMoviesName(''))
    }
  }, []);
  return (
    <main className="content">
      <HeaderMovies closePopup={props.closePopup}></HeaderMovies>
      <SearchForm></SearchForm>
      <MovieCardList buttonName="Сохранить"></MovieCardList>
      <More></More>
      <Footer></Footer>
    </main>
  );
});

export default Movies;
