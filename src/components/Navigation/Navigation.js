import Popup from "../Popup/Popup";
import React from 'react';
import '../Header/Header.css'
import { NavLink } from 'react-router-dom';

const Navigation = React.memo((props) =>{
    return(
        <Popup isOpen={props.isOpen} onClose={props.closePopup}>
            <nav className="header__nav">
                <NavLink className="header__link-account" activeClassName="header__link_active" to='/profile'>Аккаунт
                    <div className="header__icon-account"></div>
                </NavLink>
                <div className="header__links" id="links-bar">
                    <NavLink className="header__link header__link-bar" activeClassName="header__link_active" to='/'>Главная</NavLink>
                    <NavLink className="header__link header__link-bar" activeClassName="header__link_active" to='/movies'>Фильмы</NavLink>
                    <NavLink className="header__link header__link-bar" activeClassName="header__link_active" to='/saved-movies'>Сохранённые фильмы</NavLink>
                </div>
            </nav>
        </Popup> 
    )
})

export default Navigation;