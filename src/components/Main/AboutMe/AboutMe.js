import "./AboutMe.css";
import { Link } from "react-router-dom";
import photo from "../../../images/photo.png";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <div className="about-me__container">
        <h4 className="about-me__title">Студент</h4>
        <div className="about-me__title-line"></div>
        <div className="about-me__block">
          <img src={photo} alt="Фотография" className="about-me__photo" />
          <div className="about-me__block-student">
            <h5 className="about-me__name">Евгения</h5>
            <h6 className="about-me__about">Фронтенд-разработчик, 28 лет</h6>
            <p className="about-me__info">
              Привет! Меня зовут Евгения, мне 28 лет, родилась и проживаю в
              городе Смоленск. На данный момент я мама в декрете, у нас с мужем
              растет замечательная дочь. Не так давно решила пройти обучение и
              получить профессию веб-разработчик. Люблю домашних животных,
              цветы, природу, отдыхать на природе с друзьями хоть это и редко
              получается.
            </p>
            <Link
              className="about-me__link"
              to="https://github.com/Evgeshka1103"
              target="_blank"
            >
              Github
            </Link>
            </div>
          
        </div>
        <Portfolio />
      </div>
      
    </section>
  );
}