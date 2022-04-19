import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

class Navbar extends Component {
  
  render() {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-10 col-md-1 mr-0"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Trazible
          </a>
        </nav>
    );
  }
}

export default Navbar;