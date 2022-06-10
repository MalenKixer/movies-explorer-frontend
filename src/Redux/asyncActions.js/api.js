import { api } from "../../utils/Api/MainApi";
import { apiMovies } from "../../utils/Api/MoviesApi";
import { setError, setloggedIn } from "../actions/auth";
import { openInfoToolTipPopup, preloaderOpen } from "../actions/interactive";
import { setMessage } from "../actions/message";
import { setAllMovies, setAllSavedMovies, setMovies } from "../actions/movies";
import { setUser } from "../actions/user";
import { handleError } from "./errors";

export function handleSignOut() {
  return async function (dispatch) {
    dispatch(preloaderOpen(true));
    api
      .deleteToken()
      .then(() => {
        dispatch(setloggedIn(false));
      })
      .catch((err) => {
        handleError(err)(dispatch);
      })
      .finally(() => {
        dispatch(preloaderOpen(false));
      });
  };
}
export function handleUserUpdate(name, email) {
  return async function (dispatch) {
    dispatch(preloaderOpen(true));
    api
      .updateUser({ name, email })
      .then(() => {
        dispatch(setUser({ name, email }));
        dispatch(setMessage("Редактирование данных прошло успешно"));
        dispatch(setError(false));
        dispatch(openInfoToolTipPopup(true));
      })
      .catch((err) => {
        dispatch(setMessage(err.message));
      })
      .finally(() => {
        dispatch(preloaderOpen(false));
      });
  };
}
export function handleDeleteMovie(movie, savedAllMovies) {
  return async function (dispatch) {
    dispatch(preloaderOpen(true));
    api
      .deleteMovie(movie)
      .then((res) => {
        dispatch(
          setAllSavedMovies(
            savedAllMovies.filter((savedMovie) => savedMovie.id !== res.id)
          )
        );
      })
      .catch((err) => {
        handleError(err)(dispatch);
      })
      .finally(() => {
        dispatch(preloaderOpen(false));
      });
  };
}
export function handleSaveMovie(movie, movies, allMovies, savedAllMovies) {
  return async function (dispatch) {
    dispatch(preloaderOpen(true));
    api
      .savedMovie(movie)
      .then((res) => {
        dispatch(setAllSavedMovies([...savedAllMovies, res]));
        dispatch(
          setMovies(movies.map((mov) => (mov.id === res.id ? res : mov)))
        );
        localStorage.setItem(
          "moviesAll",
          JSON.stringify(
            allMovies.map((mov) => (mov.id === res.id ? res : mov))
          )
        );
        dispatch(
          setAllMovies(allMovies.map((mov) => (mov.id === res.id ? res : mov)))
        );
      })
      .catch((err) => {
        handleError(err)(dispatch);
      })
      .finally(() => {
        dispatch(preloaderOpen(false));
      });
  };
}
export function handleGetUserInfo() {
  return async function (dispatch) {
    api
      .getUserInfo()
      .then((res) => {
        dispatch(setUser(res));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.message}`);
      });
  };
}
export function handleGetMovies() {
  return async function (dispatch) {
    apiMovies
      .getMovies()
      .then((movies) => {
        localStorage.setItem(
          "moviesAll",
          JSON.stringify(
            movies.map((m) => {
              m.image = m.image.url;
              return m;
            })
          )
        );
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.message}`);
      })
      .finally(() => {
        dispatch(preloaderOpen(false));
      });
  };
}
export function handleGetSavedMovies() {
  return async function (dispatch) {
    api
      .getMovieList()
      .then((savedMovies) => {
        dispatch(setAllSavedMovies(savedMovies));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.message}`);
      })
      .finally(() => {
        dispatch(preloaderOpen(false));
      });
  };
}
