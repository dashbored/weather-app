import React, { Component } from 'react'

export default class SearchCountry extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
            <div className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search"/>
                <button className="btn">Search</button>
            </div>
        </form>
      </div>
    )
  }
}
