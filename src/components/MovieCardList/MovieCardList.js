import './MovieCardList.css';
import React, { useCallback } from "react";
import MovieCard from '../MovieCard/MovieCard';

import { ShortMoviesDuration, LengthMoviesForMaxWidth, LengthMoviesForMiddleWidth, 
  LengthMoviesForMinWidth, QuantityOfAddMoviesForMaxWidth, QuantityOfAddMoviesForMiddleWidth, QuantityOfAddMoviesForMinWidth } from '../../utils/const';

const MovieCardList = React.memo((props) =>{
    const handleStopMoreMovies = props.handleStopMoreMovies;
    const handleAddButtonMore = props.handleAddButtonMore;
    const handleDeleteButtonMore = props.handleDeleteButtonMore;
    const addMoreMovies = props.addMoreMovies;
    const [quantityOfAddMovies, setQuantityOfAddMovies] = React.useState(0);
    const [moviesMaxLength, setMoviesMaxLength] = React.useState(0);
    const [renderingMovies, setRenderMovies] = React.useState([])
    const [movies, setMovies] = React.useState([]);
    const [nothingFound, setNothingFound] = React.useState(false);
    const pushMoreMovies = useCallback((movies, renderingMovies) => {
      renderingMovies.push(movies.slice(moviesMaxLength, moviesMaxLength + quantityOfAddMovies));
      setMoviesMaxLength(moviesMaxLength + quantityOfAddMovies);
      handleStopMoreMovies();
      return renderingMovies;
  }, [moviesMaxLength, handleStopMoreMovies, quantityOfAddMovies])
    const handleLimitationMovies = useCallback((movies) => {
      if(movies.length > moviesMaxLength){
        handleAddButtonMore()
        const renderingMovies = movies.slice(0, moviesMaxLength);
        if(addMoreMovies){
          return pushMoreMovies(movies, renderingMovies);
        } else {
          return renderingMovies;
        }
      } 
      if(movies.length <= moviesMaxLength || !movies){
        handleDeleteButtonMore();
        return movies;
      }
    }, [moviesMaxLength, pushMoreMovies, handleAddButtonMore, addMoreMovies, handleDeleteButtonMore])
    const handleMoviesOnResizeScreen = useCallback(() => {
      if(window.innerWidth >= 768){
        if(moviesMaxLength < LengthMoviesForMaxWidth){
          setMoviesMaxLength(LengthMoviesForMaxWidth);
          setQuantityOfAddMovies(QuantityOfAddMoviesForMaxWidth);
        }
      }
      if(window.innerWidth < 768 && window.innerWidth > 480){
        if(moviesMaxLength < LengthMoviesForMiddleWidth){
          setMoviesMaxLength(LengthMoviesForMiddleWidth);
          setQuantityOfAddMovies(QuantityOfAddMoviesForMiddleWidth);
        }
      }
      if(window.innerWidth <= 480){
        if(moviesMaxLength < LengthMoviesForMinWidth){
          setMoviesMaxLength(LengthMoviesForMinWidth);
          setQuantityOfAddMovies(QuantityOfAddMoviesForMinWidth);
        }
      }
    }, [])
    React.useEffect(() => {
        if(props.moviesName === 'movies'){
          localStorage.setItem('filter-movies', JSON.stringify({
            movies: props.movies,
            checkbox: props.filterShortMovies,
          }));
        } 
        if(props.filterShortMovies){
          const filterMovies = props.movies.filter(movie => movie.duration <= ShortMoviesDuration);
            setMovies(filterMovies);
        } else {
            setMovies(props.movies);
        }
}, [props.filterShortMovies, props.movies, props.moviesName, props.nothingFound])
    React.useEffect(() => {
      if(props.moviesName === 'saved-movies'){
        setMovies(props.savedAllMovies);
      }
    }, []);
    React.useEffect(() => {
        window.addEventListener('resize', () => {
            handleMoviesOnResizeScreen();
        });
        handleMoviesOnResizeScreen();
        return () => {
            window.removeEventListener('resize', () => {
                handleMoviesOnResizeScreen();
            });
        }
    }, [])
    React.useEffect(() => {
      const searchWord = JSON.parse(localStorage.getItem('search-word'));
      if(renderingMovies.length === 0 && searchWord.searchWord === ''){
        setNothingFound(false);
      } else {
        setNothingFound(true)
      }
    }, [renderingMovies])
    React.useEffect(() => {
        setRenderMovies(handleLimitationMovies(movies));
    }, [handleLimitationMovies, movies])
    return (
      <>{(renderingMovies.length === 0 && nothingFound) ? <p className="nothing-found">Ничего не найдено</p> :
        <ul className="movies">
        {renderingMovies.map((movie) => 
          <MovieCard savedAllMovies={props.savedAllMovies} buttonName={props.buttonName} moviesName={props.moviesName} movie={movie} 
           onClick={props.onClickMovieButton} key={movie.id}></MovieCard>
          )}
        </ul>
      }
      </>
)
})

export default MovieCardList;