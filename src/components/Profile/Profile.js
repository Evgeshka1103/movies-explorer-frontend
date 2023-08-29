import "./Profile.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import NavProfile from "../NavProfile/NavProfile";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import React, { useState, useContext, useEffect } from "react";
import { CurrentUserContext } from "../../Context/CurreentUserContext";
import useFormWithValidation from "../../hooks/useFormWithValidation";

export default function Profile({ handleUpdateUser, handleSignOut }) {
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const userName = currentUser.name;
  const userEmail = currentUser.email;

  const { values, setValues, handleChange, errors, isValid } = useFormWithValidation();

  const isDisabled = values.email === '' || !isValid || values.name === '' || (values.email === userEmail && values.name === userName);
  const button = !isDisabled ? '' : 'profile__edit-button_disabled';

  useEffect(() => {
    setValues({
      name: userName,
      email: userEmail,
    });
  }, [currentUser, setValues, userName, userEmail]);

  useEffect(() => {
   setIsUpdateUser(
    !(values.name === userName) || !(values.email === userEmail)
   )


  }, [values.name, values.email, userName, userEmail]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({
      name: values.name,
      email: values.email,
    });
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
        <form className="profile__form" onSubmit={handleFormSubmit}>
          <fieldset className="profile__form-inputs">
          <span className="profile__error">{errors.name}</span>
            <div className="profile__input-content">
              <h5 className="profile__placeholder">Имя</h5>

              <input
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
                className="profile__input-email"
                placeholder="email"
                type="email"
                name="email"
                minLength={6}
                maxLength={30}
                value={values.email || ''}
                onChange={handleChange}
                required={true}
              />

            </div>
            <span className="profile__error">{errors.email}</span>
          </fieldset>

          <div className="profile__block-buttons">
            <button className={`profile__edit-button ${ button || !isValid ? `profile__edit-button_disabled` : ""}`} type="submit" >
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
