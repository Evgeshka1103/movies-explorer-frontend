export const BASE_URL = "http://api.drevgeniya.nomoredomains.work";

//проверка
function onResponse(response) {
  if (response.ok) {
    console.log(response);
    return response.json();
  }
  return Promise.reject({ message: "Ошибка" }, response);
}

//регистрация
export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => onResponse(res));
};

//авторизация
export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => onResponse(res));
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => onResponse(res));
};