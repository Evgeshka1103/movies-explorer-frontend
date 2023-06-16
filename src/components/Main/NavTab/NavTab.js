import "./NavTab.css";

export default function NavTab() {
  return (
    <div className="promo__nav-tab">
      <ul className="promo__nav-tab-block">
        <li>
          <a href="#about-project" className="promo__nav-tab-link">
            О проекте
          </a>
        </li>
        <li>
          <a href="#techs" className="promo__nav-tab-link">
            Технологии
          </a>
        </li>
        <li>
          <a href="#about-me" className="promo__nav-tab-link">
            Студент
          </a>
        </li>
      </ul>
    </div>
  );
}