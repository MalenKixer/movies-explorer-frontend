import './Techs.css';
import React from 'react';

const Techs = React.memo((props) =>{
    return( 
        <div className="content__element techs" id="techs">
            <h2 className="about-project__name">Технологии</h2>
            <h1 className="techs__title">7 технологий</h1>
            <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__table">
                <li className="techs__element">HTML</li>
                <li className="techs__element">CSS</li>
                <li className="techs__element">JS</li>
                <li className="techs__element">React</li>
                <li className="techs__element">Git</li>
                <li className="techs__element">Express.js</li>
                <li className="techs__element">mongoDB</li>
            </ul>
        </div>
  );
})

export default Techs;