import "./NavTab.css";

export default function NavTab() {
  return (
    <div className="nav__tab">
      <ul className="nav__tab_block">
        <li>
          <a href="#about-project" className="nav__tab_link">
            О проекте
          </a>
        </li>
        <li>
          <a href="#techs" className="nav__tab_link">
            Технологии
          </a>
        </li>
        <li>
          <a href="#about-me" className="nav__tab_link">
            Студент
          </a>
        </li>
      </ul>
    </div>
  );
}