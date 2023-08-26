import "./Navigation.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Navigation({ type }) {

  return (
    <nav className="header-navigation">
      {type !== "loggedIn" && (
        <>
          <ul className="header-links-user">
            <li className="header-link-register">
              <Link
                to="/signup"
                className="header-navigation__link-register-text"
              >
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
