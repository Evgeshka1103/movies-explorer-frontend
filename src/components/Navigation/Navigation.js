import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="header__main_navigation">
      {location.pathname === "/" && (
        <>
          <ul className="header__links_user">
            <li className="header__link_register">
              <Link to="/signup" className="header__link_register-text">
                Регистрация
              </Link>
            </li>
            <li className="header__link_login">
              <Link to="/signin" className="header__link_login-text">
                Войти
              </Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}