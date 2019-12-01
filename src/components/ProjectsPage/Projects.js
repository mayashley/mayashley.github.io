import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import "./Projects.css";
import christmasImage from "../../images/reactCountdownImg.png";


const projects = [
  {
    link: "https://mayashley.github.io/christmas-counter/",
    image: christmasImage,
    title: "christmas countdown",
    category: " javascript"
  },
  {
    link: "https://mayashley.github.io/christmas-counter/",
    image: "../../images/christmascountdown.png",
    title: "christmas countdown",
    category: " javascript"
  },
  {
    link: "https://mayashley.github.io/christmas-counter/",
    image: "../../images/christmascountdown.png",
    title: "christmas countdown",
    category: " javascript"
  },
  {
    link: "https://mayashley.github.io/christmas-counter/",
    image: "",
    title: "christmas countdown",
    category: " javascript"
  },
 
];

class Projects extends Component {
  render() {
    return (
      <div className="projectsContainer">
        {projects.map((projectCard, index) => {
          return (
            <Thumbnail
              key={index}
              link={projectCard.link}
              image={projectCard.image}
              title={projectCard.title}
              category={projectCard.category}
            />
          );
        })}
      </div>
    );
  }
}

export default Projects;
