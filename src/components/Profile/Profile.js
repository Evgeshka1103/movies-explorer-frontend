import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import NavProfile from "../NavProfile/NavProfile";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import React, { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../Context/CurreentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Profile({ handleUpdateUser, handleSignOut }) {

  const currentUser = useContext(CurrentUserContext);
  const userName = currentUser.name;
  const userEmail = currentUser.email;

  const { values, setValues, handleChange, errors, isValid, resetForm } = useFormWithValidation({
    email: userEmail,
    name: userName,
  });

  const isDisabled = values.email === '' || !isValid || values.name === '' || (values.email === userEmail && values.name === userName);
  const button = !isDisabled ? '' : 'profile__edit-button-disabled';

  useEffect(() => {
    setValues({
      name: userName,
      email: userEmail,
    });
  }, [currentUser, setValues, userName, userEmail]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({
      name: values.name,
      email: values.email,
    });
    resetForm();
  };

  const handleExit = () => {
    handleSignOut();
  };

  return (
    <div className="profile">
      <header className="profile__header">
        <Link to="/">
          <img className="profile__logo" src={logo} alt="Логотип" />
        </Link>
        <NavProfile />
        <BurgerMenu />
      </header>

      <div className="profile__content">
        <h2 className="profile__title">{`Привет, ${userName}!`}</h2>
        <form className="profile__form">
          <fieldset className="profile__form-inputs">
            <div className="profile__input-content">
              <h5 className="profile__placeholder">Имя</h5>
              <span className="profile__error">{errors.name}</span>
              <input
                className="profile__input"
                placeholder="name"
                type="name"
                name="name"
                minLength={2}
                maxLength={30}
                value={values.name || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="profile__line"></div>
            <div className="profile__input-content">
              <h5 className="profile__placeholder">E-mail</h5>
              <input
                className="profile__input"
                placeholder="email"
                type="email"
                name="email"
                minLength={6}
                maxLength={30}
                value={values.email || ''}
                onChange={handleChange}
                required
              />
              <span className="profile__error">{errors.email}</span>
            </div>
          </fieldset>

          <div className="profile__block-buttons">
            <button type="button" className={`profile__edit-button${ button || !isValid ? `profile__edit-button-disabled` : '' }`} onClick={handleFormSubmit}>
              Редактировать
            </button>
            <Link to="/" className="profile__exit-button" onClick={handleExit}>
              Выйти из аккаунта
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
