import React, { Component } from 'react'

export default class AIResult extends Component {
    render() {
        const { AIChoice } = this.props.allStates;
        const resultArray = [
            this.props.allStates.one,
            this.props.allStates.two,
            this.props.allStates.three,
            this.props.allStates.four,
            this.props.allStates.five,
            this.props.allStates.six
        ];
        return (
            resultArray[AIChoice - 1] ?
            <div className = "result">
                <h2>AI</h2>
                <img src={resultArray[AIChoice - 1]} alt="dice" width="50%" />
            </div> : null
        )
    }
}
