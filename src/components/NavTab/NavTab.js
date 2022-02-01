import './NavTab.css';
import React from 'react';

const NavTab = React.memo((props) =>{
   return(
        <ul className="nav-tab">
               <a className="nav-tab__link" href="#about-project" >О проекте</a>
               <a className="nav-tab__link" href="#techs">Технологии</a>
               <a className="nav-tab__link" href="#about-me">Студент</a>
        </ul>
    )
})

export default NavTab;