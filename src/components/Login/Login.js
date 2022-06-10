import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";

import { setCurrentUser } from "../../Redux/actions/user";
import onChangeInput from "../../utils/Auth/utilsFunctions/onChangeInput";
import { handleLogin } from "../../Redux/asyncActions.js/auth";

const Login = React.memo(() => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const email = currentUser.email;
  const password = currentUser.password;

  function setUserCurrent(data) {
    dispatch(setCurrentUser(data));
  }
  function onChange(evt) {
    const user = onChangeInput(evt, currentUser);
    setUserCurrent({ ...user });
  }
  function handleLoginSubmit({email, password}) {
    handleLogin(email, password)(dispatch)
      .then(() => {
        history("/movies");
      })
  }
  return (
    <AuthForm
      titleName="Рады видеть!"
      buttonName="Войти"
      subtitleName="Ещё не зарегистрированы?"
      linkName="Регистрация"
      linkPath="/sign-up"
      onSubmit={() => handleLoginSubmit(currentUser)}
    >
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

export default Login;
