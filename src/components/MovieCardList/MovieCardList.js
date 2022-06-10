import "./MovieCardList.css";
import React from "react";
import MovieCard from "../MovieCard/MovieCard";

import {
  ShortMoviesDuration,
  LengthMoviesWidth,
  QuantityOfAddMovies,
} from "../../utils/const";
import {
  addButtonMore,
} from "../../Redux/actions/interactive";
import { useDispatch, useSelector } from "react-redux";
import {
  setMoreMovies,
  setMoviesMaxLength,
  setQuantityOfAddMovies,
  setRenderMovies,
} from "../../Redux/actions/movies";
import { setFilterForm } from "../../Redux/actions/searchForm";

const MovieCardList = React.memo((props) => {
  const dispatch = useDispatch();
  const moreMovies = useSelector((state) => state.movies.moreMovies);
  const movies = useSelector((state) => state.movies.movies);
  const filterShortMovies = useSelector(
    (state) => state.movies.filterShortMovies
  );
  const filterForm = useSelector((state) => state.searchForm.filterForm)
  const renderingMovies = useSelector((state) => state.movies.renderingMovies);
  const quantityOfAddMovies = useSelector(
    (state) => state.movies.quantityOfAddMovies
  );
  const moviesMaxLength = useSelector((state) => state.movies.moviesMaxLength);
  function setMaxLengthMovies(moviesMaxLength) {
    dispatch(setMoviesMaxLength(moviesMaxLength));
  }
  function setQuantityOfMoviesAdd(quantityOfAddMovies) {
    dispatch(setQuantityOfAddMovies(quantityOfAddMovies));
  }
  function setRenderingMovies(movies) {
    dispatch(setRenderMovies(movies));
  }
  function setButtonMore(value) {
    dispatch(addButtonMore(value));
  }
  function pushMoreMovies(movies, renderingMovies) {
    setRenderingMovies(renderingMovies.concat(
      movies.slice(moviesMaxLength, moviesMaxLength + quantityOfAddMovies)
    ));
    setMaxLengthMovies(moviesMaxLength + quantityOfAddMovies);
    setRenderingMovies(renderingMovies);
  }
  function handleLimitationMovies(movies) {
    if (movies.length > moviesMaxLength) {
      setButtonMore(true);
      setRenderingMovies(movies.slice(0, moviesMaxLength));
    }
    if (movies.length <= moviesMaxLength || !movies) {
      setButtonMore(false);
      setRenderingMovies(movies);
    }
  }
  function handleMoviesOnResizeScreen() {
    if (window.innerWidth >= 768) {
      if (moviesMaxLength < LengthMoviesWidth.maxWidth) {
        setMaxLengthMovies(LengthMoviesWidth.maxWidth);
        setQuantityOfMoviesAdd(QuantityOfAddMovies.forMaxWidth);
      }
    }
    if (window.innerWidth < 768 && window.innerWidth > 480) {
      if (moviesMaxLength < LengthMoviesWidth.middleWidth) {
        setMaxLengthMovies(LengthMoviesWidth.middleWidth);
        setQuantityOfMoviesAdd(QuantityOfAddMovies.forMiddleWidth);
      }
    }
    if (window.innerWidth <= 480) {
      if (moviesMaxLength < LengthMoviesWidth.minWidth) {
        setMaxLengthMovies(LengthMoviesWidth.minWidth);
        setQuantityOfMoviesAdd(QuantityOfAddMovies.forMinWidth);
      }
    }
  }
  function handleFilterShortMovies(filterShortMovies, filterForm) {
    if (filterShortMovies || filterForm) {
      const filteredMovies = movies.filter(
        (movie) => movie.duration <= ShortMoviesDuration
      );
      dispatch(setFilterForm(false));
      handleLimitationMovies(filteredMovies, moviesMaxLength);
    } else {
      handleLimitationMovies(movies, moviesMaxLength);
    }
  }
  function handlePushMoreMovies(moreMovies) {
    if (moreMovies) {
      pushMoreMovies(movies, renderingMovies);
      dispatch(setMoreMovies(false));
    }
  }
  React.useEffect(() => {
    handlePushMoreMovies(moreMovies);
  }, [moreMovies]);
  React.useEffect(() => {
    handleFilterShortMovies(filterShortMovies, filterForm);
  }, [filterShortMovies, filterForm]);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      handleMoviesOnResizeScreen();
    });
    handleMoviesOnResizeScreen();
    return () => {
      window.removeEventListener("resize", () => {
        handleMoviesOnResizeScreen();
      });
    };
  }, []);
  React.useEffect(() => {
    handleLimitationMovies(movies, moviesMaxLength);
    return () => {
      handleLimitationMovies([]);
    };
  }, [movies, moviesMaxLength]);
  return (
    <>
      {renderingMovies.length === 0 ? (
        <p className="nothing-found">Ничего не найдено</p>
      ) : (
        <ul className="movies">
          {renderingMovies.map((movie) => (
            <MovieCard
              buttonName={props.buttonName}
              movie={movie}
              key={movie.id}
            ></MovieCard>
          ))}
        </ul>
      )}
    </>
  );
});

export default MovieCardList;
