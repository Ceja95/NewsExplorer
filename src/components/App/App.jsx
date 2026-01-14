import { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {

  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/saved-news" element={<ProtectedRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Header />
      
    </div>

  );
}

export default App;
