import Form from '../Form/Form';
import './Register.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = React.memo((props) =>{
    return (
    <section className="auth-form">
        <div className="logo"></div>
        <Form name="auth-form" title="Добро пожаловать!" button="Зарегистрироваться" onSubmit={props.onSubmit}>
            <label className='form__field auth-form__field'>Имя
                <input className='form__input auth-form__input' type="text" name="user" required  id='name-user-input' onChange=''/>
                {/*<span className={`authorizate-form__input-error name-user-input-error`}></span>*/}
            </label>
            <label className='form__field auth-form__field'>E-mail
                <input className='form__input auth-form__input' type="email" name="email" required  id='name-email-input' onChange=''/>
                {/*<span className={`authorizate-form__input-error name-email-input-error`}></span>*/}
            </label>
            <label className='form__field auth-form__field'>Пароль
                <input className='form__input auth-form__input' type="password" name="password" required  id='name-password-input' onChange=''/>
                {/*<span className={`authorizate-form__input-error name-password-input-error`}></span>*/}
            </label>
        </Form>
        <p className='form__subtitle auth-form__subtitle'>Уже зарегистрированы?<NavLink className="form__link auth-form__link" activeClassName="form__link_active" to={`/sign-in`}>Войти</NavLink></p>
    </section>
    )
})

export default Register;