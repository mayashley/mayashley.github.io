import React, { Component } from "react";
import SocialLinks from "./SocialLinks";
// import ImageGallery from "./ImageGallery";
import "./AboutMe.scss";


class AboutMe extends Component {
  render() {
    return (
      <div className="mainContainer">
      <div className="aboutMeContainer">
        <div className="aboutMeInfo">
          <div className="heading">
          <h1>about me...</h1>
          </div>
          <div className="subHeading">
          <h3>I'm a web developer living in Columbus,Ohio.</h3>
          </div>
          <div className="paragraphContainer">
            <p>
I enjoy solving problems and learning new crafts. When I graduated
 high school in 2011, I began chasing my dream of becoming a
 photographer, which turned into more then I could have ever hoped
 for. From 2011 to 2019 I progressed from a novice to a
 professional with regular clients, magazine publications, and
 runway experience. In early 2019 I began to crave a change that
 would allow me to further explore my creative side, expand my
 problem solving skills, and help me gain a more secure financial
 future. After some trial and error I discovered my love for code.
  In August 2019 I began my learning journey utilizing resources
 like: freeCodeCamp, Udemy, and good old-fashioned documentation.
Since then I've built projects with: HTML, CSS, JavaScript, and
 React. These days when I'm not coding you can find me spending
 time with my family, kayaking, taking a hike, or editing the
 occasional photo.
            </p>
            
          </div>
          <SocialLinks />
        </div>
      </div>
      {/* <ImageGallery/> */}
    </div>
    );
  }
}
export default AboutMe;
