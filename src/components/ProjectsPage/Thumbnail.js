import React, { Component } from "react";
import "./Thumbnail.scss";
import { Animated } from "react-animated-css";

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = { flipped: null, animateIn: false };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        animateIn: true
      });
    }, 1000 * this.props.index);
  }
  mouseOut = () => {
    // console.log("Mouse out!!!");
    this.setState({ flipped: false });
  };

  mouseOver = () => {
    // console.log("Mouse over!!!");
    this.setState({ flipped: true });
  };

  render() {
    const { link, image, logo } = this.props;
    const { animateIn } = this.state;
    
    // if (!animateIn) {
    //   return null;
    // }
    return (
      <Animated
        animationIn="slideInLeft"
        animationOut="wobble"
        animateOnMount={false}
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={animateIn}
        className="animateContainer"
      >
        <div className="thumbContainer">
          <a href={link}>
            <div
              className="projectThumbImg"
              onMouseOut={() => this.mouseOut()}
              onMouseOver={() => this.mouseOver()}
            >
              {this.state.flipped && (
                <div className="hoverTop">
                  {logo.includes("javaScript") && 
                  <div className="aboutThumbImg">
                    <i className="fab fa-js"></i>
                  </div>
                }
                {logo.includes("react") &&
                  <div className="aboutThumbImg">
                    <i className="fab fa-react"></i>
                  </div>
                  }
                  {logo.includes("html") &&
                  <div className="aboutThumbImg">
                    <i className="fab fa-html5"></i>
                  </div>
  }
  {logo.includes("css") &&
                  <div className="aboutThumbImg">
                    <i className="fab fa-css3-alt"></i>
                  </div>
  }
                </div>
              )}
              <img  className="image" src={image} alt="projects" />
            </div>
          </a>
        </div>
      </Animated>
    );
  }
}

export default Thumbnail;


