import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import More from '../More/More';
import Footer from '../Footer/Footer';
import HeaderMovies from '../HeaderLoggedIn/HeaderLoggedIn';

const Movies = React.memo((props) =>{
    return (
        <main className="content">
            <HeaderMovies openNavigation={props.openNavigation} isBarOpen={props.isBarOpen} closePopup={props.closePopup}></HeaderMovies>
            <SearchForm setFilterShortMovies={props.setFilterShortMovies}
             onSubmit={props.onSubmitSearch} filterShortMovies={props.filterShortMovies} moviesName={props.moviesName} setRememberedMovies={props.setRememberedMovies}></SearchForm>
            <MovieCardList savedAllMovies={props.savedAllMovies}
             filterShortMovies={props.filterShortMovies} addMoreMovies={props.addMoreMovies}
             handleStopMoreMovies={props.handleStopMoreMovies} handleAddButtonMore={props.handleAddButtonMore} 
             handleDeleteButtonMore={props.handleDeleteButtonMore} onClickMovieButton={props.onClickMovieButton} buttonName="Сохранить" movies={props.movies}
             onResizeScreen={props.onResizeScreen} moviesName={props.moviesName}></MovieCardList>
            <More addButton={props.addButtonMore} onClick={props.onClickButtonMore}></More>
            <Footer></Footer>
        </main>
    );
})

export default Movies;