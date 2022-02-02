import './Promo.css';
import React from 'react';

const Promo = React.memo((props) =>{
    return(
        <div className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </div>
    )
})

export default Promo;