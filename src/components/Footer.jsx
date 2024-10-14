import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </p>
      <p>Developed by Janhavi Dahatonde</p>
      <p>
        Powered by{" "}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          React.js
        </a>
      </p>
    </footer>
  );
};

export default Footer;
