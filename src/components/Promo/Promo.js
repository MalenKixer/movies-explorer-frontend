import "./Promo.css";
import React from "react";
import HeaderAuthorizate from "../HeaderAuthorizate/HeaderAuthorizate";
import HeaderLoggedIn from "../HeaderLoggedIn/HeaderLoggedIn";
import { useSelector } from "react-redux";

const Promo = React.memo((props) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  return (
    <section className="promo">
      {loggedIn ? (
        <HeaderLoggedIn
          name="main"
          closePopup={props.closePopup}
        ></HeaderLoggedIn>
      ) : (
        <HeaderAuthorizate></HeaderAuthorizate>
      )}
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
});

export default Promo;
