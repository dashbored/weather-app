import React, { Component } from 'react'
import "./Forecast.css";
import { connect } from "react-redux";
import WeatherCard from "./WeatherCard";

class Forecast extends Component {

  render() {
      
    return (
      <div >
        <WeatherCard forecast= {this.props.forecast} /> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        forecast: state.forecast
    }
}

export default connect(mapStateToProps)(Forecast);
