import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ movie }) {
  const location = useLocation();

  return (
    <li className="movies__card">
      <div className="movies__card_block">
        <img
          src={movie.thumbnail}
          alt={movie.nameRU}
          className="movies__card_poster"
        />
        {location.pathname === "/movies" && (
          <button
            type="button"
            className={`movies__card_icon movies__card_save ${
              movie.favorite && "movies__card_save-active"
            }`}
          ></button>
        )}

        {location.pathname === "/saved-movies" && (
          <button
            type="button"
            className="movies__card_icon movies__card_delete"
          ></button>
        )}
      </div>

      <div className="movies__card_description">
        <div className="movies__card_title-block">
          <h5 className="movies__card_title">{movie.nameRU}</h5>
        </div>
        <div className="movies__card_duration-block">
          <p className="movies__card_duration">{movie.duration}</p>
        </div>
      </div>
    </li>
  );
}