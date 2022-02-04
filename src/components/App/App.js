import './App.css';
import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
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

const App = React.memo(() => {
  const[isBarOpen, setBarOpen] = React.useState(false);
  function openNavigation() {
      setBarOpen(true);
  }
  function handleCloseAllPopupsClick(){
    if(isBarOpen){
       setBarOpen(false);
    }
  }
  return (
    <div className="page">
      <CurrentUserContext.Provider value=''>
        <Routes>
          <Route path={`/sign-in`} element={ 
              <Login></Login>
          }/>
          <Route path={`/sign-up`} element={ 
              <Register></Register>
          }/>
          <Route exact path={`/`} element={ 
              <Main></Main>
          }/>
          <Route path={`/movies`} element={ 
              <Movies openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick}></Movies>
          }/>
          <Route path={`/saved-movies`} element={ 
              <SavedMovies openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick}></SavedMovies>
          }/>
          <Route path={`/profile`} element={ 
              <Profile openNavigation={openNavigation} isBarOpen={isBarOpen} closePopup={handleCloseAllPopupsClick}></Profile>
          }/>
          <Route path={`*`} element={ 
              <NotFound></NotFound>
          }/>
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
})

export default App;
