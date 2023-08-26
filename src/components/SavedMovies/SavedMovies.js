import "./SavedMovies.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import NavProfile from "../NavProfile/NavProfile";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Preloader from "../Movies/Preloader/Preloader";

export default function SavedMovies({ movies, setMovies, savedMovies, setSavedMovies, searchMovie, searchError, setSearchError, checkSavedMovies, setCheckSavedMovies }) {

  const [isSearchForm, setIsSearchForm] = useState(false);
  const [inputValue, setInputValue] = useState('' || localStorage.getItem('savedTextSearch'));

  useEffect(() => {
    setSearchError(false);
}, []);

useEffect(() => {
  if (localStorage.getItem('savedCheckboxData') === 'true') {
    setCheckSavedMovies(true);
  } else {
    setCheckSavedMovies(false);
  }
}, [setCheckSavedMovies]);

useEffect(() => {
  if (localStorage.getItem('saved')) {
    setSavedMovies(JSON.parse(localStorage.getItem('saved')));
  }
}, [setSavedMovies]);

function handleSearchForm(e) {
  setInputValue(e.target.value);
};

function handleFormSubmit(e) {
  e.preventDefault();
  setIsSearchForm(true)
  setTimeout(() => setIsSearchForm(false), 1000);
  setTimeout(() => searchMovie(inputValue), 1001);
  localStorage.setItem('savedTextSearch', inputValue);
}

  return (
    <div className="saved-movies">
      <div className="saved-movies__container">
      <header className="saved-movies__header">
        <Link to="/">
          <img className="saved-movies__logo" src={logo} alt="Логотип" />
        </Link>

        <NavProfile />
        <BurgerMenu />
      </header>
      <SearchForm
      searchMovie={searchMovie}
      setIsSearchForm={setIsSearchForm}
      checkSavedMovies={checkSavedMovies}
      setCheckSavedMovies={setCheckSavedMovies}
      onChange={handleSearchForm}
      onSubmit={handleFormSubmit}
      />
      <span
          className={
            searchError
              ? "saved-movies__error-form"
              : "saved-movies__error-form saved-movies__error-form_hidden"
          }
        >
          Ничего не найдено
        </span>
      </div>
      <div className="saved-movies__section">
        {isSearchForm ? <Preloader /> :
      <MoviesCardList
        movies={movies}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          checkSavedMovies={checkSavedMovies}
          setCheckSavedMovies={setCheckSavedMovies}
      />
    }
      <div className="saved-movies__block"></div>
      </div>
      <Footer />
    </div>
  );
}