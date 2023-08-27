import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";
import React from "react";

export default function SearchForm({
  onSubmit,
  onChange,
  searchMovies,
  setIsSearched,
  checkbox,
  setCheckbox,
  checkSavedMovies,
  setCheckSavedMovies,
}) {
  const location = useLocation();

  function handleCheckbox() {
    if (location.pathname === "/movies") {
      setCheckbox(!checkbox);
      localStorage.setItem("checkboxData", JSON.stringify(!checkbox));
    }
    if (location.pathname === "/saved-movies") {
      setCheckSavedMovies(!checkSavedMovies);
      localStorage.setItem(
        "savedCheckboxData",
        JSON.stringify(!checkSavedMovies)
      );
    }
  }

  const setSearchValue = () => {
    return location.pathname === "/movies"
      ? localStorage.getItem("textSearch")
      : localStorage.getItem("savedTextSearch");
  };

  return (
    <section className="search">
      <div className="search__block-form">
        <form className="search__form" onSubmit={onSubmit}>
          <div className="search__form-block-input">
            <input
              className="search__form-input"
              onChange={onChange}
              type="text"
              placeholder="Фильм"
              name="movie"
              defaultValue={setSearchValue() || ""}
              required={false}
            />
          </div>
          <button className="search__button" type="search">
            Поиск
          </button>
        </form>

        <FilterCheckbox
          onClick={handleCheckbox}
          defaultChecked={checkbox}
          checkSavedMovies={checkSavedMovies}
          setCheckSavedMovies={setCheckSavedMovies}
        />
      </div>
      <div className="search__line"></div>
    </section>
  );
}