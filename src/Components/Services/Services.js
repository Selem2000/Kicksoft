import React from "react";
import "./service.css";
import li1 from "../../Images/1.png";
import li2 from "../../Images/2.png";
import li3 from "../../Images/3.png";

const Services = () => {
  return (
    <div className="dark service">
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <h2>What we do</h2>
      <p>
        Our team of passionate game designers and <br />
        developers strive to create excellent games{" "}
      </p>
      <p>
        {" "}
        <b>About our games:</b>
        <br />
        provide great entertainment to the players <br />
        Tell rich and complex stories
        <br />
        Make the player think about different solutions.
      </p>
      <div className="serv">
        <div className="list">
          <img src={li1} alt="logo" />
          <h3>Fast work</h3>
        </div>
        <div className="list">
          <img src={li2} alt="logo" />
          <h3>Innovation & creativity</h3>
        </div>
        <div className="list">
          <img src={li3} alt="logo" />
          <h3>Excellent game quality</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
