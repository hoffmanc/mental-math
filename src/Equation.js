var _ = require("underscore")
import React, { Component } from 'react';

class Equation extends Component {
  constructor(props) { 
    super(props);
    this.operandSets = [];
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

  getOperands(operation) {
    let operands = null;
    do {
      switch(operation) {
        case "/":
          let numerator = null;
          let denominator = null;
          do{
            numerator = this.getOperand();
            denominator = this.getOperand();
          }while((numerator % denominator !== 0) || (numerator === denominator))
          operands = [numerator, denominator];
          break;
        default:
          operands = [this.getOperand(), this.getOperand()];
      }
    }while(this.operandsAlreadyUsed(operands));
    this.operandSets.push(operands);
    return operands;
  }

  operandsAlreadyUsed(operands) {
    _.some(this.operandSets, (operandSet) => {
      let intersection = _.intersection(operandSet, operands);
      console.log(operandSet);
      return intersection.length === 2;
    })
  }

  getOperand() {
    let min = 2
    let max = 15
    return Math.floor(Math.random() * (max - min)) + min;
  }

  reset() {
    let operator = _.sample(["*","/"])
    let operands = this.getOperands(operator)
    return { 
      operand1: operands[0],
      operator: operator,
      operand2: operands[1],
      answer: '' 
    };
  }


  checkAnswer = (event) => {
    let answer = parseInt(event.target.value, 10);
    let correctAnswer = null
    if(this.state.operator === "*") {
      correctAnswer = this.state.operand1 * this.state.operand2
    } else {
      correctAnswer = this.state.operand1 / this.state.operand2
    }
    if (correctAnswer === answer) {
      this.setState(this.reset());
      this.props.correctAnswer(this.state.operand1, this.state.operand2, answer);
    } else {
      this.setState({answer: event.target.value});
    }
  }
}

export default Equation;
