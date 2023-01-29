import React from "react";
import cahrs from "../../Images/chars.png";

const Chars = () => {
  return (
    <div className="white">
      <h2 style={{ marginTop: "80px" }}>Characters</h2>
      <p>
        In Kayotica you will meet a whole lot of characters, each with his
        unique <br />
        personality and background. You will engage dialogues with them and try{" "}
        <br />
        to discover their motives !
      </p>
      <img src={cahrs} alt="characters" />
      <p>
        Our characters are not just original but they’re also animated so you{" "}
        <br />
        can feel them and live with them the full story !
      </p>
    </div>
  );
};

export default Chars;
