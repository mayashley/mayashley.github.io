import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import "./Projects.scss";

import appleLandingPage from "../../images/apple-clone.png";
import reactWeatherApp from "../../images/weatherAppReact.png";
import groceryApp from "../../images/groceryList.png";
import hotNcold from "../../images/hot-n-cold.png";

const projects = [
  
  {
    link: "",
    image:reactWeatherApp ,
    title: "react weather app",
    logo:[ "html", "react", "css"]

  },
  {
    link: "",
    image: appleLandingPage,
    title: "apple landing page",
    logo:["javaScript", "html", "css"]
  },
  {
    link: "",
    image: groceryApp,
    title: "christmas countdown",
    logo:[ "html", "react", "css"]
  },
  {
    link: "",
    image: hotNcold,
    title: "christmas countdown",
    logo:["javaScript", "html", "css"]
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
              logo={projectCard.logo}
              index={index +1}
            />
           
          );
        })}
      </div>
     
    );
  }
}

export default Projects;
