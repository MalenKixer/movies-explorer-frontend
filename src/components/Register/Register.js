import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import FormValidator from '../FormValidation/FormValidation';

const Register = React.memo((props) =>{
    const { values, handleChange, errors, isValid, resetForm } = FormValidator();
    function onSubmit(){
        props.onSubmit(values.user, values.email, values.password);
    }
    return (
        <AuthForm titleName='Добро пожаловать!' buttonName='Зарегистрироваться' subtitleName='Уже зарегистрированы?' linkName='Войти' linkPath='/sign-in' isValid={isValid} onSubmit={onSubmit}>
            <label className='form__field auth-form__field'>Имя
                <input className='form__input auth-form__input' type="text" name="user" required  id='name-user-input' minLength="2" value={values.user} onChange={handleChange}/>
                <span className={`${!isValid && 'form__input-error'} name-user-input-error`}>{errors.user}</span>
            </label>
            <label className='form__field auth-form__field'>E-mail
                <input className='form__input auth-form__input' type="email" name="email" required  id='name-email-input' value={values.email} onChange={handleChange}/>
                <span className={`${!isValid && 'form__input-error'} name-email-input-error`}>{errors.email}</span>
            </label>
            <label className='form__field auth-form__field'>Пароль
                <input className='form__input auth-form__input' type="password" name="password" required  id='name-password-input' minLength="8" value={values.password} onChange={handleChange}/>
                <span className={`${!isValid && 'form__input-error'} name-password-input-error`}>{errors.password}</span>
            </label>
        </AuthForm>
    )
})

export default Register;