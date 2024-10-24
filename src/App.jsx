//import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./component/landinpage-component/HeroSection";
import Navebar from "./component/landinpage-component/Navebar";
import SearchArticle from "./component/landinpage-component/SearchArticle";
import ArticleSection from "./component/landinpage-component/ArticleSection";
import Footer from "./component/landinpage-component/Footer";

function App() {
  return (
    <>
      <Navebar />
      <HeroSection />
      <SearchArticle />
      <ArticleSection />
      <Footer />
    </>
  );
}

export default App;
