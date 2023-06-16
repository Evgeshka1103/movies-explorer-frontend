import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ movie }) {
  const location = useLocation();

  return (
    <li className="movies-card">
      <img
        src={movie.thumbnail}
        alt={movie.nameRU}
        className="movies-card__poster"
      />
      {location.pathname === "/movies" && (
        <button
          type="button"
          className={`movies-card__save ${
            movie.favorite && "movies-card__save-active"
          }`}
        ></button>
      )}

      {location.pathname === "/saved-movies" && (
        <button type="button" className="movies-card__delete"></button>
      )}
      <div className="movies-card__description">
        <div className="movies-card__title-block">
          <h5 className="movies-card__title">{movie.nameRU}</h5>
        </div>
        <div className="movies-card__duration-block">
          <p className="movies-card__duration">{movie.duration}</p>
        </div>
      </div>
      
      {location.pathname === "/movies" && (
        <button
          type="button"
          className={`movies-card__save ${
            movie.favorite && "movies-card__save-active"
          }`}
        ></button>
      )}

      {location.pathname === "/saved-movies" && (
        <button type="button" className="movies-card__delete"></button>
      )}
    
    </li>
  );
}