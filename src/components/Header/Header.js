import './Header.css';
import React from 'react';

const Header = React.memo((props) =>{
    return(
        <header className="header">
            <div className="logo"></div>  
            {props.children}
        </header>
    )
})

export default Header;