import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
// import SideNav from "./components/navigation/SideNav";
import "./App.scss";
import ContactForm from "./components/contactPage/ContactForm";
import Projects from "./components/ProjectsPage/Projects";
import AboutMe from "./components/AboutPage/AboutMe";

function App() {
  return (
    <Router>
      <div className="bodyContainer">
        <Navbar />
        {/* <SideNav/> */}
        <Switch>
          <Route path="/contact" component={ContactForm} />
          <Route path="/about" component={AboutMe} />
          <Route path="/" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
