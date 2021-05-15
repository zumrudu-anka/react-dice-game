import React, { Component } from 'react'

export default class Ranking extends Component {
    render() {
        const {yourChoice, AIChoice} = this.props;
        if(yourChoice > AIChoice){
            this.props.wins.push(1);
        }
        else if(AIChoice > yourChoice){
            this.props.losses.push(1);
        }
        else if(AIChoice === yourChoice){
            this.props.draws.push(1);
        }
        return(
            <div className = "rankingTable">
                <h2>
                    wins: {this.props.wins.length}  
                </h2>
                <h2>
                    losses: {this.props.losses.length}
                </h2>
                <h2>
                    draws:  {this.props.draws.length}
                </h2>
            </div>
        )
        
    }
}
