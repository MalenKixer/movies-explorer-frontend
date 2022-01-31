import React from 'react';
import './AboutProject.css';

const AboutProject = React.memo((props) => {
    return (
        <section className="content__element about-project" id="about-project">
            <h2 className="about-project__name">О проекте</h2>
            <div className="about-project__description">
                <div className="about-project__information">
                    <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
                    <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__information">
                    <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__period">
                    <div className="about-project__period-back">
                        <h1 className="about-project__back-title">1 Неделя</h1>
                        <p className="about-project__period-subtitle">Back-end</p>
                    </div>
                    <div className="about-project__period-front">
                        <h1 className="about-project__front-title">4 Недели</h1>
                        <p className="about-project__period-subtitle">Front-end</p>
                    </div>
            </div>
        </section>
    )
})

export default AboutProject;