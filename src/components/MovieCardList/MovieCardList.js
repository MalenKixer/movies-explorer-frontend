import './MovieCardList.css';
import React, { useCallback } from "react";
import MovieCard from '../MovieCard/MovieCard';
import HandleMoviesOnResizeScreen from '../handleMoviesOnResizeScreen/handleMoviesOnResizeScreen';

const MovieCardList = React.memo((props) =>{
    const filterShortMovies = props.filterShortMovies;
    const moviesAll = props.movies;
    const [searchedMovies, setSearchedMovies] = React.useState([]);
    const [movies, setMovies] = React.useState();
    const [renderingMovies, setRenderMovies] = React.useState([]);

    const handleSearchMovies = useCallback(() => {
      let searchWord = props.searchWordMovies;
      if(searchWord !== ''){
        const filterMovies = moviesAll.filter(movie => movie.nameRU.includes(searchWord));
        setSearchedMovies(filterMovies);
        setMovies(filterMovies);
        localStorage.setItem('movies', JSON.stringify(filterMovies));
      }
      if(searchWord === '' && props.moviesName === 'saved-movies'){
        setSearchedMovies(moviesAll);
        setMovies(moviesAll)
      }
    }, [moviesAll, props.searchWordMovies, props.moviesName])
    const handleFiterMovies = useCallback(() => {
      if (filterShortMovies){
        setMovies(searchedMovies.filter(movie => movie.duration <= 40))
      }
      if(!filterShortMovies){
        setMovies(searchedMovies);
      }
    }, [filterShortMovies, searchedMovies])
    React.useEffect(() => {
      window.addEventListener('resize', HandleMoviesOnResizeScreen);
      HandleMoviesOnResizeScreen();
      return () => {
          window.removeEventListener('resize', HandleMoviesOnResizeScreen);
      }
    }, [])
    React.useEffect(() => {
      if(props.moviesName)
      props.setSearchWord('');
    }, [props.moviesName])
    React.useEffect(() => {
      setRenderMovies(<HandleMoviesOnResizeScreen handleStopMoreMovies={props.handleStopMoreMovies} handleAddButtonMore={props.handleAddButtonMore} 
        handleDeleteButtonMore={props.handleDeleteButtonMore} addMoreMovies={props.addMoreMovies} movies={props.movies}></HandleMoviesOnResizeScreen>)
      console.log(<HandleMoviesOnResizeScreen handleStopMoreMovies={props.handleStopMoreMovies} handleAddButtonMore={props.handleAddButtonMore} 
        handleDeleteButtonMore={props.handleDeleteButtonMore} addMoreMovies={props.addMoreMovies} movies={props.movies}></HandleMoviesOnResizeScreen>)
    }, [props.movies, props.addMoreMovies, props.handleAddButtonMore, props.handleDeleteButtonMore, props.handleStopMoreMovies])
    React.useEffect(() => {
      handleFiterMovies()
    }, [handleFiterMovies]);
    React.useEffect(() => {
      handleSearchMovies();
     }, [handleSearchMovies])
    return (
        <ul className="movies">
        {renderingMovies.map((movie) => 
          <MovieCard savedMovies={props.savedMovieButtons} buttonName={props.buttonName} moviesName={props.moviesName} movie={movie} onClick={props.onClickMovieButton} key={movie.id}></MovieCard>
          )}
        </ul>
    )
})

export default MovieCardList;