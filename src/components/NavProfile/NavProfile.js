import "./NavProfile.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavProfile() {
  return (
    <nav className="navbar-header-navigation-profile">
          <ul className="navbar-links-profile-movie">
            <li className="navbar-link-movie">
              <NavLink to="/movies" className={({ isActive }) =>
              isActive ? "navbar-link navbar-link-active" : "navbar-link"}>
                Фильмы
              </NavLink>
            </li>
            <li className="navbar-link-mowies">
              <NavLink to="/saved-movies" className={({  isActive }) =>
              isActive ? "navbar-link-sav-movies navbar-link-sav-movies-active" : "navbar-link-sav-movies"}>
                Сохраненные фильмы
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-profile-acaunt">
            <li className="navbar-link-acaunt">
              <NavLink to="/profile" className="navbar-link-acaunt-text">
                Аккаунт
              </NavLink>
            </li>
            <li className="navbar-link-acaunt-icon">
              <div className="navbar-icon"></div>
            </li>
          </ul>
    </nav>
  );
}