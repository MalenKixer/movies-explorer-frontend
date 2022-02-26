import Form from '../Form/Form';
import React from 'react';
import './AuthForm.css';
import { NavLink } from 'react-router-dom';

const AuthForm = React.memo((props) =>{
    return (
    <section className="auth-form">
        <NavLink className="logo" to="/"></NavLink>
        <Form name="auth-form" title={props.titleName} button={props.buttonName} onSubmit={props.onSubmit} errorMessage={props.errorMessage}>
            {props.children}
        </Form>
        <p className='form__subtitle auth-form__subtitle'>{props.subtitleName}<NavLink className="form__link auth-form__link" activeClassName="form__link_active" to={props.linkPath}>{props.linkName}</NavLink></p>
    </section>
    )
})

export default AuthForm;