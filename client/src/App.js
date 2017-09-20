import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Redirect, Switch
} from 'react-router-dom';

import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard/>
        
      </div>
    );
  }
}

export default App;
