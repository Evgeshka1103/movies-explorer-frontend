import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="header-navigation">
      {location.pathname === "/" && (
        <>
          <ul className="header-links-user">
            <li className="header-link-register">
              <Link to="/signup" className="header-navigation__link-register-text">
                Регистрация
              </Link>
            </li>
            <li className="header-link-login">
              <Link to="/signin" className="header-navigation__link-login-text">
                Войти
              </Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}