import React, { Component } from 'react'
import Location from "./Location"
import SearchCountry from "./SearchCountry"
import { connect } from "react-redux";

class Header extends Component { 
    render() {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
              <Location props = {this.props}/>
              <SearchCountry/>
            </div>
          </nav>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
      location: state.location,
      current: state.current
  }
}

export default connect(mapStateToProps)(Header);
