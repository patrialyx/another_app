import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Profile from './Profile'
import Org from './Org'
import Donor from './Donor'



import { AuthProvider } from '../contexts/AuthContext';

import Buy from './Buy'
class App extends Component {
  render() {
    return (
      <AuthProvider>
      <Router>
        <div className="bkgrd">
          <div className="container-fluid mt-5">
            <div className="row">
              <main role="main" className="col-lg-12 d-flex text-center">
                <div className="content mr-auto ml-auto">  
                <div className="theseWords">
                  <h1>TRAZIBLE</h1>
                  <p>Transparent, trustworthy, traceable.</p>
                </div>
          
                  <Routes>
                    <Route exact path ='/' element={<Home/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/org' element={<Org/>}/>
                    <Route path='/donor' element={<Donor/>}/>
                    <Route path='/buy' element={<Buy/>}/>
                  </Routes>
            
                </div>
              </main>
            </div>
          </div>
        </div>
      </Router>
      </AuthProvider>
    );
  }
}

export default App;