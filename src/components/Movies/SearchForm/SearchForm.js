import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useLocation } from "react-router-dom";
import React from "react";

export default function SearchForm({
  onSubmit,
  onChange,
  searchMovies,
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

  const item = location.pathname === "/movies" ? checkbox : checkSavedMovies;

  const setSearchValue = () => {
    return location.pathname === "/movies"
      ? localStorage.getItem("textSearch")
      : localStorage.getItem("savedTextSearch");
  };

  return (
    <section className="search">
      <div className="search__block-form">
        <form className="search__form">
          <div className="search__form-block-input">
            <input
              className="search__form-input"
              onChange={onChange}
              value={"Фильм"}
              type="text"
              placeholder="Фильм"
              name="movie"
              defaultValue={setSearchValue() || ""}
              required={false}
            />
          </div>
          <button className="search__button" type="submit" onSubmit={onSubmit}>
            Поиск
          </button>
        </form>

        <FilterCheckbox
          onClick={handleCheckbox}
          defaultChecked={item}
          checkSavedMovies={checkSavedMovies}
          setCheckSavedMovies={setCheckSavedMovies}
        />
      </div>
      <div className="search__line"></div>
    </section>
  );
}