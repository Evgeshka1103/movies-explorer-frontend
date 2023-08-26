import React from "react";
import "./InfoTooltip.css";
import { useLocation } from "react-router-dom";

export default function InfoTooltip({ isOpen }) {
  const location = useLocation();

  const info = (message) => {
    if (location.pathname === '/profile') {
      return message = 'Данные успешно обновлены';
    } else if (location.pathname === '/movies' || '/saved-movies') {
      return message = 'Нужно ввести ключевое слово';
    }
  };

  return (
    <div className={`popup ${isOpen ? `popup__opened` : ""}`}>
      <div className="popup__container">
        <div className="popup__form">
          <h3 className="popup__tooltip-text">{info()}</h3>
        </div>
      </div>
    </div>
  );
}
