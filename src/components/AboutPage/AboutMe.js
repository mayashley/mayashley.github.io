import React, {Component} from 'react';
import SocialLinks from "./SocialLinks";
import "./AboutMe.css";


class AboutMe extends Component {
    render() {
        return (
            <div>
                <h1>Wow,a whole page just about me!</h1>
                <SocialLinks/>
            </div>
        )
    }
}
export default AboutMe;