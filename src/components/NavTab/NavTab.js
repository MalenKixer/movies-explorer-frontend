import './NavTab.css';
import React from 'react';
import  { NavLink } from 'react-router-dom';

const NavTab = React.memo((props) =>{
   return(
        <ul className="nav-tab">
               <NavLink className="nav-tab__link" activeClassName="nav-tab__link_active" to='#about-project'>О проекте</NavLink>
               <NavLink className="nav-tab__link" activeClassName="nav-tab__link_active" to='#techs'>Технологии</NavLink>
               <NavLink className="nav-tab__link" activeClassName="nav-tab__link_active" to='#about-me'>Студент</NavLink>
        </ul>
    )
})

export default NavTab;