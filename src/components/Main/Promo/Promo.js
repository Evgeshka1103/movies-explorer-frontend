import "./Promo.css";
import landingLogo from "../../../images/landing-logo.svg";
import NavTab from "../NavTab/NavTab";

export default function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
      <img className="promo__image" src={landingLogo} alt="Изображение" />
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      </div>
      <NavTab />
      
    </section>
  );
}