import React, { Component } from 'react';
import images from '../assets/images/index';

export default class Interface extends Component {
    render() {
        return (
            <div className="interface">
                <span className="information">ℹ</span>
                <img
                    alt="choose"
                    src={images.dice_six_faces_random}
                    onClick = {this.props.startGame}
                />
                <span
                    className="clear"
                    onClick={this.props.clearState}
                >
                    Clear ✖
                </span>
            </div>
        )
    }
}
