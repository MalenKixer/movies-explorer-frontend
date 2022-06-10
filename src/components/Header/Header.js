import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = React.memo((props) => {
  return (
    <header className={`header ${props.headerClassName}`}>
      <NavLink className="logo" activeClassName="" to="/"></NavLink>
      {props.children}
    </header>
  );
});

export default Header;
