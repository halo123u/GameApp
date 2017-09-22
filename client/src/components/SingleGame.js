import React, { Component } from 'react';

class SingleGame extends Component{
    render(){
        return(
            <div className="Game">
                <h3>{this.props.gameData.name}</h3>
                <img className="coverArt" src={this.props.gameData.cover.url}/>
                <p>{this.props.gameData.summary}</p>
                <a href={this.props.gameData.url} target="_blank" >More Info</a>
            </div>
        )
    }
}

export default SingleGame;