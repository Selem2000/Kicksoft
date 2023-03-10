import React from "react";
import kayotica from "../../Images/kayotica.png";

const Product = () => {
  return (
    <div id="product" className="dark">
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <h2 style={{ marginTop: "50px" }}>Visual novel</h2>
      <img id="kayotica" src={kayotica} alt="kayotica" />
      <p>
        kayotica is a drama thriller visual novel which is about bullying and
        violence in high school. <br id="bio-br" />
        The player will dive into a unique atmosphere filled with suspense,
        mystery and plot twists
      </p>
    </div>
  );
};

export default Product;
