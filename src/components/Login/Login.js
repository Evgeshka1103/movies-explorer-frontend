import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import useFormWithValidation from "../../hooks/useFormWithValidation";
import React from "react";

export default function Login({ handleLogin }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleFormSubmit(e) {
    e.preventDefault();

    handleLogin(values.email, values.password);
  }

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleFormSubmit}>
          <h5 className="login__placeholder">E-mail</h5>
          <div className="login__field">
            <input
              className="login__input"
              placeholder="email"
              type="email"
              name="email"
              minLength={6}
              maxLength={30}
              value={values.email || ""}
              onChange={handleChange}
              required
            />
            <span className="login__error">{errors.email}</span>
          </div>
          <h5 className="login__placeholder">Пароль</h5>
          <div className="login__field">
            <input
              className={`login__input login__input_password_active ${
                !isValid ? `login__input_password` : ""
              }`}
              placeholder="password"
              type="password"
              name="password"
              minLength={6}
              maxLength={30}
              value={values.password || ""}
              onChange={handleChange}
              required
            />
            <span className="login__error">{errors.password}</span>
          </div>

          <button
            className={`login__button ${
              !isValid ? `login__button_disabled` : ""
            }`}
            type="submit"
          >
            Войти
          </button>
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