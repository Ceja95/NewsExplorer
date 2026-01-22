const apiKey = "8b448dbedfc34961b7a2cbb9c595ea18";

const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://newsapi.org/v2/everything${apiKey}"
    : "https://newsapi.org/v2/everything";

export { apiKey, newsApiBaseUrl };
