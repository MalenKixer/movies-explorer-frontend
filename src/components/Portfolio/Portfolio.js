import "./Portfolio.css";
import React from "react";

const Portfolio = React.memo(() => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__links">
        <a
          className="portfolio__link"
          activeclassname="portfolio__link_active"
          rel="noreferrer"
          target="_blank"
          href="https://MalenKixer.github.io/russian-travel/index.html"
        >
          Статичный сайт <div className="portfolio__link-icon"></div>
        </a>
        <a
          className="portfolio__link"
          activeclassname="portfolio__link_active"
          rel="noreferrer"
          target="_blank"
          href="https://malenkixer.github.io/mesto"
        >
          Адаптивный сайт <div className="portfolio__link-icon"></div>
        </a>
        <a
          className="portfolio__link"
          activeclassname="portfolio__link_active"
          rel="noreferrer"
          target="_blank"
          href="https://domainame.alexander.nomoredomains.rocks"
        >
          Одностраничное приложение <div className="portfolio__link-icon"></div>
        </a>
      </div>
    </section>
  );
});

export default Portfolio;
