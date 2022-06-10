import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setMessageError,
  setMessageFail,
  setMessageSucces,
} from "../../Redux/actions/message";
import { setCurrentUser } from "../../Redux/actions/user";
import { setError } from "../../Redux/actions/auth";
import { preloaderOpen } from "../../Redux/actions/interactive";
import { setloggedIn } from "../../Redux/actions/auth";
import { openPopup } from "../../Redux/actions/interactive";
import AuthForm from "../AuthForm/AuthForm";

import { useNavigate } from "react-router-dom";
import onChangeInput from "../../utils/Auth/utilsFunctions/onChangeInput";
import { handleRegister } from "../../Redux/asyncActions.js/auth";

const Register = React.memo(() => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const userName = currentUser.userName;
  const email = currentUser.email;
  const password = currentUser.password;

  function setUserCurrent(data) {
    dispatch(setCurrentUser(data));
  }
  function handleRegisterSubmit({ userName, email, password }) {
    handleRegister(userName, email, password)(dispatch)
      .then(() => {
        history(`/movies`);
      })
  }
  function onChange(evt) {
    const user = onChangeInput(evt, currentUser);
    setUserCurrent({ ...user });
  }

  return (
    <AuthForm
      titleName="Добро пожаловать!"
      buttonName="Зарегистрироваться"
      subtitleName="Уже зарегистрированы?"
      linkName="Войти"
      linkPath="/sign-in"
      onSubmit={() => handleRegisterSubmit(currentUser)}
    >
      <label className="form__field auth-form__field">
        Имя
        <input
          className="form__input auth-form__input"
          type="text"
          name="userName"
          required
          id="name-user-input"
          minLength="2"
          value={userName}
          onChange={onChange}
        />
        <span className={`form__input-error name-user-input-error`}></span>
      </label>
      <label className="form__field auth-form__field">
        E-mail
        <input
          className="form__input auth-form__input"
          type="email"
          name="email"
          required
          id="name-email-input"
          value={email}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          onChange={onChange}
        />
        <span className={`form__input-error name-email-input-error`}></span>
      </label>
      <label className="form__field auth-form__field">
        Пароль
        <input
          className="form__input auth-form__input"
          type="password"
          name="password"
          required
          id="name-password-input"
          minLength="8"
          value={password}
          onChange={onChange}
        />
        <span className={`form__input-error name-password-input-error`}></span>
      </label>
    </AuthForm>
  );
});

export default Register;
