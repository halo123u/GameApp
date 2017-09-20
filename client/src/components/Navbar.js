import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li className="nav-item" onClick={this.props.auth ? ()=>this.props.handleNav('/dashboard', true) : ()=>this.props.handleNav('/', true) }>LOGO</li>
                <li className="nav-item" onClick={()=>this.props.handleNav('/', true)}>login</li>
                {this.props.auth ? <li className="nav-item" onClick={this.props.handlelogout}>Log Out</li>:null}
            </ul>
        </div>
    </nav>)
    }
}

export default Navbar;