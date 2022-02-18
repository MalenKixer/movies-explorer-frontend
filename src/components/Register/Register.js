import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

const Register = React.memo((props) =>{
    const[userName, setUserName] = React.useState('');
    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    function onSubmit(){
        props.onSubmit(userName, email, password);
    }
    function onChangeName(evt){
        setUserName(evt.target.value);
    }
    function onChangeEmail(evt){
        setEmail(evt.target.value);
    }
    function onChangePassword(evt){
        setPassword(evt.target.value);
    }
    return (
        <AuthForm titleName='Добро пожаловать!' buttonName='Зарегистрироваться' subtitleName='Уже зарегистрированы?' linkName='Войти' linkPath='/sign-in' onSubmit={onSubmit} errorMessage={props.errorMessage}>
            <label className='form__field auth-form__field'>Имя
                <input className='form__input auth-form__input' type="text" name="user" required  id='name-user-input' minLength="2" value={userName} onChange={onChangeName}/>
                <span className={`form__input-error name-user-input-error`}></span>
            </label>
            <label className='form__field auth-form__field'>E-mail
                <input className='form__input auth-form__input' type="email" name="email" required  id='name-email-input' value={email} onChange={onChangeEmail}/>
                <span className={`form__input-error name-email-input-error`}></span>
            </label>
            <label className='form__field auth-form__field'>Пароль
                <input className='form__input auth-form__input' type="password" name="password" required  id='name-password-input' minLength="8" value={password} onChange={onChangePassword}/>
                <span className={`form__input-error name-password-input-error`}></span>
            </label>
        </AuthForm>
    )
})

export default Register;