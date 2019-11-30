import React, {Component} from 'react';
import "./ContactButton.css";

class ContactButton extends Component {
render() {
    return (
        <div className="contactBtnContainer">
            <button className="contactButton" type="contactButton">Submit</button>
        </div>
    )
}
}
export default ContactButton;