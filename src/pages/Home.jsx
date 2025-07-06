import React from "react";
import Navbar from "../componants/Navbar";
import About from "../componants/About";
import Contact from "../componants/Contact";
import Header from "../componants/Header";
import Project from "../componants/Project";
import Technology from "../componants/Technology";
import StarBackground from "../componants/StarBackground";

const HomePage = () => {
  return (
    <div className="relative">
      <StarBackground />
      <Navbar />
      <div className="absolute">
        <Header />
        <About />
        <Technology />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
