import { request } from "../Auth/utilsFunctions/request";
import { BASE_URL } from "../const";

const sendRequest = request(BASE_URL);
// Зарегистрировать пользователя, если он вошел впервый раз, вернуть id и email
export const register = (name, email, password) => {
  return sendRequest(`/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
    credentials: "include",
  });
};
//Авторизовать пользователя, если он входит первый раз или после выхода, вернуть token пользователя
export const auhtorize = (email, password) => {
  return sendRequest(`/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
    credentials: "include",
  });
};
