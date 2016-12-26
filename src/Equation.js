var _ = require("underscore")
import React, { Component } from 'react';
import Multiplication from './Multiplication.js';
import Division from './Division.js';

class Equation extends Component {
  constructor(props) { 
    super(props);
    this.state = this.reset();
  }

  render() {
    return (
      <div>
        <div className="operand1">{this.state.operand1}</div>
        <div className="operator">{this.state.operator}</div>
        <div className="operand2">{this.state.operand2}</div>
        <div className="answer">
          <input type="text" value={this.state.answer} 
            onChange={this.checkAnswer}/>
        </div>
      </div>
    );
  }

  reset() {
    this.equation = _.sample([new Multiplication(), new Division()]);
    let operands = this.equation.getOperands();
    let operator = this.equation.operator;
    return { 
      operand1: operands[0],
      operator: operator,
      operand2: operands[1],
      answer: '' 
    };
  }

  checkAnswer = (event) => {
    let answer = parseInt(event.target.value, 10);
    if(answer === this.equation.correctAnswer()) {
      this.setState(this.reset());
      this.props.correctAnswer(this.state.operand1, this.state.operator, this.state.operand2, answer);
    } else {
      this.setState({answer: event.target.value});
    }
  }
}

export default Equation;
