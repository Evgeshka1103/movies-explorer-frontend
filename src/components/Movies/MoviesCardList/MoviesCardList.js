import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies }) {
  return (
    <ul className="movies__card_list">
      {movies.map((movie) => {
        return <MoviesCard movie={movie} key={movie._id} />;
      })}
    </ul>
  );
}