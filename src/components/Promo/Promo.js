import './Promo.css';
import React from 'react';
import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';

const Promo = React.memo((props) =>{
    return(
        <div className="promo">
            <Header>
                <div className="header__links">
                    <NavLink className="header__link-auth" activeClassName="header__link_active" to={`/sign-up`}>Регистрация</NavLink>
                    <NavLink className="header__link-auth header__button-auth" activeClassName="header__link_active" to={`/sign-in`}>Войти</NavLink>
                </div>
            </Header>
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        </div>
    )
})

export default Promo;