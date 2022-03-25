function HandleLimitationMovies (movies, moviesMaxLength, ){
      if(movies.length > moviesMaxLength){
        return movies.slice(0, moviesMaxLength);
      } 
      if(movies.length <= moviesMaxLength || !movies){
        return movies;
      }
  }

export default HandleLimitationMovies;