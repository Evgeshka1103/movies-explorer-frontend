import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

export default function Register() {
  return (
    <div className="auth">
      <div className="auth__container">
        <Link to="/">
          <img className="auth__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form name="signup" className="auth__form">
          <h5 className="auth__placeholder">Имя</h5>
          <div className="auth__field">
            <input
              className="auth__input"
              type="text"
              name="name"
              minLength="2"
              maxLength="30"
              value={"Виталий"}
              required
            />
            <span className="auth__error"></span>
          </div>
          <h5 className="auth__placeholder">E-mail</h5>
          <div className="auth__field">
            <input
              className="auth__input"
              type="email"
              name="email"
              minLength="6"
              maxLength="30"
              value={"pochta@yandex.ru"}
              required
            />
            <span className="auth__error"></span>
          </div>
          <h5 className="auth__placeholder">Пароль</h5>
          <div className="auth__field">
            <input
              className="auth__input auth__input_password"
              type="password"
              name="password"
              minLength="6"
              maxLength="30"
              value={"password"}
              required
            />
            <span className="auth__error">Что-то пошло не так...</span>
          </div>

          <button className="auth__button">Зарегистрироваться</button>
        </form>
        <div className="auth__register">
          <p className="auth__text_register">Уже зарегистрированы?</p>
          <Link to="/signin" className="auth__login">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}