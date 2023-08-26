import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import React from "react";

export default function Header({ type, isLoggedIn }) {
  return (
    <header className={`header header_${type}`}>
      <div className={`header__container header__container_${type}`}>
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        { !isLoggedIn && <Navigation /> }
        { isLoggedIn && <Navigation type='loggedIn' /> }
        </div>
    </header>
  );
}