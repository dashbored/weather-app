import React, { Component } from 'react'
import "./Forecast.css";
import WeatherCard from "./WeatherCard";
import { connect } from "react-redux";

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
