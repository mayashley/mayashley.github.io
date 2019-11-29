import React, { Component } from "react";
import NavButton from "./NavButton";
import "./Navbar.css";
import LogoNav from "./LogoNav";

class Navbar extends Component {
  render() {
    return (
      <nav className="navContainer">
          <div className="logo">
        <LogoNav/>
        </div>
        <div className="navbtn">
        <NavButton  title="Projects"/>
        <NavButton  title="Resume"/>
        <NavButton  title="Contact"/>
        </div>
</nav>

    );
  }
}

export default Navbar;
