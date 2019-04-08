import React, { Component } from "react";
import { connect } from "react-redux";
import {withCookies } from "react-cookie";

class FavoriteButton extends Component {
  state = {
    isFavourited: false
  };

  componentDidMount = async() => {
    let { cookies } = this.props;  
    if (cookies.cookies.name) { 
        let favourites = JSON.parse(cookies.cookies.name);
        await this.props.updateFavourites(favourites);
        let value = this.props.favourites.includes(this.props.locationName);
        this.setState({
            isFavourited: value
        });    
    }
  };

  componentDidUpdate = async(prevProps) => {
      if (prevProps !== this.props) {
        let value = this.props.favourites.includes(this.props.locationName);
        this.setState({
            isFavourited: value
        });  
      }
  }


  handleClick = e => {
    let { cookies } = this.props;


    if (!this.state.isFavourited) {
      let favourites = [...this.props.favourites, this.props.locationName];
      cookies.set("name", JSON.stringify(favourites), {
        path: "/"
      });
      this.setState({
        isFavourited: true
      });
      this.props.updateFavourites(favourites);
    } else {
      let newFavourites = this.props.favourites.filter(city => {
        return city !== this.props.locationName;
      });
      cookies.set("name", JSON.stringify(newFavourites), { path: "/" });
      this.props.updateFavourites(newFavourites);
    }
    //   setCookie("name", e.target.value, {path: '/'});
  };

  render() {
    // if(this.props.favourites.includes(this.props.locationName)) {

    // } ? (
    //   <i className="material-icons">favorite</i>
    // ) : (
    //   <i className="material-icons">favorite_border</i>
    // );
    return (
      <div>
        <button className="btn" onClick={this.handleClick}>
          {this.state.isFavourited ? (
            <i className="material-icons">favorite</i>
          ) : (
            <i className="material-icons">favorite_border</i>
          )}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
   
  return {
    favourites: state.favourites,
    locationName: state.location.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateFavourites: favourites => {
      dispatch({ type: "UPDATE_FAVOURITES", favourites: favourites });
    }
  };
};

export default withCookies(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FavoriteButton)
);
