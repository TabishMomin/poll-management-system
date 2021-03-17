import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <html>
        <body>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark" size="500">
            <a className="navbar-brand">Poll System</a>
            
            <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/homepages/home">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" exact to="/homepages/about">
                About Us
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" exact to="/homepages/contact">
                Contacts Us
              </NavLink>
            </li>
            
          </ul>
        </div>
        
      </nav> 
      </body>
      </html> );
  }
}

export default Navbar;


     