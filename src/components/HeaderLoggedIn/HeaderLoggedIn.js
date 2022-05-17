import Header from '../Header/Header';
import { NavLink } from 'react-router-dom';
import React from 'react';
import Navigation from '../Navigation/Navigation';

const HeaderLoggedIn = React.memo((props) =>{
    return (
        <Header>
            <nav className="header__nav" id='bar-nav'>
                <NavLink className="header__link-account" activeClassName="header__link_active" to='/profile'>Аккаунт
                    <div className="header__icon-account"></div>
                </NavLink>
                <div className="header__links" id="links-bar">
                    <NavLink className="header__link" activeClassName="header__link_active" to='/movies'>Фильмы</NavLink>
                    <NavLink className="header__link" activeClassName="header__link_active" to='/saved-movies'>Сохранённые фильмы</NavLink>
                </div>
            </nav>
            <button className="header__bar" type="button" onClick={props.openNavigation}></button> 
            <Navigation isOpen={props.isBarOpen} closePopup={props.closePopup}></Navigation>
        </Header>
    );
})

export default HeaderLoggedIn;