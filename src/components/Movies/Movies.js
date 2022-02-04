import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import More from '../More/More';
import Footer from '../Footer/Footer';
import HeaderMovies from '../HeaderMovies/HeaderMovies';

const Movies = React.memo((props) =>{
    return (
        <main className="content">
            <HeaderMovies openNavigation={props.openNavigation} isBarOpen={props.isBarOpen} closePopup={props.closePopup}></HeaderMovies>
            <SearchForm></SearchForm>
            <MovieCardList buttonName="Сохранить"></MovieCardList>
            <More addButton={true}></More>
            <Footer></Footer>
        </main>
    );
})

export default Movies;