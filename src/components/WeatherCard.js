import React from 'react';
import moment from "moment";

const WeatherCard  = ({forecast}) => {
    
    const cardList = forecast.forecastday.map(d => {
        var date = moment(d.date);
    
        return (
            <div className="card" key={date}>
                <img className="card-img-top" src={d.day.condition.icon} alt="weather status"/>               
                <div className="card-body justify-content-center">
                    <div className="mb-3">
                        <h5 className="card-title">{date.format("dddd")}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{date.format("MMMM Do")}</h6>
                    </div>
                    <p className="card-text font-weight-bold mb-2">Avg: {d.day.avgtemp_c}&#176;C</p>
                    <p className="card-text">Max: {d.day.maxtemp_c}&#176;C</p>
                    <p className="card-text">Min: {d.day.mintemp_c}&#176;C</p>
                </div>
            </div>
        )
    })

    return (
     <div className="d-flex justify-content-around">
        {cardList}
     </div>
    )  
}

export default WeatherCard;