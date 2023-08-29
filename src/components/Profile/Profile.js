import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import NavProfile from "../NavProfile/NavProfile";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../Context/CurreentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Profile({ handleUpdateUser, handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);
 const [isValidForm, setIsValidForm] = useState(false);
 const [isDisabledInput, setIsDisabledInput] = useState(false);

  const { values, setValues, handleChange, errors, isValid, onBlur } = useFormWithValidation();

  useEffect(() => {
    setValues({
      ...values, name: currentUser.name, email: currentUser.email
    });
  }, []);

  useEffect(() => {
  if (values.name === currentUser.name && values.email === currentUser.email) {
    setIsValidForm(false);
  } else {
    if (isValid) {
      setIsValidForm(true);
    }
  }

  }, [values, currentUser]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsDisabledInput(true);
    handleUpdateUser({
      name: values['name'],
      email: values['email'],
    });
    setIsDisabledInput(false);
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
        <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
        <form className="profile__form" onSubmit={handleFormSubmit}>
          <fieldset className="profile__form-inputs">
          <span className="profile__error">{errors.name}</span>
            <div className="profile__input-content">
              <h5 className="profile__placeholder">Имя</h5>

              <input
                disabled={isDisabledInput}
                className="profile__input"
                placeholder="name"
                type="name"
                name="name"
                minLength={2}
                maxLength={30}
                value={values.name || ''}
                onChange={handleChange}
                required={true}
              />
            </div>
            <div className="profile__line"></div>
            <div className="profile__input-content">
              <h5 className="profile__placeholder">E-mail</h5>
              <input
              disabled={isDisabledInput}
                className="profile__input-email"
                placeholder="email"
                type="email"
                name="email"
                minLength={6}
                maxLength={30}
                value={values.email || ''}
                onChange={handleChange}
                onBlur={onBlur}
                required={true}
              />

            </div>
            <span className="profile__error">{errors.email}</span>
          </fieldset>

          <div className="profile__block-buttons">
            <button disabled={!isValidForm || isDisabledInput} className={!isValidForm ? 'profile__edit-button profile__edit-button_disabled' : 'profile__edit-button' } type="submit" >
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
