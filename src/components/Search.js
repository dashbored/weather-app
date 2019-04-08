import React, { Component } from "react";
import { connect } from "react-redux";

class Search extends Component {
  state = {
    city: "",
    hasError: false
  };

  handleSubmit = async e => {
    e.preventDefault();

    if (this.state.city) {
      var promise = await fetch(
        "http://api.apixu.com/v1/forecast.json?key=" +
          this.props.api_key +
          "&q=" +
          this.state.city +
          "&days=5"
      );
      var result = await promise.json();
      console.log(result);
      if (!result.error) {
        this.props.update(result);
      } else {
        this.setState({
          hasError: true
        });
        this.props.error(result.error);
      }
    }
  };

  handleChange = e => {
    this.setState({
      city: e.target.value,
      hasError: false
    });
  };

  render() {
    let inputClass = "form-control mr-sm-2";
    if (this.state.hasError) {
      inputClass += " text-danger invalid-border";
    }

    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <div className="form-inline my-2 my-lg-0">
            <input
              className={inputClass}
              type="search"
              id="city"
              onChange={this.handleChange}
            />
            <button className="btn">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    update: weatherState => {
      dispatch({ type: "UPDATE", weatherState: weatherState });
    },
    error: error => [dispatch({ type: "ERROR", error: error })]
  };
};

const mapStateToProps = state => {
  return {
    api_key: state.api_key
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
