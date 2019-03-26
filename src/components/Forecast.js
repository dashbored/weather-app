import React, { Component } from 'react'
import "./Forecast.css";
import { connect } from "react-redux";
import WeatherCard from "./WeatherCard";

class Forecast extends Component {

  render() {
      console.log(this.props)
    return (
      <div >
        <WeatherCard forecast= {this.props.forecast} />
        {/* <div className="card">
        <img className="card-img-top" src="//cdn.apixu.com/weather/64x64/day/116.png" alt="Card cap"/>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card">
        <img className="card-img-top" src="//cdn.apixu.com/weather/64x64/day/116.png" alt="Card cap"/>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card">
        <img className="card-img-top" src="//cdn.apixu.com/weather/64x64/day/116.png" alt="Card cap"/>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card">
        <img className="card-img-top" src="//cdn.apixu.com/weather/64x64/day/116.png" alt="Card cap"/>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
        <div className="card">
        <img className="card-img-top" src="//cdn.apixu.com/weather/64x64/day/116.png" alt="Card cap"/>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div> */}
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
