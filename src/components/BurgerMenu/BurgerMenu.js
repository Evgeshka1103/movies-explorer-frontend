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
            ? "burger__menu_button"
            : "burger__menu_button burger__menu_button_hidden"
        }
        onClick={handleOpenBurgerClick}
      />
      <div
        className={isOpen ? "burger__menu burger__menu_active" : "burger__menu"}
      >
        <div
          className={
            isOpen
              ? "burger__menu_container burger__menu_container_active"
              : "burger__menu_container"
          }
        >
          <div
            className="burger__menu_icon-close"
            onClick={handleCloseBurgerClick}
          ></div>
          <ul className="burger__menu_items">
            <li className="burger__menu_item">
              <Link to="/" className="burger__menu_item-page">
                Главная
              </Link>
            </li>
            <li className="burger__menu_item-movie">
              <Link to="/movies" className="burger__menu_item-movies">
                Фильмы
              </Link>
            </li>
            <div className="burger__menu_line"></div>
            <li className="burger__menu_item-saved">
              <Link to="/saved-movies" className="burger__menu_item-movie">
                Сохраненные фильмы
              </Link>
            </li>
          </ul>
          <ul className="burger__menu_acaunt">
            <li className="burger__menu_link-acaunt">
              <Link to="/profile" className="burger__menu_acaunt-text">
                Аккаунт
              </Link>
            </li>
            <li className="burger__menu_acaunt-icon">
              <div className="burger__menu_icon"></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}