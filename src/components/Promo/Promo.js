import './Promo.css';
import React from 'react';
import HeaderAuthorizate from '../HeaderAuthorizate/HeaderAuthorizate';
import HeaderLoggedIn from '../HeaderLoggedIn/HeaderLoggedIn';

const Promo = React.memo((props) =>{
    return(
        <section className="promo">
            {props.loggedIn ? <HeaderLoggedIn openNavigation={props.openNavigation} name='main' isBarOpen={props.isBarOpen} closePopup={props.closePopup}></HeaderLoggedIn> : <HeaderAuthorizate></HeaderAuthorizate>}
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </section>
    )
})

export default Promo;