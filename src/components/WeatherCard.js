import React from 'react';
import moment from "moment";

const WeatherCard  = ({forecast}) => {
    const cardList = forecast.map(day => {
        var date = moment(day.date);
    
        return (
            <div className="card" key={day.id}>
                <img className="card-img-top" src={day.condition.icon} alt="Card cap"/>
               
                <div className="card-body justify-content-center">
                    <div className="mb-3">
                    <h5 className="card-title">{date.format("dddd")}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{date.format("MMMM Do")}</h6>
                    </div>
                    <p className="card-text">Max: {day.maxtemp}&#176;C</p>
                    <p className="card-text">Avg: {day.temp}&#176;C</p>
                    <p className="card-text">Min: {day.mintemp}&#176;C</p>
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