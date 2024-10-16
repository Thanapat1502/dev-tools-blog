// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
function Navebar() {
  return (
    <nav className="flex justify-between border-b pt-3 pb-3">
      <a id="logo" className="text-2xl font-bold ml-6">
        hh<span className="text-green-500">.</span>
      </a>
      <div id="login-section" className="hidden lg:flex lg:gap-2 ">
        <button className="border p-2 pr-10 pl-10 rounded-full border-black font-medium text-base">
          Login
        </button>
        <button className="border p-2 pr-10 pl-10 rounded-full bg-black text-white font-medium text-base">
          Sign up
        </button>
      </div>
    </nav>
  );
}
function HeroSection() {
  return (
    <main className="w-full pt-10 pb-10 pr-4 pl-4 flex-col justify-center items-center bg-[#f9f8f6] lg:flex-row">
      <Slogan />
      <ImageContainer />
      <IntroArticle />
    </main>
  );
}
{
  /**Sub Function >>>>>>>>>>>> */
}
function Slogan() {
  return (
    <>
      <div className="flex-col">
        <h2 className="font-semibold text-4xl text-center pb-2">
          Stay Informed, <br />
          Stay Inspired
        </h2>
        <p className="text-base text-center text-[#75716B] font-semibold pt-2 pb-4">
          Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
          Inspiration and Information.
        </p>
      </div>
    </>
  );
}
function ImageContainer() {
  return (
    <img
      src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
      alt="a man with a cat"
      className="h-[530px] object-cover rounded-lg shadow-lg lg:w-1/3 mx-4 mb-8 lg:mb-0"
    />
  );
}
function IntroArticle() {
  return (
    <div id="intro-article" className="w-1/3">
      <div id="author">
        <p className="text-[#75716B]">-Author</p>
        <h1>Thompson P.</h1>
      </div>
      <p>
        I am a pet enthusiast and freelance writer who specializes in animal
        behavior and care. With a deep love for cats, I enjoy sharing insights
        on feline companionship and wellness.
        <br />
        When i’m not writing, I spends time volunteering at my local animal
        shelter, helping cats find loving homes.
      </p>
    </div>
  );
}
{
  /**------------------------- */
}

function App() {
  return (
    <>
      <Navebar />
      <HeroSection />
    </>
  );
}

export default App;
