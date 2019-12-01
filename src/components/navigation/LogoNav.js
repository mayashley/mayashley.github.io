import React, { Component } from 'react'
import "./LogoNav.css";
import Typical from 'react-typical'

class LogoNav extends Component {
  render () {
    return (
      <Typical
      className="LogoNav"
        steps={['Hello,', 1000, "I'm Ashley", 1000, 'and this is my portfolio...', 1000, 'Ashley May', 500]}
        loop={1}
        wrapper="p"
      />
    )
  }
}
export default LogoNav;