//import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pagese/Home";
import SignIn from "./Pagese/SignIn";
import LoginPage from "./Pagese/Login";
import ArticlePage from "./Pagese/ArticlePage";
import AdminArticleMenagement from "./Pagese/Admin/AdminArticleMenagement";
import AdminProfilePage from "./Pagese/Admin/AdminProfilePage";
import AdminCategoryMenagement from "./Pagese/Admin/AdminCategoryMenagement";
import AdminNotification from "./Pagese/Admin/AdminNotification";
import AdminResetPassword from "./Pagese/Admin/AdminResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:postId" element={<ArticlePage />} />
        {/**For admin */}
        <Route path="/admin/profile" element={<AdminProfilePage />} />
        <Route
          path="/admin/article-menage"
          element={<AdminArticleMenagement />}
        />
        <Route
          path="/admin/category-menage"
          element={<AdminCategoryMenagement />}
        />
        <Route path="/admin/notification" element={<AdminNotification />} />
        <Route path="/admin/reset-password" element={<AdminResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
