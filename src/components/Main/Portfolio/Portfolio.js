import "./Portfolio.css";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list_links">
        <li className="portfolio__link">
          <Link
            className="portfolio__link_project"
            to="https://evgeshka1103.github.io/how-to-learn/"
            target="_blank"
          >
            <h3 className="portfolio__text">Статичный сайт</h3>
            <div className="portfolio__link_go">↗</div>
          </Link>
          <div className="portfolio__block_line"></div>
        </li>
        <li className="portfolio__link">
          <Link
            className="portfolio__link_project"
            to="https://evgeshka1103.github.io/russian-travel/index.html"
            target="_blank"
          >
            <h3 className="portfolio__text">Адаптивный сайт</h3>
            <div className="portfolio__link_go">↗</div>
          </Link>
          <div className="portfolio__block_line"></div>
        </li>
        <li className="portfolio__link">
          <Link
            className="portfolio__link_project"
            to="https://evgeshka1103.github.io/mesto/"
            target="_blank"
          >
            <h3 className="portfolio__text">Одностраничное приложение</h3>
            <div className="portfolio__link_go">↗</div>
          </Link>
        </li>
      </ul>
    </section>
  );
}