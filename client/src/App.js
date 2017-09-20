import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Redirect, Switch
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(){
    super();
    this.state ={
      redirect :false,
      currentPage: '/',
      userId : null,
      auth : false,
      email : null,
      token  :null
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token');
    if(token){
    let header = { 'x-auth' : token };
    axios.get('/users/me',{ headers : header }).then( res=>{
      console.log(res);
      this.setState({
        auth: res.data.auth,
        userId : res.data.user._id,
        email : res.data.user.email,
        token : token,
        redirect: true,
        currentPage: '/dashboard'
      });
    }).catch(err=>{
      console.log(err);
    });
    }
  }

  componentWillUpdate = (prevState, nextState) => {
		if(nextState.redirect){
			this.setState({
				redirect: false,
				currentPage: '/'
			});
			return true;
		}else{
			return false
		}
  }
  
  handleNav = (currentPage, redirect) => {
    this.setState({
      redirect,
      currentPage
    });
  }

  handleSignUp = (e, email, password)=>{
    e.preventDefault();
    console.log(email, password);
    axios.post('/users',{
      email,
      password 
    }).then(res => {
      console.log(res);
      this.setState({
        auth: res.data.auth,
        userId : res.data.user._id,
        email : res.data.user.email,
        token : res.headers['x-auth'],
        redirect: true,
        currentPage: '/dashboard'  
      },()=>{
        localStorage.setItem('token',res.headers[`x-auth`]);
      });
    }).catch(err=>{
      console.log(err);
    });
  }
  

  handleLoginSubmit = (e,email, password)=>{
    e.preventDefault();
    axios.post('/users/login',{
      email,
      password 
    }).then(res => {
      console.log(res);
      this.setState({
        auth: res.data.auth,
        userId : res.data.user._id,
        email : res.data.user.email, 
        token : res.headers['x-auth'],
        redirect :true,
        currentPage: '/dashboard' 
      });
      console.log(res.headers['x-auth']);
      localStorage.setItem('token',res.headers[`x-auth`]);
    }).catch(err=>{
      console.log(err);
    });
  }
  handleLogOut = ()=>{
    let token = localStorage.getItem('token');
    let header = { 'x-auth' : token };
    axios.delete('/users/me/token',{headers : header} ).then(res=>{
      console.log(res)
      this.setState({
        auth: false,
        userId : null,
        email : null, 
        token : null,
        redirect: true,
        currentPage: '/'
      })
      localStorage.removeItem('token');
    }).catch(err=>{
      console.log(err);
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar handleNav={this.handleNav} auth={this.state.auth} userId={this.state.userId} handlelogout={this.handleLogOut}/>
          <div className="pageBody">
            {this.state.redirect ? (<Redirect to={`${this.state.currentPage}`}/>): null}    
            <Switch>
              <Route exact path='/' component={()=><Login login={this.handleLoginSubmit} signup={this.handleSignUp}/>}/>
              <Route exact path='/dashboard' component={Dashboard}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
