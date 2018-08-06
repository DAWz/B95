import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h2 style={{fontWeight: '400', fontSize: '20px'}}>THE WORLD LEADER IN ONLINE DUCK RELATED SERVICES</h2>
        <div style={{height: '2000px'}}>

        </div>
        <footer style={{color: 'white'}}>Copyright &copy; Moonbird95 Tech 2018</footer>
      </React.Fragment>
    );
  }
}

export default App;
