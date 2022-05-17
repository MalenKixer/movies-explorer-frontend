import './Profile.css';
import React from 'react';
import Form from '../Form/Form';
import HeaderMovies from '../HeaderLoggedIn/HeaderLoggedIn';
import CurrentUserContext from '../../context/CurrentUserContext';
const { NavLink } = require('react-router-dom');

const Profile = React.memo((props) =>{
    const curentUser = React.useContext(CurrentUserContext);
    const[email, setEmail] = React.useState(curentUser.email);
    const[name, setName] = React.useState(curentUser.name);
    const [errorMessage, setErrorMessage] = React.useState('');
    function handleProfileSubmit(){
        if(name !== curentUser.name || email !== curentUser.email){
            props.onSubmit(name, email);
            setErrorMessage(props.errorMessage);
        } else {
            setErrorMessage('Введенные данные совпадают с исходными. Пожалуйста, измените их');
        }
    }
    function onChangeName(evt){
        setName(evt.target.value);
    }
    function onChangeEmail(evt){
        setEmail(evt.target.value);
    }
    return (
        <main className="content">
            <HeaderMovies openNavigation={props.openNavigation} isBarOpen={props.isBarOpen} closePopup={props.closePopup}></HeaderMovies>
            <section className="profile-form">
                <Form name="profile-form" title={`Привет, ${curentUser.name}!`} button="Редактировать" onSubmit={handleProfileSubmit} errorMessage={errorMessage}>
                    <label className='form__field profile-form__field'>Имя
                        <input className='form__input profile-form__input' type="text" name="user" required  id='name-user-input' minLength='2' placeholder='Имя' value={name} 
                        onChange={onChangeName}/>
                    </label>
                    <span className={`form__input-error name-user-input-error`}></span>
                    <label className='form__field profile-form__field'>E-mail
                        <input className='form__input profile-form__input' type="email" name="email" required  id='name-email-input'placeholder='E-mail' value={email}
                        onChange={onChangeEmail}/>
                    </label>
                    <span className={`form__input-error name-email-input-error`}></span>
                </Form>
                <NavLink className="form__link profile-form__link" activeClassName="form__link_active" to={`/sign-up`} onClick={props.onSignOut}>Выйти из аккаунта</NavLink>
            </section>
        </main>
    )
})

export default Profile;