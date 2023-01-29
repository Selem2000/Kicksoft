import React from "react";
import "./footer.css";
import kicksoft from "../../Images/kicksoft.png";
import facebook from "../../Images/facebook.png";
import LinkedIn from "../../Images/LinkedIn.png";
import Instagram from "../../Images/Instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-cont">
        <div className="companie">
          <img src={kicksoft} alt="kicksoft" />
          <h3>Tunisian game developement startup</h3>
        </div>
        <div className="social">
          <h1 className="folow">Follow us</h1>
          <div className="icon">
            <a href="#">
              <img src={LinkedIn} alt="LinkedIn" />
            </a>
            <a href="#">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
        </div>
        <ul className="link-foot">
          <li>
            <a href="#about">About us</a>
          </li>
          <li>
            <a href="#product">Our Projects</a>
          </li>
          <li>
            <a href="#team">Our Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <h3 className="copywrite">(C)Copyright.Kicksoft-2022</h3>
    </div>
  );
};

export default Footer;
