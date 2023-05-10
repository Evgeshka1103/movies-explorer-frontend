import "./AboutMe.css";
import { Link } from "react-router-dom";
import photo from "../../../images/photo.png";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
  return (
    <section id="about-me" className="about__me">
      <div className="about__me_container">
        <h4 className="about__me_title">Студент</h4>
        <div className="about__me_line"></div>
        <div className="about__me_block">
          <div className="about__me_student">
          <img src={photo} alt="Фотография" className="about__me_photo" />
            <h5 className="about__me_name">Евгения</h5>
            <h6 className="about__me_about">Фронтенд-разработчик, 28 лет</h6>
            <p className="about__me_info">
              Привет! Меня зовут Евгения, мне 28 лет, родилась и проживаю в
              городе Смоленск. На данный момент я мама в декрете, у нас с мужем
              растет замечательная дочь. Не так давно решила пройти обучение и
              получить профессию веб-разработчик. Люблю домашних животных,
              цветы, природу, отдыхать на природе с друзьями хоть это и редко
              получается.
            </p>
            <Link
              className="about__me_link"
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