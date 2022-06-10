import "./App.css";
import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";
import { useDispatch, useSelector } from "react-redux";

import "../../blocks/pages/pages.css";
import "../../blocks/page/page.css";
import "../../vendor/normalize.css";

import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import InfoTooltipPopup from "../InfoTooltipPopup/InfoTooltipPopup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";

import { api } from "../../utils/Api/MainApi";
import { apiMovies } from "../../utils/Api/MoviesApi";
import { setAllMovies, setAllSavedMovies } from "../../Redux/actions/movies";
import { setUser } from "../../Redux/actions/user";
import {
  barOpen,
  openInfoToolTipPopup,
  preloaderOpen,
} from "../../Redux/actions/interactive";
import { setloggedIn } from "../../Redux/actions/auth";
import {
  handleGetMovies,
  handleGetSavedMovies,
  handleGetUserInfo,
} from "../../Redux/asyncActions.js/api";

const App = React.memo(() => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const isBarOpen = useSelector((state) => state.interactive.barOpen);
  const isPreloaderOpen = useSelector((state) => state.interactive.Preloader);
  const isInfoTooltipPopupOpen = useSelector(
    (state) => state.interactive.infoToolTipPopup
  );
  const messageError = useSelector((state) => state.message.messageError);
  const currentUser = useSelector((state) => state.user.curentUser);
  function setPreloaderOpen(value) {
    dispatch(preloaderOpen(value));
  }
  function setUSER(user) {
    dispatch(setUser(user));
  }
  function setBarOpen(bool) {
    dispatch(barOpen(bool));
  }
  function setInfoTooltipPopupOpen(value) {
    dispatch(openInfoToolTipPopup(value));
  }
  function setLoggedIn(value) {
    dispatch(setloggedIn(value));
  }

  function handleCloseAllPopups() {
    if (isBarOpen) {
      setBarOpen(false);
    }
    if (isInfoTooltipPopupOpen) {
      setInfoTooltipPopupOpen(false);
    }
  }

  function checkToken() {
    api
      .checkToken()
      .then(() => {
        setLoggedIn(true);
      })
      .catch((err) => {
        setLoggedIn(false);
        history("/");
        console.log(`Ошибка: ${err}`);
      });
  }

  React.useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("moviesAll"));
    dispatch(setAllMovies(movies));
  }, []);
  React.useEffect(() => {
    checkToken();
  }, []);
  React.useEffect(() => {
    if (loggedIn) {
      handleGetUserInfo()(dispatch);
      handleGetSavedMovies()(dispatch);
    }
  }, [loggedIn]);
  React.useEffect(() => {
    const closeByEscape = (evt) => {
      if (evt.key === "Escape") {
        handleCloseAllPopups();
      }
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isInfoTooltipPopupOpen, isBarOpen]);
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path={`/sign-in`}
            element={
              <>
                {loggedIn ? (
                  <Navigate to="/movies" />
                ) : (
                  <Login errorMessage={messageError}></Login>
                )}
              </>
            }
          />
          <Route
            path={`/sign-up`}
            element={
              <>
                {loggedIn ? (
                  <Navigate to="/movies" />
                ) : (
                  <Register errorMessage={messageError}></Register>
                )}
              </>
            }
          />
          <Route
            exact
            path={`/`}
            element={<Main closePopup={handleCloseAllPopups}></Main>}
          />
          <Route
            path={`/movies`}
            element={
              <ProtectedRoute
                component={Movies}
                closePopup={handleCloseAllPopups}
              ></ProtectedRoute>
            }
          />
          <Route
            path={`/saved-movies`}
            element={
              <ProtectedRoute
                component={SavedMovies}
                closePopup={handleCloseAllPopups}
              ></ProtectedRoute>
            }
          />
          <Route
            path={`/profile`}
            element={
              <ProtectedRoute
                component={Profile}
                closePopup={handleCloseAllPopups}
              ></ProtectedRoute>
            }
          />
          <Route path={`*`} element={<NotFound></NotFound>} />
        </Routes>
        <InfoTooltipPopup onClose={handleCloseAllPopups} />
        <Preloader isOpen={isPreloaderOpen}></Preloader>
      </CurrentUserContext.Provider>
    </div>
  );
});

export default App;
