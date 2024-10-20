//import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import HeroSection from "./component/HeroSection";
import Navebar from "./component/Navebar";
import SearchArticle from "./component/SearchArticle";
import GridDisplay from "./component/GridDisplay";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navebar />
      <HeroSection />
      <SearchArticle />
      <GridDisplay />
      <Footer />
    </>
  );
}

export default App;
