import "./Techs.css";

export default function Techs() {
  return (
    <section id="techs" className="techs">
      <div className="techs__container">
      <h3 className="techs__title">Технологии</h3>
      <div className="techs__title-line"></div>
        <h2 className="techs__description">7 технологий</h2>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__icon">HTML</li>
          <li className="techs__icon">CSS</li>
          <li className="techs__icon">JS</li>
          <li className="techs__icon">React</li>
          <li className="techs__icon">Git</li>
          <li className="techs__icon">Express.js</li>
          <li className="techs__icon">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}