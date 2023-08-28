import "./BurgerMenu.css";
import { NavLink } from "react-router-dom";
import React from "react";

export default function BurgerMenu(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOpenBurgerClick() {
    setIsOpen(true);
  }

  function handleCloseBurgerClick() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        className={
          props.loggedIn
            ? "burger-menu__button"
            : "burger-menu__button burger-menu__button-hidden"
        }
        onClick={handleOpenBurgerClick}
      />
      <div
        className={isOpen ? "burger-menu burger-menu__active" : "burger-menu"}
      >
        <div
          className={
            isOpen
              ? "burger-menu__container burger-menu__container-active"
              : "burger-menu__container"
          }
        >
          <div
            className="burger-menu__icon-close"
            onClick={handleCloseBurgerClick}
          ></div>
          <ul className="burger-menu__items">

              <NavLink to="/" className={({ isActive }) => isActive ? "burger-menu__item burger-menu__item_active" : "burger-menu__item"}>
                Главная
              </NavLink>

              <NavLink to="/movies" className={({ isActive }) => isActive ? "burger-menu__item burger-menu__item_active" : "burger-menu__item"}>
                Фильмы
              </NavLink>

              <NavLink to="/saved-movies" className={({ isActive }) => isActive ? "burger-menu__item burger-menu__item_active" : "burger-menu__item"}>
                Сохраненные фильмы
              </NavLink>

          </ul>
          <ul className="burger-menu__acaunt">
            <li className="burger-menu__link-acaunt">
              <NavLink to="/profile" className="burger-menu__acaunt-text">
                Аккаунт
              </NavLink>
            </li>
            <li className="burger-menu__acaunt-icon">
              <div className="burger-menu__icon"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}