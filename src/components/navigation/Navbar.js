import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import "./Navbar.css";
import LogoNav from "./LogoNav";

class Navbar extends Component {
  render() {
    return (
      <nav className="navContainer">
        <div className="logo">
          <LogoNav />
        </div>
        <div className="navbtn">
          <Link to="/projects">
            <NavButton title="Projects" />
          </Link>

          <Link to="/resume">
            <NavButton title="Resume" />
          </Link>

          <Link to="/contact">
            <NavButton title="Contact" />
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
