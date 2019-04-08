import React, { Component } from "react";
import { connect } from "react-redux";

class FavoriteList extends Component {
  render() {
    let favouriteCities;
    if (this.props.favourites.length) {
      favouriteCities = this.props.favourites.map(city => {
        return (
          <button name={city} className="btn dropdown-item" key={city}>
            {city}
          </button>
        );
      });
    }
    return <React.Fragment>{favouriteCities}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites
  };
};

export default connect(mapStateToProps)(FavoriteList);
