import React, { Component } from "react";
import "./SocialLinks.scss";

class SocialLinks extends Component {
  render() {
    return (
      <div className="socialLinks">
        <div className="containLinks">
          <div className="links">
            <a href="https://www.linkedin.com/in/ashley-may-a145a4164/" target="_blank"  rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="links">
            <a href="https://github.com/mayashley" target="_blank"  rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
          <div className="links">
            <a href="https://www.freecodecamp.org/fcc214a97eb-4900-4876-9bed-3c4c00af75ba" target="_blank"  rel="noopener noreferrer">
            <i className="fab fa-free-code-camp"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default SocialLinks;
