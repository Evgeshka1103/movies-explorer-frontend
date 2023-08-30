import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import PageNotFound from "../PageNotFound/PageNotFound";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import InfoTooltip from "../Popup/PopupErr";
import PopupErr from "../Popup/PopupErr";

import { CurrentUserContext } from "../../Context/CurreentUserContext";

import * as auth from "../../utils/Auth";
import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");

  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [isPopupErr, setIsPopupErr] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  const [isCheckBoxOpen, setIsCheckBoxOpen] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [checkSavedMovies, setCheckSavedMovies] = useState(false);

  useEffect(() => {
    if (token) {
      mainApi
        .checkTokenOnServer(token)
        .then((userData) => {
          setIsLoggedIn(true);
          setIsRegister(true);
          setCurrentUser(userData);
        })
        .catch((error) => console.log(error));
    }
  }, [token]);

  const handleRegister = (email, password, name) => {
    auth
      .register(email, password, name)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((error) => {
        setIsRegister(false);
        handleOpenPopupErr();
      });
  };

  const handleLogin = (email, password) => {
    auth
      .login(email, password)
      .then((data) => {
        setIsLoggedIn(true);
        setIsRegister(true);
        localStorage.setItem("jwt", data.token);
        return navigate("/movies", { replace: true });
      })
      .catch((error) => {
        handleOpenPopupErr();
        console.log(error);
      });
  };

  const handleUpdateUser = (data) => {
    mainApi
      .patchUserInfoData(data)
      .then((data) => {
        setCurrentUser(data);
        localStorage.setItem("currentUser", JSON.stringify(data));
        setIsInfoTooltip(true);
      })
      .catch((error) => {
        console.log(error);
        handleOpenPopupErr();
      });
  };

  const handleSignOut = () => {
    localStorage.clear();
    setSearchedMovies([]);
    setMovies([]);
    setSavedMovies([]);
    setIsLoggedIn(false);
    setCurrentUser({});
    return navigate("/", { replace: true });
  };

  //для фильмов
  const searchMovies = (text) => {
    if (isLoggedIn) {
      const jwt = localStorage.getItem("jwt");
      if (location.pathname === "/movies") {
        if (!localStorage.getItem("add-movies")) {
          moviesApi
            .getMovies()
            .then((data) => {
              setMovies(filterCheckMovies(data, text));
              const addMovies = JSON.stringify(data);
              localStorage.setItem("add-movies", addMovies);
            })
            .catch((err) => console.log(err));
        } else {
          const searchList = JSON.parse(localStorage.getItem("add-movies"));
          setMovies(filterCheckMovies(searchList, text));
        }
      } else if (location.pathname === "/saved-movies") {
        mainApi
          .getSavedMovies(jwt)
          .then((res) => {
            setSavedMovies(filterCheckMovies(res, text));
            localStorage.setItem("saved", JSON.stringify(res));
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const filterCheckMovies = (data, text) => {
    const searchMoviesList = data.filter((movie) => {
      if (movie.nameRU.toLowerCase().includes(text.toLowerCase())) {
        if (movie.duration <= 1 && isCheckBoxOpen) {
          return movie;
        }
        if (movie.duration >= 1 && !isCheckBoxOpen) {
          return movie;
        }
        return false;
      }
      return false;
    });

    if (searchMoviesList.length === 0) {
      setSearchError(true);
    } else {
      setSearchError(false);
    }

    if (location.pathname === "/movies") {
      const resultSearchMovie = JSON.stringify(searchMoviesList);
      localStorage.setItem("search", resultSearchMovie);
    }

    if (location.pathname === "/saved-movies") {
      const resultSearchMovie = JSON.stringify(searchMoviesList);
      localStorage.setItem("searchSaved", resultSearchMovie);
    }

    return searchMoviesList;
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (!localStorage.getItem("saved")) {
        mainApi
          .getSavedMovies(localStorage.getItem("jwt"))
          .then((res) => {
            setSavedMovies(res);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [isLoggedIn, savedMovies, navigate]);

  useEffect(() => {
    mainApi.getSavedMovies(localStorage.getItem("jwt")).then((res) => {
      setSavedMovies(res);
    });
  }, []);

  useEffect(() => {
    if (savedMovies) {
      localStorage.setItem("saved", JSON.stringify(savedMovies));
    }
  }, [savedMovies]);

  //для попапов
  useEffect(() => {
    function handleClickClose(e) {
      if (e.target.classList.contains("popup__opened")) {
        handleClosePopupErr();
      }
    }
    document.addEventListener("mousedown", handleClickClose);

    return () => {
      document.removeEventListener("mousedown", handleClickClose);
    };
  }, []);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        handleClosePopupErr();
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleOpenPopupErr = () => setIsPopupErr(true);
  const handleClosePopupErr = () => setIsPopupErr(false);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main isLoggedIn={isLoggedIn}/>
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute isLoggedIn={token}>
                <>
                  <Movies
                    movies={movies}
                    searchMovies={searchMovies}
                    setMovies={setMovies}
                    searchedMovies={searchedMovies}
                    checkbox={checkbox}
                    setCheckbox={setCheckbox}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    searchError={searchError}
                    setSearchError={setSearchError}
                  />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute isLoggedIn={token}>
                <>
                  <SavedMovies
                    movies={savedMovies}
                    searchMovies={searchMovies}
                    setMovies={setMovies}
                    searchedMovies={searchedMovies}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    checkSavedMovies={checkSavedMovies}
                    setCheckSavedMovies={setCheckSavedMovies}
                    searchError={searchError}
                    setSearchError={setSearchError}
                  />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/signup"
            element={
              <Register
                isLoggedIn={isLoggedIn}
                handleRegister={handleRegister}
              />
            }
          />

          <Route
            path="/signin"
            element={
              <Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={token}>
                <>
                  <Profile
                    isLoggedIn={token}
                    name={currentUser.name}
                    handleUpdateUser={handleUpdateUser}
                    handleSignOut={handleSignOut}
                  />
                </>
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>

      <PopupErr
        isOpen={isPopupErr}
        onClose={handleClosePopupErr}
        isRegister={isRegister}
      />

      <InfoTooltip isOpen={isInfoTooltip} />
    </CurrentUserContext.Provider>
  );
}