class Api {
  constructor({ baseUrl, headers }) {
     this._baseUrl = baseUrl;
     this._headers = headers;
  }

  //проверка
  _checkResponse(res) {
     if (res.ok) {
        return res.json();
     }
     return Promise.reject(`Ошибка: ${res.status}`);
  }

  _checkToken = (headers) => {
    const token = localStorage.getItem('jwt');

    if (token) {
      headers['authorization'] = `Bearer ${token}`;
    }
    return headers;
  };

  checkTokenOnServer = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    })
    .then((res) => this._getResponseData(res));
};

  //Загрузка информации о пользователе с сервера
  getUserInfo() {
     return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: this._checkToken(this._headers),
     })
        .then(this._checkResponse);
  }

  //Редактирование профиля
  patchUserInfoData({ name, email }) {
     return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: this._checkToken(this._headers),
        body: JSON.stringify({
           name: name,
           about: email
        })
     })
        .then(this._checkResponse);
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._checkToken(this._headers),
    })
    .then(this._checkResponse);
  };

  //Сохранить фильм
  saveMovie(token, {
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
}) {
    return fetch(`${this._baseUrl}/movies`, {
       method: 'POST',
       headers: this._checkToken(this._headers),
       body: JSON.stringify({
        country: country === null ? nameEN : country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink:  trailerLink === null ? `https://api.nomoreparties.co${image.url}` : trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.url}`,
        nameRU,
        nameEN: nameEN === '' ? nameRU : nameEN,
        movieId: id,
    })
    })
       .then(this._checkResponse);
   }

  //Удаление фильма
  deleteMovie(id) {
     return fetch(`${this._baseUrl}/movies/${id}`, {
        method: 'DELETE',
        headers: this._checkToken(this._headers),
     })
        .then(this._checkResponse);
    }

}

const api = new Api({
  baseUrl: 'http://api.drevgeniya.nomoredomains.work',
  headers: {
     'Content-Type': 'application/json'
  }
});

export default api;