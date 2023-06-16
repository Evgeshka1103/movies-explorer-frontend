import "./SavedMovies.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import NavProfile from "../NavProfile/NavProfile";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function SavedMovies({ movies }) {
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
      <SearchForm />
      </div>
      <div className="saved-movies__section">
      <MoviesCardList
        movies={movies.filter((movie) => movie.favorite === true)}
      />
      <div className="saved-movies__block"></div>
      </div>
      <Footer />
    </div>
  );
}