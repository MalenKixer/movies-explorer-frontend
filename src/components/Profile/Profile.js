import "./Profile.css";
import React from "react";
import Form from "../Form/Form";
import HeaderMovies from "../HeaderLoggedIn/HeaderLoggedIn";
import { useDispatch, useSelector } from "react-redux";
import onChangeInput from "../../utils/Auth/utilsFunctions/onChangeInput";
import { setCurrentUser } from "../../Redux/actions/user";
import {
  setMessageError,
} from "../../Redux/actions/message";
import { handleSignOut, handleUserUpdate } from "../../Redux/asyncActions.js/api";
const { NavLink, useNavigate } = require("react-router-dom");

const Profile = React.memo((props) => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const user = useSelector((state) => state.user.user);
  const errorMessage = useSelector((state) => state.message.messageError);
  const name = currentUser.name;
  const email = currentUser.email;
  function setUserCurrent(data) {
    dispatch(setCurrentUser(data));
  }
  function setErrorMessage(value) {
    dispatch(setMessageError(value));
  }
  function setBeginLocalStorage() {
    localStorage.setItem(
      "search-word",
      JSON.stringify({
        searchWord: "",
      })
    );
    localStorage.setItem(
      "filter-movies",
      JSON.stringify({
        checkbox: false,
      })
    );
  }
  function signOut() {
    handleSignOut()(dispatch)
      .then(() => {
        history(`/`);
        setBeginLocalStorage()
      })
  }
  function handleUpdateUser(name, email) {
    handleUserUpdate(name, email)(dispatch)
  }
  function handleProfileSubmit() {
    if (name !== user.name || email !== user.email) {
      handleUpdateUser(name, email);
    } else {
      setErrorMessage(
        "Введенные данные совпадают с исходными. Пожалуйста, измените их"
      );
    }
  }
  function onChange(evt) {
    const user = onChangeInput(evt, currentUser);
    setUserCurrent({ ...user });
    setErrorMessage("");
  }
  React.useEffect(() => {
    setUserCurrent({ name: user.name, email: user.email });
  }, []);
  return (
    <main className="content">
      <HeaderMovies closePopup={props.closePopup}></HeaderMovies>
      <section className="profile-form">
        <Form
          name="profile-form"
          title={`Привет, ${user.name}!`}
          button="Редактировать"
          onSubmit={handleProfileSubmit}
          errorMessage={errorMessage}
        >
          <label className="form__field profile-form__field">
            Имя
            <input
              className="form__input profile-form__input"
              type="text"
              name="name"
              required
              id="name-user-input"
              minLength="2"
              placeholder="Имя"
              value={name}
              onChange={onChange}
            />
          </label>
          <span className={`form__input-error name-user-input-error`}></span>
          <label className="form__field profile-form__field">
            E-mail
            <input
              className="form__input profile-form__input"
              type="email"
              name="email"
              required
              id="name-email-input"
              placeholder="E-mail"
              value={email}
              onChange={onChange}
            />
          </label>
          <span className={`form__input-error name-email-input-error`}></span>
        </Form>
        <NavLink
          className="form__link profile-form__link"
          activeClassName="form__link_active"
          to={`/sign-up`}
          onClick={signOut}
        >
          Выйти из аккаунта
        </NavLink>
      </section>
    </main>
  );
});

export default Profile;
