import React, { Component } from 'react'
import "./Forecast.css";

export default class Forecast extends Component {
  render() {
    return (
      <div className="">
        <div className="card">
        <img className="card-img-top" src="//cdn.apixu.com/weather/64x64/day/116.png" alt="Card cap"/>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
      </div>
    )
  }
}
