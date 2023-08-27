import "./MoviesCard.css";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import mainApi from "../../../utils/MainApi";

export default function MoviesCard({ movie, savedMovies, setSavedMovies }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    savedMovies && savedMovies.some((card) => card.nameRU === movie.nameRU)
      ? setIsLiked(true)
      : setIsLiked(false);
  }, [savedMovies, movie.nameRU]);

  const getTranslateTime = (minute) => {
    let hours = Math.trunc(minute / 60);
    let minutes = minute % 60;

    if (!minutes) {
      return hours + " ч";
    } else if (hours) {
      return hours + "ч " + minutes + "м";
    } else {
      return minutes + " минут";
    }
  };

  const favorite = isLiked ? "movies-card__save-active" : "";
  const deleteButton = "movies-card__delete";

  function handleSaveMovie() {
    const jwt = localStorage.getItem("jwt");
    if (!isLiked) {
      mainApi
        .saveMovie(jwt, movie)
        .then((res) => {
          if (res._id) {
            setSavedMovies([res, ...savedMovies]);
            localStorage.setItem(
              "saved",
              JSON.stringify([res, ...savedMovies])
            );
            setIsLiked(true);
          }
        })
        .catch((error) => console.log(error));
    }
    if (isLiked) {
      const favorites = savedMovies.find((card) => card.movieId === movie.id);
      mainApi.deleteMovie(favorites._id, jwt).then((res) => {
        if (res) {
          setSavedMovies(savedMovies.filter((card) => card !== favorites));
          setIsLiked(false);
        }
      });
    }
  }

  function handleDeleteMovie() {
    const jwt = localStorage.getItem("jwt");

    mainApi
      .deleteMovie(movie._id, jwt)
      .then((res) => {
        if (res) {
          setSavedMovies(savedMovies.filter((card) => card._id !== movie._id));
        }
      })
      .catch((error) => console.log(error));
  }

  const buttonClasses =
    location.pathname === "/movies" ? favorite : deleteButton;
  const buttonsFunction =
    location.pathname === "/movies" ? handleSaveMovie : handleDeleteMovie;

  return (
    <li className="movies-card" id={movie._id}>
      <a
        className="movies-card__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={
            location.pathname === "/saved-movies"
              ? `${movie.image}`
              : `https://api.nomoreparties.co${movie.image.url}`
          }
          alt={movie.nameRU}
          className="movies-card__poster"
        />
      </a>

      <button
        type="button"
        className={`movies-card__save movies-card__save${buttonClasses}`}
        onClick={buttonsFunction}
      ></button>

      <div className="movies-card__description">
        <div className="movies-card__title-block">
          <h5 className="movies-card__title">{movie.nameRU}</h5>
        </div>
        <div className="movies-card__duration-block">
          <p className="movies-card__duration">
            {getTranslateTime(movie.duration)}
          </p>
        </div>
      </div>
    </li>
  );
}