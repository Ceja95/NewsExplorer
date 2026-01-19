export const apiKey = "8b448dbedfc34961b7a2cbb9c595ea18";

export const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";
