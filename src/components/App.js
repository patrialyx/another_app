import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './Home';
import Donor from './Donor'
import Profile from './Profile'
import Org from './Org'
import Login from './Login'
import Signup from '../backend/Signup';
import { AuthProvider } from '../contexts/AuthContext';
import ForgotPassword from './ForgotPassword';
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
                    <Route path='/donor' element={<Donor/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/org' element={<Org/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/forgot-password' element={<ForgotPassword/>}/>
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