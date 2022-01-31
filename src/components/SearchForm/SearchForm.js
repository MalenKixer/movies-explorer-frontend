import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import React from 'react';
import './SearchForm.css';

const SearchForm = React.memo((props) =>{
    return (
        <form className="search-form" name="search" onSubmit={props}>
            <label className='search-form__field'>
                <div className='search-form__icon'></div>
                <input className= 'search-form__input' type="text" name="search" placeholder="Фильм"  
                required  id='name-search-input' autocomplete="off"  onChange='' />   
            {/*<span className='search-form__input-error name-search-input-error'></span>*/}
                <button className='search-form__icon search-form__button' type='submit' onSubmit=''></button>
            </label>
            <FilterCheckbox></FilterCheckbox>
        </form>  
    )
})

export default SearchForm;