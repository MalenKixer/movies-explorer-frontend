import './FilterCheckbox.css';
import React from 'react';

const FilterCheckbox = React.memo((props) => {
    function filterCheck(evt){
        if(evt.target.checked){
            props.setFilterShortMovies(true);
          } else {
            props.setFilterShortMovies(false);
          }
    }
    return (
            <label className='filter-checkbox'>
                <input className='filter-checkbox__input' type="checkbox" name="genre" id='genre' checked={props.filterShortMovies ? true : false}
                onChange={filterCheck}/>
                <span className='filter-checkbox__slider'></span>Короткометражки
            </label>
    )
})

export default FilterCheckbox;