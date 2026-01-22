import { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../blocks/App.css";
import CurrentUserContext from "../../context/CurrentUserContext";
import Main from "../Main/Main";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import NewsCard from "../NewsCard/NewsCard";
import { checkToken } from "../../../utils/Auth";
import { getArticles } from "../../../utils/Api";
import LoginModal from "../LoginModal/LoginModal";

function App() {

  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const loginClick = () => {
    console.log(loginClick);
    setActiveModal("login");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  function closeOnOverlayClick(e) {
    if (e.target.classList.contains("modal_opened")) {
      closeActiveModal();
    }
  };

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      closeActiveModal();
    }
  };

  const handleSearch = async (encodedQuery) => {
    const res = await fetch(`/article?.${encodedQuery}`);
    const data = await res.json();

    setArticles(data.articles || []);
  };


  const handleLoginSubmit = ({ email, password }) => {

    login({ email, password })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setToken(data.token);
        checkToken(data.token)
          .then((currentUser) => {
            setCurrentUser(currentUser);
            setIsLoggedIn(true);
          });
        return data;
      })
      .then(() => {
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  }

  useEffect(() => {
    getArticles()
      .then((data) => {
        setArticles(data);
      })
      .catch(console.error);
    const token = localStorage.getItem("jwt");
    setToken(token);
    checkToken(token)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        setIsLoggedIn(true);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <div className="page__container">

          <Header loginClick={loginClick} />

          <Main onSearch={handleSearch} />

          <About />

          <Footer />

          <SearchForm onSearch={handleSearch} />

          <NewsCard />

          <LoginModal
            isOpen={activeModal === "login"}
            handleLoginSubmit={handleLoginSubmit}
            /*onButtonNoteClick={registerClick}*/
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
          />

        </div>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
