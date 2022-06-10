import Form from "../Form/Form";
import React from "react";
import "./AuthForm.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthForm = React.memo((props) => {
  const errorMessage = useSelector((state) => state.message.messageError);
  return (
    <section className="auth-form">
      <NavLink className="logo" to="/"></NavLink>
      <Form
        name="auth-form"
        title={props.titleName}
        button={props.buttonName}
        onSubmit={props.onSubmit}
        errorMessage={errorMessage}
      >
        {props.children}
      </Form>
      <p className="form__subtitle auth-form__subtitle">
        {props.subtitleName}
        <NavLink
          className="form__link auth-form__link"
          activeClassName="form__link_active"
          to={props.linkPath}
        >
          {props.linkName}
        </NavLink>
      </p>
    </section>
  );
});

export default AuthForm;
