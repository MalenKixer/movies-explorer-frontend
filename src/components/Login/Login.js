import React from 'react';
import AuthForm from '../AuthForm/AuthForm';

const Login = React.memo((props) =>{
    const[email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    function handleLoginSubmit(){
        props.onSubmit(email, password);
    }
    function onChangeEmail(evt){
        setEmail(evt.target.value);
    }
    function onChangePassword(evt){
        setPassword(evt.target.value);
    }
    return (
        <AuthForm titleName='Рады видеть!' buttonName='Войти' subtitleName='Ещё не зарегистрированы?' linkName='Регистрация' linkPath='/sign-up' onSubmit={handleLoginSubmit} errorMessage={props.errorMessage}>
            <label className='form__field auth-form__field'>E-mail
                <input className='form__input auth-form__input' type="email" name="email" required  id='name-email-input' value={email} onChange={onChangeEmail} />
                <span className={`form__input-error name-email-input-error`}></span>
            </label>
            <label className='form__field auth-form__field'>Пароль
                <input className='form__input auth-form__input' type="password" name="password" required id='name-password-input' minLength="8" value={password} onChange={onChangePassword}/>
                <span className={`form__input-error name-password-input-error`}></span>
            </label>
        </AuthForm>
    )
})

export default Login;