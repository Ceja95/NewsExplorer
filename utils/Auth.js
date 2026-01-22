import {newsApiBaseUrl} from "./Constants.js";
import { checkResponse } from "./Api.js";

const register = ({ name, email, password }) => {
  return fetch(`${newsApiBaseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

const login = ({ email, password }) => {
  return fetch(`${newsApiBaseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
};

const checkToken = (token) => {
  return fetch(`${newsApiBaseUrl}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};

export { register, login, checkToken };
