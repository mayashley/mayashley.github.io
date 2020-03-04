import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import "./Projects.scss";

import appleLandingPage from "../../images/apple-clone.png";
import reactWeatherApp from "../../images/weatherAppReact.png";
import groceryApp from "../../images/groceryList.png";
import tmdbMovie from "../../images/tmdb-movie.png";

const projects = [
  
  {
    link: "https://github.com/mayashley/tmdb-movies/tree/gh-pages",
    image: tmdbMovie,
    title: "christmas countdown",
    logo:["react", "html", "css"]
  },
  {
    link: "https://github.com/mayashley/Apple-Clone",
    image: appleLandingPage,
    title: "apple landing page",
    logo:["javaScript", "html", "css"]
  },
  {
    link: "https://github.com/mayashley/to-do-list",
    image: groceryApp,
    title: "christmas countdown",
    logo:[ "html", "react", "css"]
  },
  {
    link: "https://github.com/mayashley/my-react-weather-app/tree/gh-pages",
    image:reactWeatherApp ,
    title: "react weather app",
    logo:[ "html", "react", "css"]
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
