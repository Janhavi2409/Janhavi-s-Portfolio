import React from "react";
import "./Projects.css";

const Projects = () => {
  const project = [
    {
      link: "https://dypcoe-techfest.vercel.app/",
      name: "College Tech Fest Website",
      description:
        "The College Tech Fest Website is a dynamic platform showcasing D. Y. Patil College of Engineering's annual tech festival, featuring event schedules, speaker information, and participant registration, all with a responsive and user-friendly design.",
    },
    {
      link: "https://frontend-bhrigu.netlify.app/",
      name: "Bhrigu : Astrological Chatbot",
      description:
        "Bhrigu is an astrological chatbot that provides users with personalized astrological insights and guidance through an interactive chat interface, enhancing the user experience with intuitive design and real-time responses.",
    },
    {
      link: "/",
      name: "Dummy Website",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    },
  ];

  return (
    <div className="main-project">
      <div className="heading">My Projects &#128187;</div>
      <div className="projects">
        {project.map((proj, index) => (
          <div className="card" key={index}>
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank">
              <button className="explore">Explore</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
