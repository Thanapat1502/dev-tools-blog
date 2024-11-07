//import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pagese/Home";
import SignIn from "./Pagese/SignIn";
import LoginPage from "./Pagese/Login";
import ArticlePage from "./Pagese/ArticlePage";
import AdminPage from "./Pagese/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:postId" element={<ArticlePage />} />
        <Route path="/admin/profile" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
