import "./Movies.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import NavProfile from "../NavProfile/NavProfile";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "./../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import React, { useState, useEffect } from "react";
import Preloader from "../Movies/Preloader/Preloader";

export default function Movies({
  movies,
  setMovies,
  searchMovie,
  savedMovies,
  setSavedMovies,
  handleSaveMovies,
  searchError,
  setSearchError,
  checkbox,
  setCheckbox,
}) {
  const [isSearchform, setIsSearchform] = useState(false);
  const [inputValue, setInputValue] = useState(
    "" || localStorage.getItem('textSearch')
  );

  useEffect(() => {
    const resultsSearchForm = localStorage.getItem("search");
    if (
      resultsSearchForm &&
      resultsSearchForm !== "undefined" &&
      JSON.parse(resultsSearchForm).length > 0
    ) {
      setMovies(JSON.parse(resultsSearchForm));
    }
  }, [setMovies]);

  useEffect(() => {
    if (localStorage.getItem("saved")) {
      setSavedMovies(JSON.parse(localStorage.getItem("saved")));
    }
  }, [setSavedMovies]);

  useEffect(() => {
    setSearchError(false);
  }, []);

  useEffect(() => {
    setCheckbox(JSON.parse(localStorage.getItem("checkboxData")));
  }, [setCheckbox]);

  function handleSearchForm(e) {
    setInputValue(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsSearchform(true);
    setTimeout(() => setIsSearchform(false), 1000);
    setTimeout(() => searchMovie(inputValue), 1001);
    localStorage.setItem("searchText", inputValue);
    console.log(inputValue);
  }

  return (
    <div className="movies">
      <div className="movies__container">
        <header className="movies__header">
          <Link to="/">
            <img className="movies__logo" src={logo} alt="Логотип" />
          </Link>

          <NavProfile />
          <BurgerMenu />
        </header>
        <SearchForm
          setIsSearched={isSearchform}
          searchMovie={searchMovie}
          checkbox={checkbox}
          setCheckbox={setCheckbox}
          onChange={handleSearchForm}
          onSubmit={handleFormSubmit}
        />
        <span
          className={
            searchError
              ? "movies__error-form"
              : "movies__error-form movies__error-form_hidden"
          }
        >
          Ничего не найдено
        </span>
      </div>
      <div className="movies__section">
        {isSearchform ? (
          <Preloader />
        ) : movies ? (
          <MoviesCardList
            movies={movies}
            setMovies={setMovies}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            handleSaveMovies={handleSaveMovies}
            checkbox={checkbox}
            setCheckbox={setCheckbox}
          />
        ) : null}
      </div>
      <Footer />
    </div>
  );
}
