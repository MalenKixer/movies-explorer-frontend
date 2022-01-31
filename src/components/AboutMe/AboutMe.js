import React from 'react';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';
const { NavLink } = require('react-router-dom');
const AboutMe = React.memo((props) =>{
    return (
        <section className="content__element about-me" id="about-me">
            <h2 className="about-project__name">Студент</h2>
            <div className="about-me__about">
                <div className="about-me__info">
                    <h1 className="about-me__title">Александр</h1>
                    <p className="about-me__subtitle">Фронтенд-разработчик, 18 лет</p>
                    <p className="about-me__description">Я родился в городе Минск. В детстве увлекался футболом и плаванием. На данный момент решил начать изучать разработку и создание сайтов.</p>
                    <div className="about-me__links">
                        <NavLink className="about-me__link" activeClassName="about-me__link_active" to='//www.facebook.com'>Facebook</NavLink>
                        <NavLink className="about-me__link" activeClassName="about-me__link_active" to='//github.com/MalenKixer'>Github</NavLink>
                    </div>
                </div>
                <img className="about-me__avatar" src="https://www.studylab.ru/upload/Articles/image/big/3b41fc9585d02df26c324c1c5c6d6725.jpg" onload="" alt=""/>
            </div>
            <Portfolio></Portfolio>
        </section>  
    )
})

export default AboutMe;
