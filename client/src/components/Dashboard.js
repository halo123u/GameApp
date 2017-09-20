import React, { Component } from 'react';
import axios from 'axios';  

class DashBoard extends Component{
    constructor(props){
        super(props);
        this.state = {
            apiData: null,
            dataLoaded : false
        }
    }
    componentDidMount() {
        let header = { 'x-auth' : this.props.token };
        axios.get('/gameApi/popular',{headers : header} ).then(res=>{
            console.log(res);
        })
    }
    render(){
        return(
            <h1>hello this is the DashBoard</h1>
        )
    }
}

export default DashBoard;