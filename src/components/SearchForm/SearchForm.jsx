import { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

const searchForm = () => {
    const [articles, setArticles] = useState([]);

    return (
        <div className="search-form">

            <div className="search-form__articles">
                {articles.map((a, i) => (
                    <NewsCard key={i} article={a} />
                ))}

            </div>

        </div>
    )
}

export default searchForm;