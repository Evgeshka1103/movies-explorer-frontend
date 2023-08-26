import "./FilterCheckbox.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function FilterCheckbox({ onClick }) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if ((location.pathname === '/saved-movies') && (localStorage.getItem('savedCheckboxData') === 'true')) {
      setIsActive(true);
    } else if ((location.pathname === '/movies') && (localStorage.getItem('checkboxData') === 'true')) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location.pathname])

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  const checkboxClasses = !isActive
    ? "checkbox-block__slider"
    : `checkbox-block__slider checkbox-block__slider_active`;

  return (
    <div className="checkbox-block">
      <input
        type="checkbox"
        id="checkbox-slide"
        className={checkboxClasses}
        onChange={handleClick}
      />
      <div className="checkbox-block__filter">Короткометражки</div>
    </div>
  );
}