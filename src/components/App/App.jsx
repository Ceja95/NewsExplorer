import { useEffect, useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

return (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/saved-news" element={<ProtectedRoute />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);
