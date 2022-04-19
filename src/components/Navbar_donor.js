import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

class Navbar_donor extends Component {
  
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

          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <medium className="text-white">
                <span id="account">
                <Link to={'/donor'} className="nav-link">Plant a Seed</Link>
                </span>
              </medium>
            </li>
          </ul>

          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <medium className="text-white">
                <span id="account">
                <Link to={'/profile'} className="nav-link">My Profile</Link>
                </span>
              </medium>
            </li>
          </ul>

          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <large className="text-white">
                <span id="account">
                  Account: {this.props.account}
                </span>
              </large>
            </li>
          </ul>
        </nav>
    );
  }
}

export default Navbar_donor;