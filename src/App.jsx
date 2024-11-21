//import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pagese/Home";
import SignIn from "./Pagese/SignIn";
import LoginPage from "./Pagese/Login";
import ArticlePage from "./Pagese/ArticlePage";
//----For User------------------
import UserProfile from "./Pagese/User/UserProfilePage";
import UserResetPassword from "./Pagese/User/UserResetPassword";
//----For Admin------------------
import AdminArticleMenagement from "./Pagese/Admin/AdminArticleMenagement";
import AdminProfilePage from "./Pagese/Admin/AdminProfilePage";
import AdminCategoryMenagement from "./Pagese/Admin/AdminCategoryMenagement";
import AdminNotification from "./Pagese/Admin/AdminNotification";
import AdminResetPassword from "./Pagese/Admin/AdminResetPassword";
import AdminCreateArticle from "./Pagese/Admin/AdminCreateArticle";
import AdminEditArticle from "./Pagese/Admin/AdminEditArticle";

//todo
//authentication for admin
//fetch data for create and edit
//delete axios

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:postId" element={<ArticlePage />} />
        {/**For user */}
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/user/reset-password" element={<UserResetPassword />} />

        {/**For admin************************************************************/}
        <Route path="/admin/profile" element={<AdminProfilePage />} />
        <Route
          path="/admin/article-menage"
          element={<AdminArticleMenagement />}
        />
        <Route
          path="/admin/article-menage/create"
          element={<AdminCreateArticle />}
        />
        <Route
          path="/admin/article-menage/edit/:postId"
          element={<AdminEditArticle />}
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
