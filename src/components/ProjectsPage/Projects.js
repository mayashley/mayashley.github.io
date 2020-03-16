import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import "./Projects.scss";

import appleLandingPage from "../../images/apple-clone.png";
import reactWeatherApp from "../../images/weatherAppReact.png";
import groceryApp from "../../images/groceryList.png";
import tmdbMovie from "../../images/tmdb-movie.png";
import beachSite from "../../images/beachesGatsbyProject.png";
import ferrelLandscape from "../../images/ferrelLandscapeImg.png";
import wikkiSearch from "../../images/wikkiSearchPage.png";

const projects = [
  {
    link: "https://beaches-travel.netlify.com",
    image: beachSite,
    title: "Beaches Travel Agency",
    logo: ["react", "html", "css"]
  },
  {
    link: "https://landscape-site.netlify.com",
    image: ferrelLandscape,
    title: "Ferrell Landscaping Company",
    logo: ["react", "html", "css"]
  },
  {
    link: "https://github.com/mayashley/tmdb-movies/tree/gh-pages",
    image: tmdbMovie,
    title: "tbd movies",
    logo: ["react", "html", "css"]
  },
  {
    link: "https://wikipedia-serch-project.netlify.com",
    image: wikkiSearch,
    title: "Wikipedia Search Page",
    logo: ["javaScript", "html", "css"]
  },
  {
    link: "https://github.com/mayashley/Apple-Clone",
    image: appleLandingPage,
    title: "apple landing page",
    logo: ["javaScript", "html", "css"]
  },
  {
    link: "https://github.com/mayashley/to-do-list",
    image: groceryApp,
    title: "to do list",
    logo: ["html", "react", "css"]
  },
  {
    link: "https://github.com/mayashley/my-react-weather-app/tree/gh-pages",
    image: reactWeatherApp,
    title: "react weather app",
    logo: ["html", "react", "css"]
  }
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
              index={index + 1}
            />
          );
        })}
      </div>
    );
  }
}

export default Projects;
