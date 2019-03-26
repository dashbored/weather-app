import React from 'react';

const WeatherCard  = ({forecast}) => {
    console.log(forecast);
    const cardList = forecast.map(day => {
        return (
            <div className="card" key={day.id}>
                <img className="card-img-top" src={day.condition.icon} alt="Card cap"/>
               
                <div className="card-body">
                    <h5 className="card-title">{day.date}</h5>
                    <p className="card-text">max: {day.maxtemp}&#176;C</p>
                    <p className="card-text">min: {day.mintemp}&#176;C</p>
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