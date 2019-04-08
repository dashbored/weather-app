import React, { Component } from "react";
import FavoriteList from "./FavoriteList";
import FavoriteButton from "./FavoriteButton";
import { connect } from "react-redux";

class FavoriteSection extends Component {
  handleClick = async e => {
    var promise = await fetch(
      "http://api.apixu.com/v1/forecast.json?key=" +
        this.props.api_key +
        "&q=" +
        e.target.name +
        "&days=5"
    );
    var result = await promise.json();
    this.props.update(result);
  };

  render() {
    return (
      <div>
        <FavoriteButton />
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle mx-2"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Favourites 
          </button>
          <div
            onClick={this.handleClick}
            className="dropdown-menu"
            aria-labelledby="dropdownMenuButton"
          >
            <FavoriteList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    api_key: state.api_key
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: weatherState => {
      dispatch({ type: "UPDATE", weatherState: weatherState });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteSection);
