import { useState } from "react";
import Main from "../Main/Main";

function NewsCard() {
    const [articles, setArticles] = useState([]);

    return (
        <section className="news-card">
            <Main />
            <h2 className="news-card__title">{articles.title}</h2>
            <img className="news-card__image" src={articles.urlToImage} alt={articles.title} />
            <p className="news-card__description">{articles.description}</p>
        </section>
    );
}

export default NewsCard;