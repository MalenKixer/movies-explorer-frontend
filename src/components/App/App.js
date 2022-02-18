import './App.css';
import React from 'react'; 
import { Route, Routes, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../context/CurrentUserContext';

import '../../blocks/pages/pages.css'
import '../../blocks/page/page.css'
import '../../vendor/normalize.css'

import Login from '../Login/Login';
import Register from '../Register/Register';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import InfoTooltipPopup from '../InfoTooltipPopup/InfoTooltipPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Preloader from '../Preloader/Preloader';

import * as auth from '../../utils/auth';
import { api } from '../../utils/MainApi';
import { apiMovies } from '../../utils/MoviesApi';


const App = React.memo(() => {
  const[isFail, setFail] = React.useState(false);
  const[messageFail, setMessageFail] = React.useState('');
  const[messageSucces, setMessageSucces] = React.useState('');
  const[isBarOpen, setBarOpen] = React.useState(false);
  const[loggedIn, setLoggedIn] = React.useState(false);
  const[addButtonMore, setAddButtonMore] = React.useState(false);
  const[curentUser, setCurentUser] = React.useState({});
  const[errorMessage, setErrorMessage] = React.useState('');
  const[addMoreMovies, setMoreMovies] = React.useState(false);
  const[movies, setMovies] = React.useState([]);
  const[isPreloaderOpen, setPreloaderOpen] = React.useState(false);
  const[filterShortMovies, setFilterShortMovies] = React.useState(false);
  const[searchWordMovies, setSearchWordMovies] = React.useState('');
  const[savedMovies, setSavedMovies] = React.useState([]);
  const[isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = React.useState(false);
  const history = useNavigate();
  function openNavigation() {
      setBarOpen(true);
  }
  function handleCloseAllPopupsClick(){
    if(isBarOpen){
       setBarOpen(false);
    }
    if(isInfoTooltipPopupOpen){
      setInfoTooltipPopupOpen(false);
   }
  }
  function handleRegisterSubmit(userName, email, password){
    setPreloaderOpen(true);
    auth.register(userName, email, password)
    .then((res) => {
        setLoggedIn(true);
        history(`/`);
        setCurentUser(res);
        setMessageSucces('Вы успешно зарегистрировались!');
        setFail(loggedIn);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err.message}`);
        setErrorMessage(err.message);
        setMessageFail('Что-то пошло не так! Попробуйте ещё раз.');
        setFail(loggedIn);
    })
    .finally(() => {
        handleInfoTooltipPopupOpen();
        setPreloaderOpen(false);
    })
  }
  function handleLoginSubmit(email, password){
    setPreloaderOpen(true);
    auth.auhtorize(email, password)
    .then((tok) => {
        setLoggedIn(true);
        history(`/`);
        console.log(tok);
    })
    .catch((err) => {
      console.log(err.message);
      setErrorMessage(err.message);
    })
    .finally(() => {
      setPreloaderOpen(false);
    })
  }
  function handleInfoTooltipPopupOpen(){
    setInfoTooltipPopupOpen(true);
  }
  function signOut(){
    setPreloaderOpen(true);
    api.deleteToken()
    .then((res) => {
      setLoggedIn(false);
      history(`/`);
      console.log(res);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
    })
    .finally(() => {
      setPreloaderOpen(false);
    })
  }
  function handleGetUserInfo(){
    api.getUserInfo()
    .then((res) => {
      setCurentUser(res);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
    })
  }
  function handleUpdateUser(name, email){
    setPreloaderOpen(true);
    api.updateUser({name, email})
    .then(() => {
      setCurentUser({name, email});
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
      setErrorMessage(err.message);
    })
    .finally(() => {
      setPreloaderOpen(false);
    })
  }
  function handleGetMovies(){
    apiMovies.getMovies()
    .then((movie) => {
      const allMovies = movie.map((movie) => {
        movie.image = movie.image.url;
        return movie;
      });
      setMovies(allMovies);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
      setMessageFail('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      setFail(true);
      handleInfoTooltipPopupOpen();
  })
  .finally(() => {
      setPreloaderOpen(false);
    })
  }
  function handleGetSavedMovies(){
    return api.getMovieList()
    .then((savedMovies) => {
      setSavedMovies(savedMovies);
     })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
      setMessageFail('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      setFail(true);
      handleInfoTooltipPopupOpen();
    })
    .finally(() => {
      setPreloaderOpen(false);
    })
  }
  function handleDeleteMovie(movie) {
    setPreloaderOpen(true);
    api.deleteMovie(movie)
    .then(() => {
      handleGetSavedMovies()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
    })
    .finally(() => {
      setPreloaderOpen(false);
    })
  }
  function handleSaveMovie(movie){
    setPreloaderOpen(true);
    api.savedMovie(movie)
    .then(() => {
      handleGetSavedMovies()
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
    })
    .finally(() => {
      setPreloaderOpen(false);
    })
  }
  function handleClickMovieButton(movie, isSavedMovie){
      if(isSavedMovie) {
        handleDeleteMovie(movie);
      } else {
        handleSaveMovie(movie);
      }
  }
  function handleFiterMovies(){
    if(filterShortMovies){
      setFilterShortMovies(false);
    } else {
      setFilterShortMovies(true);
    }
  }
  function handleSearchMovies(searchWord){
      setPreloaderOpen(true);
      handleGetMovies()
      handleGetSavedMovies()
      .then(() => {
        setSearchWord(searchWord);
      })
  }
  function setSearchWord(searchWord){
    setSearchWordMovies(searchWord);
  }
  function handleAddMoreMovies(){
    setMoreMovies(true);
  }
  function handleStopMoreMovies(){
    setMoreMovies(false);
  }
  function handleAddButtonMore(){
    setAddButtonMore(true);
  }
  function handleDeleteButtonMore(){
    setAddButtonMore(false);
  }

  React.useEffect(() => {
    api.checkToken()
    .then(() => {
      setLoggedIn(true);
      history('/movies');
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }, [])
  React.useEffect(() => {
      handleGetUserInfo();
  }, [])
  React.useEffect(() => { 
  const closeByEscape = (evt) => { 
    if (evt.key === 'Escape') { 
     function handleCloseAllPopups(){
        if(isBarOpen){
          setBarOpen(false);
      }
      if(isInfoTooltipPopupOpen){
        setInfoTooltipPopupOpen(false);
      }
    }
    handleCloseAllPopups();
    } 
  } 
    document.addEventListener('keydown', closeByEscape) 
    return () => document.removeEventListener('keydown', closeByEscape) 
  }, [isInfoTooltipPopupOpen, isBarOpen]) 
  return (
    <div className="page">
      <CurrentUserContext.Provider value={curentUser}>
        <Routes>
          <Route path={`/sign-in`} element={ 
              <Login onSubmit={handleLoginSubmit} errorMessage={errorMessage}></Login>
          }/>
          <Route path={`/sign-up`} element={ 
              <Register onSubmit={handleRegisterSubmit} errorMessage={errorMessage}></Register>
          }/>
          <Route exact path={`/`} element={ 
              <Main loggedIn={loggedIn} openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick}></Main>
          }/>
          <Route path={`/movies`} element={ 
              <ProtectedRoute movies={movies} moviesName='movies' setSearchWord={setSearchWord} savedMovieButtons={savedMovies} searchWordMovies={searchWordMovies} 
              filterShortMovies={filterShortMovies} handleFiterMovies={handleFiterMovies} addMoreMovies={addMoreMovies}
              handleStopMoreMovies={handleStopMoreMovies} handleAddButtonMore={handleAddButtonMore} handleDeleteButtonMore={handleDeleteButtonMore} 
              onClickButtonMore={handleAddMoreMovies} addButtonMore={addButtonMore} onClickMovieButton={handleClickMovieButton} onSubmitSearch={handleSearchMovies} 
              loggedIn={loggedIn} component={Movies} openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick}>
               </ProtectedRoute>
          }/>
          <Route path={`/saved-movies`} element={ 
              <ProtectedRoute movies={savedMovies} moviesName='saved-movies' setSearchWord={setSearchWord} savedMovieButtons={savedMovies} searchWordMovies={searchWordMovies}
              filterShortMovies={filterShortMovies} handleGetSavedMovies={handleGetSavedMovies} handleFiterMovies={handleFiterMovies} addMoreMovies={addMoreMovies} 
              handleStopMoreMovies={handleStopMoreMovies} handleAddButtonMore={handleAddButtonMore} handleDeleteButtonMore={handleDeleteButtonMore} 
              onClickButtonMore={handleAddMoreMovies} addButtonMore={addButtonMore} onClickMovieButton={handleClickMovieButton} onSubmitSearch={handleSearchMovies}
              loggedIn={loggedIn} component={SavedMovies} openNavigation={openNavigation} isBarOpen={isBarOpen}closePopup={handleCloseAllPopupsClick}>
              </ProtectedRoute>
          }/>
          <Route path={`/profile`} element={ 
              <ProtectedRoute loggedIn={loggedIn} handleGetUserInfo={handleGetUserInfo} component={Profile} openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick} 
              onSignOut={signOut} onSubmit={handleUpdateUser} errorMessage={errorMessage}></ProtectedRoute>
          }/>
          <Route path={`*`} element={ 
              <NotFound></NotFound>
          }/>
        </Routes>
        <InfoTooltipPopup onClose={handleCloseAllPopupsClick} isOpen={isInfoTooltipPopupOpen} isFail={isFail} messageSucces={messageSucces} 
         messageFail={messageFail}/>
        <Preloader isOpen={isPreloaderOpen}></Preloader>
      </CurrentUserContext.Provider>
    </div>
  );
})

export default App;
