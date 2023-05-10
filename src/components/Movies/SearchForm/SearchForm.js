import "./SearchForm.css";

import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  function handleChange(e) {}

  return (
    <section className="search">
      <div className="search__block_form">
        <form className="search__form">
          <div className="search__form_block-input">
            <input
              className="search__form_input"
              onChange={handleChange}
              value={"Фильм"}
              type="text"
              placeholder="Фильм"
              name="movie"
              required
            />
          </div>
          <button className="search__button" type="submit">
            Поиск
          </button>
        </form>

        <FilterCheckbox />
      </div>
      <div className="search__line"></div>
    </section>
  );
}
