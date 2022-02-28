import Popup from "../Popup/Popup";
import './Navigation.css'
import React from 'react';
import '../Header/Header.css'
import { NavLink } from 'react-router-dom';

const Navigation = React.memo((props) =>{
    const[isOpen, setOpen] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth > 768 ){
                setOpen(false);
            } 
            if(window.innerWidth <= 768 ){
                setOpen(props.isOpen);
            } 
        })
        return () => {
            window.removeEventListener('resize', () => {
                if(window.innerWidth > 768 ){
                    setOpen(false);
                } 
                if(window.innerWidth <= 768 ){
                    setOpen(props.isOpen);
                } 
            })
        }
    }, [])
    React.useEffect(() => {
        setOpen(props.isOpen);
        console.log(props.isOpen)
    }, [props.isOpen])
    return(
        <Popup isOpen={window.innerWidth > 768 ? false : isOpen} onClose={props.closePopup}>
            <nav className="navigation">
                <NavLink className="header__link-account" activeClassName="header__link_active" to='/profile' onClick={props.closePopup}>Аккаунт
                    <div className="header__icon-account"></div>
                </NavLink>
                <div className="header__links" id="links-bar">
                    <NavLink className="header__link header__link-bar" activeClassName="header__link_active" to='/' onClick={props.closePopup} >Главная</NavLink>
                    <NavLink className="header__link header__link-bar" activeClassName="header__link_active" to='/movies' onClick={props.closePopup}>Фильмы</NavLink>
                    <NavLink className="header__link header__link-bar" activeClassName="header__link_active" to='/saved-movies' onClick={props.closePopup}>Сохранённые фильмы</NavLink>
                </div>
            </nav>
        </Popup> 
    )
})

export default Navigation;