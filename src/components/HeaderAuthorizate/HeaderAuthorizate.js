import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import React from "react";

const HeaderAuthorizate = React.memo(() => {
  return (
    <Header>
      <div className="header__links">
        <NavLink
          className="header__link-auth"
          activeClassName="header__link_active"
          to={`/sign-up`}
        >
          Регистрация
        </NavLink>
        <NavLink
          className="header__link-auth header__button-auth"
          activeClassName="header__link_active"
          to={`/sign-in`}
        >
          Войти
        </NavLink>
      </div>
    </Header>
  );
});

export default HeaderAuthorizate;
