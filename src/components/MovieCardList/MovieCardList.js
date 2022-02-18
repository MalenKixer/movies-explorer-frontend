import './MovieCardList.css';
import React, { useCallback } from "react";
import MovieCard from '../MovieCard/MovieCard';

const MovieCardList = React.memo((props) =>{
    const handleStopMoreMovies = props.handleStopMoreMovies;
    const handleAddButtonMore = props.handleAddButtonMore;
    const handleDeleteButtonMore = props.handleDeleteButtonMore;
    const addMoreMovies = props.addMoreMovies;
    const filterShortMovies = props.filterShortMovies;
    const moviesAll = props.movies;
    const [quantityOfAddMovies, setQuantityOfAddMovies] = React.useState(0);
    const [searchedMovies, setSearchedMovies] = React.useState([]);
    const [movies, setMovies] = React.useState([]);
    const [moviesMaxLength, setMoviesMaxLength] = React.useState(0);
    const [renderingMovies, setRenderMovies] = React.useState([])
    const handleSearchMovies = useCallback(() => {
      let searchWord = props.searchWordMovies;
      if(searchWord !== ''){
        const filterMovies = moviesAll.filter(movie => movie.nameRU.includes(searchWord));
        setSearchedMovies(filterMovies);
        setMovies(filterMovies);
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
        if(moviesMaxLength < 12){
          setMoviesMaxLength(12);
          setQuantityOfAddMovies(3);
        }
      }
      if(window.innerWidth < 768 && window.innerWidth > 480){
        if(moviesMaxLength < 8){
          setMoviesMaxLength(8);
          setQuantityOfAddMovies(2);
        }
      }
      if(window.innerWidth <= 480){
        if(moviesMaxLength < 5){
          setMoviesMaxLength(5);
          setQuantityOfAddMovies(1);
        }
      }
    }, [moviesMaxLength])
    React.useEffect(() => {
      if(props.moviesName)
      props.setSearchWord('');
    }, [props.moviesName])
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
        setRenderMovies(handleLimitationMovies(movies));
    }, [handleLimitationMovies, movies])
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