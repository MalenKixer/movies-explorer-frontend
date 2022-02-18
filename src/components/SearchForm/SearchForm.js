import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';
import './SearchForm.css';

const SearchForm = React.memo((props) =>{
    const[movieName, setMovieName] = React.useState('');
    function handleSubmit(evt){
        evt.preventDefault();
        props.onSubmit(movieName);
    }
    function onChange(evt){
        setMovieName(evt.target.value);
    }
    return (
        <form className="search-form" name="search" onSubmit={handleSubmit}>
            <label className='search-form__field'>
                <div className='search-form__icon'></div>
                <input className= 'search-form__input' type="text" name="search"  placeholder="Фильм"  
                required  id='name-search-input' autoComplete="off" value={movieName} onChange={onChange} />   
                <span className='search-form__input-error name-search-input-error'></span>
                <button className='search-form__icon search-form__button' type='submit' onSubmit=''></button>
            </label>
            <FilterCheckbox moviesName={props.moviesName} handleFiterMovies={props.handleFiterMovies}></FilterCheckbox>
        </form>  
    )
})

export default SearchForm;