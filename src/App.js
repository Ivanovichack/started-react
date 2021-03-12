import React, { Component } from "react";
import ContactManager from './ContactManager/ContactManager.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
const contactos = ["Luis Ivanovich", "Javier Garcia", "Andres Mark"];
class App extends Component {
  render() {
    return (      
      <div className="container">
        <h1 className="end">Main Component</h1>        
        <ContactManager data={contactos}/>
      </div>
      
    );
  }
}

export default App;
