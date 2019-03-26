import React from 'react'
import Location from "./Location"
import SearchCountry from "./SearchCountry"

const Header = () => {
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <Location />
            <SearchCountry/>
          </div>
        </nav>
      </div>
    )
  
}

export default Header
