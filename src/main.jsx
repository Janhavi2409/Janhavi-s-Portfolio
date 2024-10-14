import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ReturnButton from "./components/ReturnButton.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <ReturnButton />
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="contact">
      <Contact />
    </section>
    <Footer />
  </StrictMode>
);
