import newsApiBaseUrl from "./Constants.js";

export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: $(res.status)`);
};

function getArticles() {
  return fetch(`${newsApiBaseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

function addCardSave(_id, token) {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function removeCardSave(_id, token) {
  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export { getArticles };
