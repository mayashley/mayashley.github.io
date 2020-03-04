import React, { Component } from "react";
import "./NavButton.scss";

class NavButton extends Component {
  render() {
    const {title} = this.props;
    return (
      <div>
        <button className="button" type="button">
          {title}
        </button>
      </div>
    );
  }
}

export default NavButton;
