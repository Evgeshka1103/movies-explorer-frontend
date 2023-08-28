import "./MoviesCardList.css";
import React, { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router";

export default function MoviesCardList({
  movies,
  className,
  onClick,
  savedMovies,
  setSavedMovies,
  handleSaveMovies,
  checkbox,
  checkSavedMovies,
}) {
  const location = useLocation();
  const windowSize = document.documentElement.clientWidth;
  const [moviesContent, setMoviesContent] = useState(null);

  const filterCheckTime = movies.filter((card) => {
    if (location.pathname === "/movies") {
      return (card.duration <= 40 && checkbox) || !checkbox ? card : null;
    }
    if (location.pathname === "/saved-movies") {
      return (card.duration <= 40 && checkSavedMovies) || !checkSavedMovies
        ? card
        : null;
    }
  });

  useEffect(() => {
    contentMovies();
    window.addEventListener("resize", (e) => resizeMovies(e));
    return () => {
      window.removeEventListener("resize", resizeMovies);
    };
  }, []);

  function contentMovies() {
    if (windowSize >= 1280) {
      return setMoviesContent(12);
    }
    if (windowSize >= 768) {
      return setMoviesContent(8);
    } else {
      setMoviesContent(5);
    }
    return setMoviesContent(5);
  }

  function resizeMovies(e) {
    if (e.target.innerWidth >= 768) {
      setMoviesContent(12);
    } else if (e.target.innerWidth >= 480) {
      setMoviesContent(8);
    } else {
      setMoviesContent(5);
    }
  }

  function handleContentMovies() {
    if (windowSize < 689) {
      setMoviesContent(moviesContent + 2);
    } else if (windowSize < 768) {
      setMoviesContent(moviesContent + 2);
    } else if (windowSize > 768) {
      setMoviesContent(moviesContent + 3);
    } else if (windowSize < 1099) {
      setMoviesContent(moviesContent + 2);
    }
  }

  return (
    <>
      <ul className="movies-card-list">
        {filterCheckTime.slice(0, moviesContent).map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id || movie._id}
            savedMovies={savedMovies}
            setSavedMovies={setSavedMovies}
            onClick={onClick}
            buttonName={className}
            handleSaveMovies={handleSaveMovies}
            duration={movie.duration}
          />
        ))}
      </ul>
      <div className="movies-card-block-button">
        {moviesContent >= filterCheckTime.length ? null : (
          <button
            className="movies-card-buton-content"
            onClick={handleContentMovies}
          >
            Ещё
          </button>
        )}
      </div>
    </>
  );
}