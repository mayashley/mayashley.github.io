import React from 'react';
import Navbar from "./components/navigation/Navbar";
import "./App.css";
import ContactForm from './components/contactPage/ContactForm';


function App() {
  return (
    <div className="bodyContainer">
  <Navbar/>
  <ContactForm/>
  </div>
  );
}

export default App;
