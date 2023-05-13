import "./NavProfile.css";
import { Link, useLocation } from "react-router-dom";

export default function NavProfile() {
  const location = useLocation();

  return (
    <nav className="navbar__header_navigation-profile">
      {(location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/profile") && (
        <>
          <ul className="navbar__links_profile-movie">
            <li className="navbar__link_movie">
              <Link to="/movies" className="navbar__link-movie">
                Фильмы
              </Link>
            </li>
            <li className="navbar__link_mowies">
              <Link to="/saved-movies" className="navbar__link-movies ">
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <ul className="navbar__profile_acaunt">
            <li className="navbar__link_acaunt">
              <Link to="/profile" className="navbar__link_acaunt-text">
                Аккаунт
              </Link>
            </li>
            <li className="navbar__link_acaunt-icon">
              <div className="navbar__icon"></div>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}