import "./SavedMovies.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import NavProfile from "../NavProfile/NavProfile";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function SavedMovies({ movies }) {
  return (
    <div className="saved__movies">
      <div className="saved__movies_header">
        <Link to="/">
          <img className="saved__movies_logo" src={logo} alt="Логотип" />
        </Link>

        <NavProfile />
        <BurgerMenu />
      </div>
      <SearchForm />
      <MoviesCardList
        movies={movies.filter((movie) => movie.favorite === true)}
      />
      <div className="saved__movies_block"></div>
      <Footer />
    </div>
  );
}