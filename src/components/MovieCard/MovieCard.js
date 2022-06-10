import "./MovieCard.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteMovie,
  handleSaveMovie,
} from "../../Redux/asyncActions.js/api";

const MovieCard = React.memo((props) => {
  const dispatch = useDispatch();
  const savedAllMovies = useSelector((state) => state.movies.allSavedMovies);
  const moviesName = useSelector((state) => state.movies.moviesName);
  const allMovies = useSelector((state) => state.movies.allMovies);
  const movies = useSelector((state) => state.movies.movies)
  const [isSavedMovie, setSavedMovie] = React.useState(false);
  function handleClickMovieButton(movie, isSavedMovie) {
    if (isSavedMovie) {
      handleDeleteMovie(movie, savedAllMovies)(dispatch);
    } else {
      handleSaveMovie(movie, movies, allMovies, savedAllMovies)(dispatch);
    }
  }
  React.useEffect(() => {
    const savedMovie = savedAllMovies.find((mov) => mov.id === props.movie.id);
    if (savedMovie) {
      setSavedMovie(true);
    } else {
      setSavedMovie(false);
    }
  }, [savedAllMovies]);
  return (
    <li className="movie">
      <div className="movie__description">
        <h3 className="movie__title">{props.movie.nameRU}</h3>
        <p className="movie__time">{`${props.movie.duration} минут`}</p>
      </div>
      <a
        className="movie__link"
        href={props.movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie__image"
          alt={props.movie.nameRU}
          src={`https://api.nomoreparties.co/${props.movie.image}`}
        ></img>
      </a>
      <button
        className={`movie__button ${
          isSavedMovie && moviesName === "saved-movies"
            ? "movie__button_delete"
            : ""
        } ${
          isSavedMovie && moviesName === "movies" ? "movie__button_saved" : ""
        }`}
        onClick={() => handleClickMovieButton(props.movie, isSavedMovie)}
        type="button"
      >
        {props.buttonName}
      </button>
    </li>
  );
});

export default MovieCard;
