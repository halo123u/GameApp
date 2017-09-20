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
                    <li onClick={this.props.auth ? ()=>this.props.handleNav('/dashboard', true) : ()=>this.props.handleNav('/', true) }><a>LOGO</a></li>
                    {!this.props.auth ? <li onClick={()=>this.props.handleNav('/', true)}><a >login</a></li> : null}
                    {this.props.auth ? <li onClick={this.props.handlelogout}><a >Log Out</a></li>:null}
                </ul>
            </div>
        </nav>)
    }
}

export default Navbar;