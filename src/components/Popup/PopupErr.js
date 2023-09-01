import React from "react";
import "./PopupErr.css";
import err from "../../images/err.png";
import { useLocation } from 'react-router-dom';

export default function PopupErr({ onClose, isOpen }) {

  const location = useLocation();

  const error = (messageError) => {
    if (location.pathname === '/profile') {
      return messageError = 'При обновлении профиля произошла ошибка';
    } else if (location.pathname === '/signin') {
      return messageError = 'Вы ввели неправильный логин или пароль';
    } else if (location.pathname === '/signup') {
      return messageError = 'Пользователь с таким email уже существует';
    } else if (location.pathname === '/movies') {
      return messageError = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.';
    } else if (location.pathname === '/saved-movies') {
      return messageError = 'Ошибка сервера';
    }
  };

    return (

        <div className={`popup ${isOpen ? `popup__opened` : ''}`}>
            <div className="popup__container">
                <div className="popup__form">

                    <button
                        type="button"
                        className="popup__button-close"
                        onClick={onClose}
                    ></button>

                    <img
                        className="popup__tooltip-icon"
                        src={err}
                        alt="" />

                    <h3 className="popup__tooltip-text">
                      {error()}
                    </h3>
                </div>
            </div>
        </div>
    )
}