import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./components/navigation/Navbar";
import "./App.css";
import ContactForm from './components/contactPage/ContactForm';
import Projects from "./components/ProjectsPage/Projects";
import Resume from "./components/ResumePage/Resume";


function App() {
  return (
    <Router>
    <div className="bodyContainer">
      <Navbar />
      <Switch>
      <Route path="/contact" component={ContactForm} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
