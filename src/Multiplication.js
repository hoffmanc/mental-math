import React, { Component } from 'react';

class Multiplication extends Component {
  constructor(props) {
    super(props);
    this.operator = "*";
  }

  getOperands(operation) {
    this.operand1 = this.getOperand();
    this.operand2 = this.getOperand();
    return [this.operand1, this.operand2];
  }

  getOperand() {
    let min = 4;
    let max = 15;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  correctAnswer() {
    return this.operand1 * this.operand2;
  }
}

export default Multiplication;
