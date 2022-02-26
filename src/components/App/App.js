import './App.css';
import React from 'react'; 
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
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
  const[allMovies, setAllMovies] = React.useState([]);
  const[savedMovies, setSavedMovies] = React.useState([]);
  const[savedAllMovies, setSavedAllMovies] = React.useState([]);
  const[isPreloaderOpen, setPreloaderOpen] = React.useState(false);
  const[filterShortMovies, setFilterShortMovies] = React.useState(false);
  const[isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = React.useState(false);
  const[nothingFound, setNothingFound] = React.useState(false);
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
    })
    .catch((err) => {
        console.log(`Ошибка: ${err.message}`);
        setErrorMessage(err.message);
        setMessageFail('Что-то пошло не так! Попробуйте ещё раз.');
    })
    .finally(() => {
        setPreloaderOpen(false);
        setFail(!loggedIn);
        handleInfoTooltipPopupOpen();
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
      setMessageFail('Что-то пошло не так! Попробуйте ещё раз.');
      setFail(true);
      handleInfoTooltipPopupOpen();
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
      localStorage.setItem('filter-movies', JSON.stringify({
        searchWord: '',
        checkbox: '',
      }))
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
      setMessageFail(err.message);
      setFail(true);
      handleInfoTooltipPopupOpen();
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
      setMessageSucces('Редактирование данных прошло успешно');
      setFail(false);
      handleInfoTooltipPopupOpen();
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
      setAllMovies(movie.map((movie) => {
        movie.image = movie.image.url;
        return movie;
      }));
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
  })
  .finally(() => {
      setPreloaderOpen(false);
    })
  }
  function handleGetSavedMovies(){
    api.getMovieList()
    .then((savedMovies) => {
      setSavedAllMovies(savedMovies);
      setSavedMovies(savedMovies);
     })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
    })
    .finally(() => {
      setPreloaderOpen(false);
    })
  }
  function handleDeleteMovie(movie) {
    setPreloaderOpen(true);
    api.deleteMovie(movie)
    .then((res) => {
      setSavedMovies(savedMovies.filter(savedMovie => savedMovie.id !== res.id));
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
      setMessageFail(err.message);
      setFail(true);
      handleInfoTooltipPopupOpen();
    })
    .finally(() => {
      setPreloaderOpen(false);
    })
  }
  function handleSaveMovie(movie){
    setPreloaderOpen(true);
    api.savedMovie(movie)
    .then((res) => {
      setSavedMovies([...savedMovies, res]);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err.message}`);
      setMessageFail(err.message);
      setFail(true);
      handleInfoTooltipPopupOpen();
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
  function handleSearchMovies(searchWord, moviesName){
      setPreloaderOpen(true);
      setNothingFound(false);
      if(searchWord !== ''){
        const movies = moviesName === 'movies' ? allMovies : savedAllMovies;
        const filterMovies = movies.filter(movie => movie.nameRU.includes(searchWord.toLowerCase()));
        if(filterMovies.length > 0){
          if(moviesName === 'movies'){
            setMovies(filterMovies);
          } 
          if(moviesName === 'saved-movies'){
            setSavedMovies(filterMovies);
          }
          setPreloaderOpen(false);
          localStorage.setItem('filter-movies', JSON.stringify({
            searchWord: searchWord,
            checkbox: filterShortMovies,
          }))
        } else {
          setNothingFound(true);
          setPreloaderOpen(false);
        }
      }
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
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
      setMessageFail(err.message);
      setFail(true);
      handleInfoTooltipPopupOpen();
    })
  }, [])
  React.useEffect(() => {
      handleGetUserInfo();
      handleGetSavedMovies();
      handleGetMovies();
  }, [])
  React.useEffect(() => {
    const filteredMovies = JSON.parse(localStorage.getItem('filter-movies'));
    if(typeof(filteredMovies) === 'object'){
      setFilterShortMovies(filteredMovies.checkbox)
    } else {
      return
    }
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
            <>
            {loggedIn ? <Navigate to='/'/> : <Login onSubmit={handleLoginSubmit} errorMessage={errorMessage}></Login>}
            </>
          }/>
          <Route path={`/sign-up`} element={ 
            <>
            {loggedIn ? <Navigate to='/'/> : <Register onSubmit={handleRegisterSubmit} errorMessage={errorMessage}></Register>}
            </>
          }/>
          <Route exact path={`/`} element={ 
              <Main loggedIn={loggedIn} openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick}></Main>
          }/>
          <Route path={`/movies`} element={ 
              <ProtectedRoute movies={movies} nothingFound={nothingFound} savedMovies={savedMovies} moviesName='movies'  
              filterShortMovies={filterShortMovies} handleFiterMovies={handleFiterMovies} addMoreMovies={addMoreMovies}
              handleStopMoreMovies={handleStopMoreMovies} handleAddButtonMore={handleAddButtonMore} handleDeleteButtonMore={handleDeleteButtonMore} 
              onClickButtonMore={handleAddMoreMovies} addButtonMore={addButtonMore} onClickMovieButton={handleClickMovieButton} onSubmitSearch={handleSearchMovies} 
              loggedIn={loggedIn} component={Movies} openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick}>
               </ProtectedRoute>
          }/>
          <Route path={`/saved-movies`} element={ 
              <ProtectedRoute movies={savedMovies} nothingFound={nothingFound} savedMovies={savedMovies} moviesName='saved-movies' 
              filterShortMovies={filterShortMovies} handleFiterMovies={handleFiterMovies} addMoreMovies={addMoreMovies} 
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
