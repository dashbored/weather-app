import React, { Component } from "react";
import Location from "./Location";
import Search from "./Search";
import { connect } from "react-redux";
import FavoriteSection from "./FavoriteSection";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <Location props={this.props} />
            <FavoriteSection />
            <Search />
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    location: state.location,
    current: state.current
  };
};

export default connect(mapStateToProps)(Header);
