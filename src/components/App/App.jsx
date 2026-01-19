import { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../blocks/App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";

function App() {

  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});



  const handleSearch = async (encodedQuery) => {
    const res = await fetch(`/article?.${encodedQuery}`);
    const data = await res.json();

    setArticles(data.articles || []);
  };

  return (
    <div className="page">

      <div className="page__container">
        <Header />
        <Main onSearch={handleSearch} />
        <About />
        <Footer />
        <SearchForm onSearch={handleSearch} />
        <NewsCard />
      </div>

    </div>
  );
}

export default App;
