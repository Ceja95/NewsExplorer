import { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../blocks/App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import About from "../About/About";

function App() {

  return (
    <div className="app">
      <Header />
      <Main />
      <About />
    </div>

  );
}

export default App;
