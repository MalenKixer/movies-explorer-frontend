import './FilterCheckbox.css';
import React from 'react';

const FilterCheckbox = React.memo((props) => {
    return (
            <label className='filter-checkbox'>
                <input className='filter-checkbox__input' type="checkbox" name="genre" id='genre' onChange=''/>
                <span className='filter-checkbox__slider'></span>Короткометражки
            </label>
    )
})

export default FilterCheckbox;