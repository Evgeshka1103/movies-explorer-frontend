class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //проверка
  _checkGetResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _checkToken = (headers) => {
    const token = localStorage.getItem("jwt");

    if (token) {
      headers["authorization"] = `Bearer ${token}`;
    }
    return headers;
  };

  checkTokenOnServer = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkGetResponse);
  };

  //Загрузка информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._checkToken(this._headers),
    }).then(this._checkGetResponse);
  }

  //Редактирование профиля
  patchUserInfoData({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._checkToken(this._headers),
      body: JSON.stringify({
        name: name,
        about: email,
      }),
    }).then(this._checkGetResponse);
  }

  getSavedMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "GET",
      headers: this._checkToken(this._headers),
    }).then(this._checkGetResponse);
  }

  //Сохранить фильм
  saveMovie(
    token,
    {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      id,
    }
  ) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: this._checkToken(this._headers),
      body: JSON.stringify({
        country: country === null ? nameEN : country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink:
          trailerLink === null
            ? `https://api.nomoreparties.co${image.url}`
            : trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.url}`,
        nameRU,
        nameEN: nameEN === "" ? nameRU : nameEN,
        movieId: id,
      }),
    }).then(this._checkGetResponse);
  }

  //Удаление фильма
  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: this._checkToken(this._headers),
    }).then(this._checkGetResponse);
  }
}

const api = new Api({
  baseUrl: "http://api.drevgeniya.nomoredomains.work",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;