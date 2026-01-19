import { useState } from "react";
import Main from "../Main/Main";

function NewsCard() {
    const [articles, setArticles] = useState([]);

    return (
        <div className="news-card">
            <h2 className="news-card__title">{articles.title}</h2>
            <img className="news-card__image" src={articles.urlToImage} alt={articles.title} />
            <p className="news-card__description">{articles.description}</p>
            <p className="news-card__date">{new Date(articles.publishedAt).toLocaleDateString()}</p>
            <p className="news-card__source">{articles.source?.name}</p>
        </div>
    );
}

export default NewsCard;