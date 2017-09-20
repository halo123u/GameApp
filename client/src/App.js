import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Redirect, Switch
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={()=><Login login={this.handleLoginSubmit} signup={this.handleSignUp}/>}/>
            <Route exact path='/dashboard' component={Dashboard}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
