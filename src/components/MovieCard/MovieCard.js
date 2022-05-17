import './MovieCard.css';
import React from 'react';


const MovieCard = React.memo((props) =>{
    const [isSavedMovie, setSavedMovie] = React.useState(false); 
    const [movie, setMovie] = React.useState({});
    React.useEffect(() => {
        const savedAllMovies = props.savedAllMovies;
        setSavedMovie(savedAllMovies.some(movie => {
            if(movie.id === props.movie.id ){
                setMovie(movie);
                return true;
            } else {
                return false;
            }
        }));
        if(!isSavedMovie) {
            setMovie(props.movie);
        } 
    }, [props.movie, props.savedAllMovies, isSavedMovie]);
    return (
        <li className="movie">
            <div className="movie__description">
                <h3 className="movie__title">{props.movie.nameRU}</h3>
                <p className="movie__time">{`${props.movie.duration} минут`}</p>
            </div>
            <a className="movie__link" href={props.movie.trailerLink} target="_blank" rel="noreferrer"><img className="movie__image"  alt={props.movie.nameRU} src={`https://api.nomoreparties.co/${props.movie.image}`}></img></a>
            <button className={`movie__button ${isSavedMovie && props.moviesName === 'saved-movies' ? 'movie__button_delete' : ''} ${isSavedMovie && props.moviesName === 'movies' ? 'movie__button_saved' : ''}`} 
            onClick={() => props.onClick(movie, isSavedMovie)} type="button">{props.buttonName}</button>
        </li>
    )
})

export default MovieCard;