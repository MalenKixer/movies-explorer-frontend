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
import * as auth from '../../utils/auth';
import { api } from '../../utils/MainApi';
import { apiMovies } from '../../utils/MoviesApi';

const App = React.memo(() => {
  const[isBarOpen, setBarOpen] = React.useState(false);
  const[loggedIn, setLoggedIn] = React.useState(false);
  const[curentUser, setCurentUser] = React.useState({});
  const[movies, setMovies] = React.useState([]);
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
    auth.register(userName, email, password)
    .then((res) => {
        setLoggedIn(true);
        history(`/movies`);
        setCurentUser(res);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`)
    })
    .finally(() => {
        handleInfoTooltipPopupOpen();
    })
  }
  function handleLoginSubmit(email, password){
    auth.auhtorize(email, password)
    .then((tok) => {
        setLoggedIn(true);
        history(`/movies`);
        console.log(tok);
    })
    .catch((err) => {
        console.log(`Ошибка: ${err}`);
    })
  }
  function handleInfoTooltipPopupOpen(){
    setInfoTooltipPopupOpen(true);
  }
  function signOut(){
    api.deleteToken()
    .then((res) => {
      setLoggedIn(false);
      history(`/sign-in`);
      console.log(res);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }
  function getMovies(){
    apiMovies.getMovies()
    .then((movies) => {
      setMovies(movies);
      console.log(movies);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }
  function getUserInfo(){
    api.getUserInfo()
    .then((res) => {
      setCurentUser(res);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }
  function handleUpdateUser(name, email){
    api.updateUser({name, email})
    .then((res) => {
      setCurentUser({name, email});
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }
  React.useEffect(() => {
    api.checkToken()
    .then(() => {
      setLoggedIn(true);
      history('/movies');
      console.log('check');
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`)
    })
  }, [])
  React.useEffect(() => {
    if(loggedIn){
      getUserInfo();
      getMovies();
    }
  }, [loggedIn])
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
              <Login onSubmit={handleLoginSubmit}></Login>
          }/>
          <Route path={`/sign-up`} element={ 
              <Register onSubmit={handleRegisterSubmit}></Register>
          }/>
          <Route exact path={`/`} element={ 
              <Main></Main>
          }/>
          <Route path={`/movies`} element={ 
              <ProtectedRoute movies={movies} loggedIn={loggedIn} component={Movies} openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick}></ProtectedRoute>
          }/>
          <Route path={`/saved-movies`} element={ 
              <ProtectedRoute loggedIn={loggedIn} component={SavedMovies} openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick}></ProtectedRoute>
          }/>
          <Route path={`/profile`} element={ 
              <ProtectedRoute loggedIn={loggedIn} component={Profile} openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick} 
              onSignOut={signOut} onSubmit={handleUpdateUser}></ProtectedRoute>
          }/>
          <Route path={`*`} element={ 
              <NotFound></NotFound>
          }/>
        </Routes>
        <InfoTooltipPopup onClose={handleCloseAllPopupsClick} isOpen={isInfoTooltipPopupOpen} loggedIn={loggedIn} subtitleSucces='Вы успешно зарегистрировались!' 
         subtitleFail='Что-то пошло не так! Попробуйте ещё раз.'/>
      </CurrentUserContext.Provider>
    </div>
  );
})

export default App;
