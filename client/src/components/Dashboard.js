import React, { Component } from 'react';
import SingleGame from './SingleGame';
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
            this.setState({
                apiData : res.data,
                dataLoaded :true
            });
        })
    }
    render(){
        if(this.state.dataLoaded){
            return(
                <div>
                    <h1>Top Games</h1>
                    <div className="gameContainer">
                        {this.state.apiData.map(game=>{
                            return <SingleGame key={game.id} gameData={game}/>
                        })}
                    </div>
                </div>
            )
        }
        else{
            return(
                <h1>Loading...........</h1>
            )
        }
    }
}

export default DashBoard;