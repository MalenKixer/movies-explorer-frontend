import Form from '../Form/Form';
import React from 'react';
import './AuthForm.css';
import { NavLink } from 'react-router-dom';

const AuthForm = React.memo((props) =>{
    return (
    <section className="auth-form">
        <div className="logo"></div>
        <Form name="auth-form" title="Рады видеть!" button="Войти" onSubmit={props.onSubmit}>
            {props.children}
        </Form>
        <p className='form__subtitle auth-form__subtitle'>{props.subtitleName}<NavLink className="form__link auth-form__link" activeClassName="form__link_active" to={`/sign-up`}>{props.linkName}</NavLink></p>
    </section>
    )
})

export default AuthForm;