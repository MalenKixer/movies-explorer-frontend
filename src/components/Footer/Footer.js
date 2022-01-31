import './Footer.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = React.memo((props) =>{
    return(
        <footer className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className="footer__description">
                <p className="footer__subtitle">&copy; 2022</p>
                <nav className="footer__nav">
                    <NavLink className="footer__link" activeClassName="foote__link_active" to='//practicum.yandex.ru'>Яндекс.Практикум</NavLink>
                    <NavLink className="footer__link" activeClassName="foote__link_active" to='//github.com/MalenKixer'>Github</NavLink>
                    <NavLink className="footer__link" activeClassName="foote__link_active" to='//www.facebook.com'>Facebook</NavLink>
                </nav>
            </div>
        </footer>
    )
})

export default Footer;