import React from "react";
import moment from "moment";

const Location = ({ props }) => {
  const { location, current } = props;
  var time = moment(location.localtime).format("kk:mm");
  return (
    <div className="mr-auto">
        <div className="fixed-width">
        <span className="h3">{location.name}</span>
        </div>
      <div>
        <img
          className="img-responsive"
          src={current.condition.icon}
          alt="sunny"
        />
        <span className="h4 mr-4">{current.temp_c}&#176;C</span>
        <span className="h4">{time}</span>
      </div>
    </div>
  );
};

export default Location;
