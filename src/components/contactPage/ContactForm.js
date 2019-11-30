import React, { Component } from "react";
import "./ContactForm.css"
import ContactButton from "./ContactButton";

class ContactForm extends Component {
  render() {
    return (
      <div className="contactInfo">
      <p>Contact Me</p>
      <div>
      <form >
      <label>First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your first name.." />
      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
  
  
      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" />
  
  
      <label>Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
      <ContactButton/>
      </form>
      </div>
      </div>
    );
  }
}

export default ContactForm;