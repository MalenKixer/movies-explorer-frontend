import './MovieCard.css';
import React from 'react';

const MovieCard = React.memo((props) =>{
    return (
        <li className="movie__card">
            <div className="movie__description">
                <h3 className="movie__title">В погоне за Бенкси</h3>
                <p className="movie__time">27 минут</p>
            </div>
            <img className="movie__image" alt="" src="https://w-dog.ru/wallpapers/6/1/452614699819800/snezhnyj-bars-snezhnyj-leopard-irbis-lezhit-fotoshop-tyuning.jpg"></img>
            <button className={`movie__button ${props.isCardSaved === 'movie' ? 'movie__button_saved' : ''} ${props.cardName === 'saved-movie' ? 'movie__button_delete' : ''}
            movie__button_saved' : ''}`} onClick={props.deleteCard} type="button" name="delete-card">{props.buttonName}</button>
        </li>
    )
})

export default MovieCard;