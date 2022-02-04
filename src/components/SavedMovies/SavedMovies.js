import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import React from 'react';
import More from '../More/More';
import Footer from '../Footer/Footer';
import HeaderMovies from '../HeaderMovies/HeaderMovies';

const SavedMovies = React.memo((props) =>{
    return (
        <main className="content">
            <HeaderMovies openNavigation={props.openNavigation} isBarOpen={props.isBarOpen} closePopup={props.closePopup}></HeaderMovies>
            <SearchForm></SearchForm>
            <MovieCardList cardName='saved-movie'></MovieCardList>
            <More></More>
            <Footer></Footer>
        </main>
    );
})

export default SavedMovies;