import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form">
          <h5 className="login__placeholder">E-mail</h5>
          <div className="login__field">
            <input
              className="login__input"
              placeholder="email"
              type="email"
              name="email"
              minLength="6"
              maxLength="30"
              value={"pochta@yandex.ru"}
              required
            />
            <span className="login__error"></span>
          </div>
          <h5 className="login__placeholder">Пароль</h5>
          <div className="login__field">
            <input
              className="login__input login__input_password"
              placeholder="password"
              type="password"
              name="password"
              minLength="6"
              maxLength="30"
              value={""}
              required
            />
            <span className="login__error"></span>
          </div>

          <button className="login__button">Войти</button>
        </form>
        <div className="login__register">
          <p className="login__text-register">Ещё не зарегистрированы?</p>
          <Link className="login__login" to="/signup">
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  );
}