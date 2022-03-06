import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import React from 'react';
import More from '../More/More';
import Footer from '../Footer/Footer';
import HeaderMovies from '../HeaderLoggedIn/HeaderLoggedIn';

const SavedMovies = React.memo((props) =>{
    React.useEffect(() => {
        props.setSavedMoviesAll();
    }, [])
    return (
        <main className="content">
            <HeaderMovies openNavigation={props.openNavigation}  isBarOpen={props.isBarOpen} closePopup={props.closePopup}></HeaderMovies>
            <SearchForm  onSubmit={props.onSubmitSearch} filterShortMovies={props.filterShortMovies} 
            moviesName={props.moviesName} setFilterShortMovies={props.setFilterShortMovies}></SearchForm>
            <MovieCardList savedAllMovies={props.savedAllMovies}
            filterShortMovies={props.filterShortMovies} getSavedMovies={props.handleGetSavedMovies} 
            addMoreMovies={props.addMoreMovies} handleStopMoreMovies={props.handleStopMoreMovies} handleAddButtonMore={props.handleAddButtonMore} 
            handleDeleteButtonMore={props.handleDeleteButtonMore} onClickMovieButton={props.onClickMovieButton} moviesName={props.moviesName} onResizeScreen={props.onResizeScreen} 
            movies={props.movies}></MovieCardList>
            <More addButton={props.addButtonMore} onClick={props.onClickButtonMore} ></More>
            <Footer></Footer>
        </main>
    );
})

export default SavedMovies;