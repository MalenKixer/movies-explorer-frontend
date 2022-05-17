import React, { useCallback } from 'react';

const HandleLimitationMovies = React.memo((props) => {
    const handleStopMoreMovies = props.handleStopMoreMovies;
    const handleAddButtonMore = props.handleAddButtonMore;
    const handleDeleteButtonMore = props.handleDeleteButtonMore;
    const addMoreMovies = props.addMoreMovies;
    const movies = props.movies;
    const [moviesMaxLength, setMoviesMaxLength] = React.useState(props.moviesMaxLength);
    const quantityOfAddMovies = props.quantityOfAddMovies;

    const pushMoreMovies = useCallback((renderingMovies) => {
        renderingMovies.push(movies.slice(moviesMaxLength, moviesMaxLength + quantityOfAddMovies));
        setMoviesMaxLength(moviesMaxLength + quantityOfAddMovies);
        handleStopMoreMovies();
        return renderingMovies;
    }, [moviesMaxLength, handleStopMoreMovies, movies, quantityOfAddMovies])
    const limitationMovies = useCallback(() => {
        if(movies.length > moviesMaxLength){
          handleAddButtonMore()
          const renderingMovies = movies.slice(0, moviesMaxLength);
          if(addMoreMovies){
            return pushMoreMovies(renderingMovies);
          } else {
            return renderingMovies;
          }
        }
        if(movies.length <= moviesMaxLength || !movies){
          handleDeleteButtonMore();
          return movies;
        }
      }, [movies, moviesMaxLength, pushMoreMovies, handleAddButtonMore, addMoreMovies, handleDeleteButtonMore])
      return() =>{
        limitationMovies()
      }
})

export default HandleLimitationMovies;