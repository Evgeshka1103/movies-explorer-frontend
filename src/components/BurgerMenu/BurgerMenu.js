import "./BurgerMenu.css";
import { Link } from "react-router-dom";
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
            <li className="burger-menu__item">
              <Link to="/" className="burger-menu__item-page">
                Главная
              </Link>
            </li>
            <li className="burger-menu__item-movie">
              <Link to="/movies" className="burger-menu__item-movies">
                Фильмы
              </Link>
            </li>
            <div className="burger-menu__line"></div>
            <li className="burger-menu__item-saved">
              <Link to="/saved-movies" className="burger-menu__item-sav-movie">
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <ul className="burger-menu__acaunt">
            <li className="burger-menu__link-acaunt">
              <Link to="/profile" className="burger-menu__acaunt-text">
                Аккаунт
              </Link>
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