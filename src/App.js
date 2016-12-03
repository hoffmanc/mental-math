import React, { Component } from 'react';
import './App.css';
import Timer from './Timer.js';
import Equation from './Equation.js';
import LogEntries from './LogEntries.js';
var _ = require('underscore');

class App extends Component {
  constructor(props) {
    super(props);
    this.time = 0;
    this.state = {
      logEntries: []
    };
  }

  handleUpdateTime = (time) => {
    this.time = time;
  }

  handleCorrectAnswer = (operand1, operand2, answer) => {
    this.setState(function(prevState, props) {
      let lastEntry = prevState.logEntries[0]
      let lastTime = lastEntry === undefined ? 0 : lastEntry.time;
      let timeTaken = this.time - lastTime;
      let newEntry = {
        operand1: operand1,
        operand2: operand2,
        answer: answer,
        time: this.time,
        timeTaken: timeTaken
      };

      return { logEntries: [newEntry].concat(prevState.logEntries) };
    });
  }

  render() {
    return (
      <div className="App">
        <Timer updateTime={this.handleUpdateTime}/>
        <Equation correctAnswer={this.handleCorrectAnswer}/>
        <h3>Log</h3>
        <LogEntries logEntries={this.state.logEntries} />
      </div>
    );
  }
}

export default App;
