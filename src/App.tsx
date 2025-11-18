import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/Navbar/Navbar";
import NewsFooter from "./components/Footer/NewsFooter";
import BlogPage from "./pages/Blog/BlogPage";
import ContactPage from "./pages/Contact/ContactPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<HomePage />} />

        {/* Trang đăng nhập */}
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />


        {/* Nếu path không khớp thì đẩy về /login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <NewsFooter />
    </BrowserRouter>
  );
};

export default App;
