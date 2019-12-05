import React, { Component } from "react";
import "./Thumbnail.scss";
import {Animated} from "react-animated-css";

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
    const { link, image } = this.props;
    const { animateIn } = this.state;
    console.log(this.props);
    // if (!animateIn) {
    //   return null;
    // }
    return (
      <Animated animationIn="slideInLeft" animationOut="wobble" animateOnMount={false} animationInDuration={1000} animationOutDuration={1000} isVisible={animateIn} className="animateContainer">
      <div className="thumbContainer">
        <a href={link}>
          <div
            className="projectThumbImg"
            onMouseOut={() => this.mouseOut()}
            onMouseOver={() => this.mouseOver()}
          >
            {this.state.flipped && (
              <div className="hoverTop">
                <div className="aboutThumbImg">
                  <p>hello</p>
                </div>
              </div>
            )}
            <img src={image} alt="projects" />
          </div>
        </a>
      </div>
      </Animated>
    );
  }
}

export default Thumbnail;
