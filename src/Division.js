import { Component } from 'react';

class Division extends Component {
  constructor(props) {
    super(props);
    this.operator = "/";
  }

  getOperands(operation) {
    do{
      this.numerator = this.getNumerator();
      this.denominator = this.getDenominator();
    }while((this.numerator % this.denominator !== 0) || (this.numerator === this.denominator))
    return [this.numerator, this.denominator];
  }

  getNumerator() {
    return this.getOperand(20, 1000);
  }

  getDenominator() {
    return this.getOperand(3, 15);
  }

  getOperand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  correctAnswer() {
    return this.numerator / this.denominator;
  }
}

export default Division;
