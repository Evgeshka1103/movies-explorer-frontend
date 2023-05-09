import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        <Navigation />
      </div>
    </div>
  );
}