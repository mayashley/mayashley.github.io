import React, { Component } from "react";
import "./ImageGallery.scss";
import image1 from "../../images/kayaking2.jpg";
import image2 from "../../images/familyHalloween.jpg";
import image3 from "../../images/christmasLights.jpg";
import image4 from "../../images/concerts.jpg";
import image5 from "../../images/theBeach.jpg";
import image6 from "../../images/out.jpg";

class ImageGallery extends Component {
  render() {
    return (
      <div className="imgContainer">
        <div className="innerImgContainer">
          <div className="images">
            <img src={image2} alt="" />
          </div>
          <div className="images">
            <img src={image1} alt="christmas" />
          </div>
          <div className="images">
            <img src={image3} alt="" />
          </div>
          <div className="images">
            <img src={image4} alt="" />
          </div>
          <div className="images">
            <img src={image5} alt="" />
          </div>
          <div className="images">
            <img src={image6} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
export default ImageGallery;
