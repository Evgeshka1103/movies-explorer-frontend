import "./Register.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Register({ handleRegister }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleFormSubmit(e) {
    e.preventDefault();
    handleRegister(values.name, values.email, values.password);
  }

  return (
    <div className="auth">
      <div className="auth__container">
        <Link to="/">
          <img className="auth__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="auth__title">Добро пожаловать!</h2>
        <form name="signup" className="auth__form" onSubmit={handleFormSubmit}>
          <h5 className="auth__placeholder">Имя</h5>
          <div className="auth__field">
            <input
              className="auth__input"
              placeholder="name"
              type="text"
              name="name"
              minLength={2}
              maxLength={30}
              value={values.name || ""}
              onChange={handleChange}
              required
            />
            <span className="auth__error">{errors.name}</span>
          </div>
          <h5 className="auth__placeholder">E-mail</h5>
          <div className="auth__field">
            <input
              className="auth__input"
              placeholder="email"
              type="email"
              name="email"
              minLength={6}
              maxLength={30}
              value={values.email || ""}
              onChange={handleChange}
              required
            />
            <span className="auth__error">{errors.email}</span>
          </div>
          <h5 className="auth__placeholder">Пароль</h5>
          <div className="auth__field">
            <input
              className="auth__input auth__input_password"
              placeholder="password"
              type="password"
              name="password"
              minLength={6}
              maxLength={30}
              value={values.password || ""}
              onChange={handleChange}
              required
            />
            <span className="auth__error">{errors.password}</span>
          </div>

          <button
            className={`auth__button ${
              !isValid ? `auth__button_disabled` : ""
            }`}
            type="submit"
            to="/signup"
          >
            Зарегистрироваться
          </button>
        </form>
        <div className="auth__register">
          <p className="auth__text-register">Уже зарегистрированы?</p>
          <Link to="/signin" className="auth__login">
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
}