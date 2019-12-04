import React, { Component } from "react";
import "./ContactForm.scss";
import emailjs from "emailjs-com";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailSent: false,
      emailError: null
    };
  }
  sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        e.target,
        process.env.REACT_APP_EMAILJS_USERID
      )
      .then(
        result => {
          console.log(result.text);
          this.setState({
            emailSent: true
          });
        },
        error => {
          console.log(error.text);
          this.setState({
            emailError: error.text
          });
        }
      );
  };

  render() {
    const { emailSent, emailError } = this.state;
    return (
      <div className="contactInfo">
       
        {emailError ? (
          <div>
            <p>{emailError}</p>
          </div>
        ) : (
          <div>
            {emailSent ? (
              <div className="emailSuccess">
                <h1>Thank You!</h1>
                <p>Your Email has been sent.</p>
              </div>
            ) : (
              <div>
              <p>Contact Me</p>
              <form onSubmit={this.sendEmail}>
                <label>First Name</label>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your first name.."
                  required
                />
                <label>Last Name</label>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                  required
                />

                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />

                <label>Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  required
                ></textarea>
                <input className="contactMe" type="submit" value="Send" />
              </form>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default ContactForm;
