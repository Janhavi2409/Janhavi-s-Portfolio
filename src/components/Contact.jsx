import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-contact">
      <div className="heading">Contact Me &#128231;</div>
      <div className="card-contact">
        <form>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required rows="4" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
