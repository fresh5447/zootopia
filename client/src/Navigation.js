import React from 'react';
import { Link } from 'react-router';

var NavBar = function(props){
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Zootopia</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/animals">Animals</Link></li>
            <li><Link to="/post">Post</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;