import React from "react";
import Typed from "typed.js";
import "./Header.css";
import Image from "../assets/JanhaviDahatonde.jpg";
import Resume from "../assets/JanhaviUpdatedResume.pdf";

const Header = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm a Full Stack Web Developer"],
      typeSpeed: 50,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="header-container" id="header">
      <header>
        <div className="nav-links">
          <a href="#home" onClick={() => handleScroll("root")}>
            Home
          </a>
          <a href="#about" onClick={() => handleScroll("about")}>
            About
          </a>
          <a href="#projects" onClick={() => handleScroll("projects")}>
            Projects
          </a>
          <a href="#contact" onClick={() => handleScroll("contact")}>
            Contact
          </a>
        </div>
        <div className="main">
          <div className="left">
            <div className="intro">
              Hey &#128075; I am Janhavi Dahatonde,
              <br />
              <span ref={el} />
            </div>
            <div className="file">
              <a href={Resume} download>
                <button className="cv-button">Download CV</button>
              </a>
            </div>
          </div>
          <div className="photo">
            <img className="image" height={250} src={Image} alt="Janhavi" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
