import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import NavProfile from "../NavProfile/NavProfile";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile__header">
        <Link to="/">
          <img className="profile__logo" src={logo} alt="Логотип" />
        </Link>
        <NavProfile />
        <BurgerMenu />
      </div>

      <div className="profile__content">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile__form">
          <fieldset className="profile__form_inputs">
            <div className="profile__input_content">
              <h5 className="profile__placeholder">Имя</h5>
              <input
                className="profile__input"
                type="name"
                name="name"
                minLength="2"
                maxLength="30"
                value={"Виталий"}
                required
              />
            </div>
            <div className="profile__line"></div>
            <div className="profile__input_content">
              <h5 className="profile__placeholder">E-mail</h5>
              <input
                className="profile__input"
                type="email"
                name="email"
                minLength="6"
                maxLength="30"
                value={"pochta@yandex.ru"}
                required
              />
            </div>
          </fieldset>

          <div className="profile__block_buttons">
            <button type="button" className="profile__edit_button">
              Редактировать
            </button>
            <Link to="/" className="profile__exit_button">
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
