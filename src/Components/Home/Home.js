import React from "react";
import "./Home.css";
import logo from "../../Images/logo.png";

const Home = () => {
  return (
    <div id="home" className="home">
      <img src={logo} alt="logo" />
      <a className="btn" href="#about">
        Learn more
      </a>
    </div>
  );
};

export default Home;
