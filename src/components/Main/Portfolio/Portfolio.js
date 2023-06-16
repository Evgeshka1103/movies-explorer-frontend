import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list-links">
        <li className="portfolio__link">
          <a
            className="portfolio__link-project"
            href="https://evgeshka1103.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <h4 className="portfolio__link-go">↗</h4>
          </a>
          <div className="portfolio__block-line"></div>
        </li>
        <li className="portfolio__link">
          <a
            className="portfolio__link-project"
            href="https://evgeshka1103.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <h4 className="portfolio__link-go">↗</h4>
          </a>
          <div className="portfolio__block-line"></div>
        </li>
        <li className="portfolio__link">
          <a
            className="portfolio__link-project"
            href="https://evgeshka1103.github.io/mesto/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <h4 className="portfolio__link-go">↗</h4>
          </a>
        </li>
      </ul>
    </section>
  );
}