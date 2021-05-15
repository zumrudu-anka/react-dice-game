import React, { Component } from 'react';
import images from './assets/images';
import AIResult from './components/AIResult';
import GameResult from './components/GameResult';
import Interface from './components/Interface';
import Ranking from './components/Ranking';
import YourResult from './components/YourResult';

export default class App extends Component {

  draws = [];
  losses = [];
  wins = [];

  state = {
    games : 0,
    yourChoice : "",
    AIChoice : null,
    one : images.dice_six_faces_one,
    two : images.dice_six_faces_two,
    three : images.dice_six_faces_three,
    four : images.dice_six_faces_four,
    five : images.dice_six_faces_five,
    six : images.dice_six_faces_six
  };

  AIChoice = () =>{
    this.setState({
      AIChoice : Math.floor(Math.random() * 6) + 1
    });
  }

  startGame = () => {
    this.setState({
      yourChoice : Math.floor(Math.random() * 6) + 1,
      games : this.state.games + 1
    });

    this.AIChoice();
  }

  clearState = () => {
    this.losses = [];
    this.wins = [];
    this.draws = [];
    this.setState({
      yourChoice : "",
      AIChoice : null,
      games : 0
    });
  }

  render() {
    return (
      <>
        <Interface
          games = {this.state.games}
          clearState = {this.clearState}
          startGame = {this.startGame}
          yourChoice = {this.state.yourChoice}
          AIChoice = {this.state.AIChoice}
        />
        <div className = "resultArea">
          <YourResult
            allStates = {this.state}
          />
          <GameResult
            results = {this.state}
          />
          <AIResult
            allStates = {this.state}
          />
        </div>
        <Ranking
          wins = {this.wins}
          losses = {this.losses}
          draws = {this.draws}
          yourChoice = {this.state.yourChoice}
          AIChoice = {this.state.AIChoice}
        />
      </>
    )
  }
}
