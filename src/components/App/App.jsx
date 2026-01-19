import { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../blocks/App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {

  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className="page">

      <div className="page__container">
        <Header />
        <Main />
        <About />
        <Footer />
      </div>

    </div>
  );
}

export default App;
