import React, { useCallback } from 'react';
import HandleLimitationMovies from '../LimitationMovies/LimitationMovies';

const HandleMoviesOnResizeScreen = React.memo((props) => {
  const [moviesMaxLength, setMoviesMaxLength] = React.useState(0);
  const [quantityOfAddMovies, setQuantityOfAddMovies] = React.useState(0);
  const renderMoviesOnResizeScreen = useCallback(() => {
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
    return <HandleLimitationMovies handleStopMoreMovies={props.handleStopMoreMovies} handleAddButtonMore={props.handleAddButtonMore} 
    handleDeleteButtonMore={props.handleDeleteButtonMore} addMoreMovies={props.addMoreMovies} movies={props.movies} moviesMaxLength={moviesMaxLength}
    quantityOfAddMovies={quantityOfAddMovies}></HandleLimitationMovies>
  }, [moviesMaxLength, props.addMoreMovies, props.handleAddButtonMore, props.handleDeleteButtonMore, props.handleStopMoreMovies, props.movies, quantityOfAddMovies])
  return () => {
    renderMoviesOnResizeScreen()
  }
})

export default HandleMoviesOnResizeScreen;