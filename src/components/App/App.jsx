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
import Preloader from "../Preloader/Preloader";
import { checkToken, register, login } from "../../../utils/Auth";
import { getArticles, addCardSave, removeCardSave } from "../../../utils/Api";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {

  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const loginClick = () => {
    setActiveModal("login");
  };

  const registerClick = () => {
    setActiveModal("register");
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

  
  const handleRegisterSubmit = ({ name, imageUrl, password, email }) => {
    const registration = {
      name,
      avatar: imageUrl,
      password,
      email,
    };

    register(registration)
      .then(() => {
        return login({ email, password });
      })
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        setIsLoggedIn(true);
        closeActiveModal();
        return checkToken(data.token);
      })
      .catch((err) => {
        console.error("Registration or login failed:", err);
      });
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
  };

  useEffect(() => {
    if (activeModal === "") return;
    document.addEventListener("mousedown", closeOnOverlayClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", closeOnOverlayClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <div className="page__container">

          <Header registerClick={registerClick} loginClick={loginClick} />

          <Main />

          <About />

          <Footer />

          <SearchForm  />

          <NewsCard />

          <RegisterModal
            isOpen={activeModal === "register"}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
            handleRegister={handleRegisterSubmit}
            onButtonNoteClick={loginClick}
          />

          <LoginModal
            isOpen={activeModal === "login"}
            handleLoginSubmit={handleLoginSubmit}
            onButtonNoteClick={registerClick}
            closeActiveModal={closeActiveModal}
            closeOnOverlayClick={closeOnOverlayClick}
          />

        </div>

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
