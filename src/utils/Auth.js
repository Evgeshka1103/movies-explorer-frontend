export const BASE_URL = 'http://localhost:3000';

//проверка
function onResponse(response) {
  if (response.ok) {
      console.log(response)
      return response.json();
  }
  return Promise.reject({ message: "Ошибка" }, response);
}

//регистрация
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password })
  })
      .then((res) => onResponse(res));
}

//авторизация
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
  })
      .then((res) => onResponse(res));
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      },
  })
      .then((res) => onResponse(res));
}