import './Profile.css';
import React from 'react';
import Form from '../Form/Form';
import HeaderMovies from '../HeaderMovies/HeaderMovies';
const { NavLink } = require('react-router-dom');

const Profile = React.memo((props) =>{
    return (
        <main className="content">
            <HeaderMovies openNavigation={props.openNavigation}></HeaderMovies>
            <section className="profile-form">
                <Form name="profile-form" title={`Привет, !`} button="Редактировать" onSubmit={props.onSubmit}>
                    <label className='form__field profile-form__field'>Имя
                        <input className='form__input profile-form__input' type="email" name="email" required  id='name-email-input' onChange=''/>
                        {/*<span className={`authorizate-profile__input-error name-email-input-error`}></span>*/}
                    </label>
                    <label className='form__field profile-form__field'>E-mail
                        <input className='form__input profile-form__input' type="password" name="password" required  id='name-password-input' onChange=''/>
                        {/*<span className={`authorizate-profile__input-error name-password-input-error`}></span>*/}
                    </label>
                </Form>
                <NavLink className="form__link profile-form__link" activeClassName="form__link_active" to={`/sign-up`}>Выйти из аккаунта</NavLink>
            </section>
        </main>
    )
})

export default Profile;