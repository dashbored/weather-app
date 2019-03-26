import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Forecast from "./components/Forecast"

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="border">
          <Header />
          <Forecast />
        </div>
      </div>
    );
  }
}

export default App;
