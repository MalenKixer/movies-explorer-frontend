import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

const Register = React.memo((props) =>{
    return (
        <AuthForm titleName='Добро пожаловать!' buttonName='Зарегистрироваться' subtitleName='Уже зарегистрированы?' linkName='Войти' linkPath='/sign-in'>
            <label className='form__field auth-form__field'>Имя
                <input className='form__input auth-form__input' type="text" name="user" required  id='name-user-input'/>
                <span className={`form__input-error name-user-input-error`}></span>
            </label>
            <label className='form__field auth-form__field'>E-mail
                <input className='form__input auth-form__input' type="email" name="email" required  id='name-email-input'/>
                <span className={`form__input-error name-email-input-error`}></span>
            </label>
            <label className='form__field auth-form__field'>Пароль
                <input className='form__input auth-form__input' type="password" name="password" required  id='name-password-input' minLength="8"/>
                <span className={`form__input-error name-password-input-error`}></span>
            </label>
        </AuthForm>
    )
})

export default Register;