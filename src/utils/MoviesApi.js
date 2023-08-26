class MoviesApi {
  constructor({ baseUrl, headers }) {
     this._baseUrl = baseUrl;
     this._headers = headers;
  }

  //проверка
  _checkMoviesResponse(res) {
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

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkMoviesResponse);
  }
};

  const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  export default moviesApi;