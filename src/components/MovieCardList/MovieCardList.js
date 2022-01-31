import './MovieCardList.css';
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieCardList = React.memo((props) =>{
    return (
        <ul className="movies">
            <MovieCard buttonName={props.buttonName} cardName={props.cardName}></MovieCard>
        </ul>
    )
})

export default MovieCardList;