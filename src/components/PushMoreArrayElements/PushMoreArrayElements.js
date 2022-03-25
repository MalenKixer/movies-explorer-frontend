function pushMoreArrayElements(renderingMovies, movies, moviesMaxLength, quantityOfAddMovies){
    renderingMovies.push(movies.slice(moviesMaxLength, moviesMaxLength + quantityOfAddMovies));
    return renderingMovies;
}

export default pushMoreArrayElements;