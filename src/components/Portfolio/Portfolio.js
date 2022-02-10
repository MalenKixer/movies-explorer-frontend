import './Portfolio.css';
import React from 'react';

const { NavLink } = require('react-router-dom');
const Portfolio = React.memo((props) =>{
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__links">
                <NavLink className="portfolio__link" activeclassname="portfolio__link_active" target='_blank' to=''>
                    Статичный сайт <div className="portfolio__link-icon"></div>
                </NavLink>
                <NavLink className="portfolio__link" activeclassname="portfolio__link_active" target='_blank' to=''>
                    Адаптивный сайт <div className="portfolio__link-icon"></div>
                </NavLink>
                <NavLink className="portfolio__link" activeclassname="portfolio__link_active" target='_blank' to=''>
                    Одностраничное приложение <div className="portfolio__link-icon"></div>
                </NavLink>
            </div>
        </section>  
    )
})

export default Portfolio;