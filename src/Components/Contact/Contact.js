import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact" className="white contact">
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <span class="cube-dark"></span>
      <div className="content">
        <h2>Contact</h2>
        <p>
          Need to get in touch with us ? <br />
          You’re more than welcome ! <br />
        </p>
        <p>
          Fill this form or send us <br />
          an e-mail on this address: <br />
          <b className="gmail">Kicksoft.tn@gmail.com</b>
        </p>
      </div>
      <div className="form">
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Message
          <textarea type="text" name="message" />
        </label>
        <button className="submit">Send</button>
      </div>
    </div>
  );
};

export default Contact;
