import "./FilterCheckbox.css";
import React, { useState } from "react";

export default function FilterCheckbox({ onClick }) {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  const checkboxClasses = !isActive
    ? "checkbox__slider"
    : `checkbox__slider checkbox__slider_active`;

  return (
    <div className="checkbox__block">
      <input
        type="checkbox"
        id="checkbox-slide"
        className={checkboxClasses}
        onChange={handleClick}
      />
      <div className="checkbox__filter">Короткометражки</div>
    </div>
  );
}