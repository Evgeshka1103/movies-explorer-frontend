import "./Promo.css";
import landingLogo from "../../../images/landing-logo.png";
import NavTab from "../NavTab/NavTab";

export default function Promo() {
  return (
    <section className="promo">
      
      <img className="promo__image" src={landingLogo} alt="Изображение" />
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      
      <NavTab />
      
    </section>
  );
}