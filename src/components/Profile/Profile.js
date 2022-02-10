import './Profile.css';
import React from 'react';
import Form from '../Form/Form';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
import CurrentUserContext from '../../context/CurrentUserContext';
import FormValidator from '../FormValidation/FormValidation';
const { NavLink } = require('react-router-dom');

const Profile = React.memo((props) =>{
    const curentUser = React.useContext(CurrentUserContext);
    const { values, handleChange, errors, isValid, resetForm } = FormValidator();
    const[email, setEmail] = React.useState(curentUser.email);
    const[name, setName] = React.useState(curentUser.name);
    function handleProfileSubmit(){
        props.onSubmit(name, email);
        resetForm();
    }
    function onChangeName(evt){
        handleChange(evt);
        setName(values.user);
    }
    function onChangeEmail(evt){
        handleChange(evt);
        setEmail(values.email);
    }
    return (
        <main className="content">
            <HeaderMovies openNavigation={props.openNavigation} isBarOpen={props.isBarOpen} closePopup={props.closePopup}></HeaderMovies>
            <section className="profile-form">
                <Form name="profile-form" title={`Привет, !`} button="Редактировать" onSubmit={handleProfileSubmit} isValid={isValid}>
                    <label className='form__field profile-form__field'>Имя
                        <input className='form__input profile-form__input' type="text" name="user" required  id='name-user-input' minLength='2' placeholder='Имя' value={name} 
                        onChange={onChangeName}/>
                    </label>
                    <span className={`${!isValid && 'form__input-error'} name-user-input-error`}>{errors.user}</span>
                    <label className='form__field profile-form__field'>E-mail
                        <input className='form__input profile-form__input' type="email" name="email" required  id='name-email-input'placeholder='E-mail' value={email}
                        onChange={onChangeEmail}/>
                    </label>
                    <span className={`${!isValid && 'form__input-error'} name-email-input-error`}>{errors.email}</span>
                </Form>
                <NavLink className="form__link profile-form__link" activeClassName="form__link_active" to={`/sign-up`} onClick={props.onSignOut}>Выйти из аккаунта</NavLink>
            </section>
        </main>
    )
})

export default Profile;