import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import React from "react";

export default function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        <Navigation isLoggedIn={isLoggedIn} />
        </div>
    </header>
  );
}