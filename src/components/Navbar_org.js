import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

class Navbar_org extends Component {
  
  render() {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <large className="text-white">
                <span id="account">
                <Link to={'/'} className="nav-link">Trazible</Link>
                </span>
              </large>
            </li>
          </ul>
        
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <medium className="text-white">
                <span id="account">
                <Link to={'/org'} className="nav-link">List a project</Link>
                </span>
              </medium>
            </li>
          </ul>

        </nav>
    );
  }
}

export default Navbar_org;