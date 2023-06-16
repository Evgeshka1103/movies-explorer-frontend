import "./FilterCheckbox.css";
import React, { useState } from "react";

export default function FilterCheckbox({ onClick }) {
  const [isActive, setIsActive] = useState(true);

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