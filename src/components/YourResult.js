import React, { Component } from 'react';

export default class YourResult extends Component {

    render() {
        const { yourChoice } = this.props.allStates;
        const resultArray = [
            this.props.allStates.one,
            this.props.allStates.two,
            this.props.allStates.three,
            this.props.allStates.four,
            this.props.allStates.five,
            this.props.allStates.six
        ];
        return (
            resultArray[yourChoice - 1] ?
            <div className = "result">
                <h2>You</h2>
                <img src={resultArray[yourChoice - 1]} alt="dice" width="50%" />
            </div> : null
        )
    }
}
