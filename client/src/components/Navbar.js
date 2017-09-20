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
                <li onClick={()=>this.props.handleNav('/dashboard', true)}>LOGO</li>
                <li onClick={()=>this.props.handleNav('/', true)}>login</li>
            </ul>
        </div>
    </nav>)
    }
}

export default Navbar;