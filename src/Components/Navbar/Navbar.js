import React from "react";
import "./navbar.css";
import logo from "../../Images/Logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <ul>
        <li>
          <a href="#home">get started</a>
        </li>
        <li>
          <a href="#about">about us</a>
        </li>
        <li>
          <a href="#product">our projects</a>
        </li>
        <li>
          <a href="#team">our team</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
