import React, { Component } from 'react';

class SingleGame extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>{this.props.gameData.name}</h2>
                <img className="coverArt" src={this.props.gameData.cover.url}/>
                <p>{this.props.gameData.summary}</p>
                <a href={this.props.gameData.url} target="_blank" >More Info</a>
            </div>
        )
    }
}

export default SingleGame;