import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';
import './SearchForm.css';

const SearchForm = React.memo((props) =>{
    const[movieName, setMovieName] = React.useState('');
    const[filterShortMovies, setFilterShortMovies] = React.useState(false);
    function onSubmit(evt){
        evt.preventDefault();
        props.onSubmit(movieName, props.moviesName);
    }
    function onChange(evt){
        setMovieName(evt.target.value);
    }
    React.useEffect(() => {
        setFilterShortMovies(props.filterShortMovies);
    }, [props.filterShortMovies, setFilterShortMovies])
    React.useEffect(() => {
        if(movieName !== ''){
            props.onSubmit(movieName, props.moviesName);
        }
    }, [movieName]);
    React.useEffect(() => {
        const filteredMovies = JSON.parse(localStorage.getItem('filter-movies'));
        if(filteredMovies !== null){
            setMovieName(filteredMovies.searchWord);
          } else {
            return
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
            <FilterCheckbox moviesName={props.moviesName} handleFiterMovies={props.handleFiterMovies} filterShortMovies={filterShortMovies}></FilterCheckbox>
        </form>  
    )
})

export default SearchForm;