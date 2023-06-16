import "./NavProfile.css";
import { Link, useLocation } from "react-router-dom";

export default function NavProfile() {
  const location = useLocation();

  return (
    <nav className="navbar-header-navigation-profile">
      {(location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile") && (
        <>
          <ul className="navbar-links-profile-movie">
            <li className="navbar-link-movie">
              <Link to="/movies" className="navbar-link">
                Фильмы
              </Link>
            </li>
            <li className="navbar-link-mowies">
              <Link to="/saved-movies" className="navbar-link-sav-movies ">
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <ul className="navbar-profile-acaunt">
            <li className="navbar-link-acaunt">
              <Link to="/profile" className="navbar-link-acaunt-text">
                Аккаунт
              </Link>
            </li>
            <li className="navbar-link-acaunt-icon">
              <div className="navbar-icon"></div>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}