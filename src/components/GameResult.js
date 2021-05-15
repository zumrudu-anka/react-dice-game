import React, { Component } from 'react'

export default class GameResult extends Component {
    render() {
        const {yourChoice, AIChoice } = this.props.results;
        if(yourChoice > AIChoice){
            return <h1 className="won">You Won!</h1>
        }
        else if(AIChoice > yourChoice){
            return <h1 className="lost">You Lost!</h1>
        }
        else if(AIChoice === yourChoice){
            return <h1 className="draw">Draw</h1>
        }
        else{
            return null
        }
    }
}
