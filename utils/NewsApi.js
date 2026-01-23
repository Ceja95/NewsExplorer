import apiKey from "./Constants.js";

export const fetchNewsApi = ({q, from, to, pageSize}, apiKey) => {
  return fetch("https://newsapi.org/v2/everything${apiKey}");
};
