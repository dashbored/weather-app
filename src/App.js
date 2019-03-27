import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Forecast from "./components/Forecast";
import { connect } from "react-redux";

class App extends Component {
  async componentDidMount() {
    var promise = await fetch("http://api.apixu.com/v1/forecast.json?key=" + this.props.api_key
    + "&q=" + this.props.location.name
    + "&days=5");
    var result = await promise.json();
    this.props.update(result)
  }

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

const mapPropsToState = (state) => {
  return {
    api_key: state.api_key,
    location: state.location
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (weatherState) => { dispatch({type: 'UPDATE', weatherState: weatherState})    } 
  }
}

export default connect(mapPropsToState, mapDispatchToProps)(App);
