import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
      <h3 className="footer__project">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__line"></div>
      <div className="footer__block">
        <p className="footer__copyright">&copy;2023</p>
        <ul className="footer__links">
          <li className="footer__link">
            <Link
              className="footer__link-go"
              to="https://practicum.yandex.ru"
              target="_blank"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li className="footer__link">
            <Link
              className="footer__link-git"
              to="https://github.com/Evgeshka1103"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </footer>
  );
}