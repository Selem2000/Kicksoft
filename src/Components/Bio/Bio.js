import React from "react";
import "./bio.css";
import logo from "../../Images/Logo.svg";

const Bio = () => {
  return (
    <div id="about" className="white bio">
      <span class="cube-white"></span>
      <span class="cube-white"></span>
      <span class="cube-white"></span>
      <span class="cube-white"></span>
      <span class="cube-white"></span>
      <span class="cube-white"></span>
      <span class="cube-white"></span>
      <span class="cube-white"></span>
      <h2 className="title">Who we are</h2>
      <img src={logo} alt="logo" />
      <p>
        We are a unique self built startup with experts in different fields.
        <br id="bio-br" />
        We are the first company making visual novels in Tunisia and Africa
      </p>
    </div>
  );
};

export default Bio;
