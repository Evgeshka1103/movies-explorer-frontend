import "./Movies.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import NavProfile from "../NavProfile/NavProfile";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Footer from "./../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Movies({ movies }) {
  return (
    <div className="movies">
      <div className="header__movies">
        <Link to="/">
          <img className="movies__logo" src={logo} alt="Логотип" />
        </Link>

        <NavProfile />
        <BurgerMenu />
      </div>
      <SearchForm />
      <MoviesCardList movies={movies} />
      <div className="movies__block_button">
        <button className="movies__buton_content">Ещё</button>
      </div>

      <Footer />
    </div>
  );
}