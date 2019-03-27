import React, { Component } from 'react'

export default class SearchCountry extends Component {
  state = {
    city: ""
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    
  }

  handleChange = (e) => {
    this.setState( {
      city: e.target.value
    })
  }
  
  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
            <div className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" id="city" onChange={this.handleChange}/>
                <button className="btn">Search</button>
            </div>
        </form>
      </div>
    )
  }
}
