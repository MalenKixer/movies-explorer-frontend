import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';
import './SearchForm.css';

const SearchForm = React.memo((props) =>{
    const[movieName, setMovieName] = React.useState('');
    const filterMovies = JSON.parse(localStorage.getItem('filter-movies'));
    const searchWord = JSON.parse(localStorage.getItem('search-word'));
    function onSubmit(evt){
        evt.preventDefault();
        props.onSubmit(movieName, props.moviesName);
        if(props.moviesName === 'movies'){
            localStorage.setItem('search-word', JSON.stringify({
                searchWord: movieName,
            }))
        }
    }
    function onChange(evt){
        setMovieName(evt.target.value);
    }
    React.useEffect(() => {
        if(filterMovies !== null && searchWord !== null && props.moviesName === 'movies'){
            setMovieName(searchWord.searchWord);
            props.setRememberedMovies(filterMovies.movies);
            props.setFilterShortMovies(filterMovies.checkbox);
          }
        if(props.moviesName === 'saved-movies'){
            setMovieName('');
            props.setFilterShortMovies(false);
        }
    }, [])
    return (
        <form className="search-form" name="search" onSubmit={onSubmit}>
            <label className='search-form__field'>
                <div className='search-form__icon'></div>
                <input className= 'search-form__input' type="text" name="search"  placeholder="Фильм"  
                required  id='name-search-input' autoComplete="off" value={movieName} onChange={onChange} />   
                <span className='search-form__input-error name-search-input-error'></span>
                <button className='search-form__icon search-form__button' type='submit' onSubmit=''></button>
            </label>
            <FilterCheckbox moviesName={props.moviesName} setFilterShortMovies={props.setFilterShortMovies} filterShortMovies={props.filterShortMovies}></FilterCheckbox>
        </form>  
    )
})

export default SearchForm;
