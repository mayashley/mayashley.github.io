import React, { Component } from "react";
import "./NavButton.scss";

class NavButton extends Component {
  render() {
    return (
      <div>
        <button className="button" type="button">
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default NavButton;
