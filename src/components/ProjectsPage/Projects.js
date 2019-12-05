import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import "./Projects.scss";

import christmasImage from "../../images/reactCountdownImg.png";


const projects = [
  
  {
    link: "",
    image: christmasImage,
    title: "",
    category: " "
  },
  {
    link: "https://mayashley.github.io/christmas-counter/",
    image: christmasImage,
    title: "christmas countdown",
    category: " javascript"
  },
  {
    link: "https://mayashley.github.io/christmas-counter/",
    image: christmasImage,
    title: "christmas countdown",
    category: " javascript"
  },
  {
    link: "https://mayashley.github.io/christmas-counter/",
    image: christmasImage,
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
              index={index +1}
            />
           
          );
        })}
      </div>
     
    );
  }
}

export default Projects;
