import React, { Component } from 'react';

class Equation extends Component {
  constructor(props) { 
    super(props);
    this.state = this.reset();
  }

  getOperand() {
    return Math.ceil(Math.random() * 100 % 15);
  }

  reset() {
    return { 
      operand1: this.getOperand(), 
      operand2: this.getOperand(), 
      answer: '' 
    };
  }

  render() {
    return (
      <div>
        <div className="operand1">{this.state.operand1}</div>
        <div className="operator">*</div>
        <div className="operand2">{this.state.operand2}</div>
        <div className="answer">
          <input type="text" value={this.state.answer} 
            onChange={this.checkAnswer}/>
        </div>
      </div>
    );
  }

  checkAnswer = (event) => {
    let answer = parseInt(event.target.value, 10);
    if (this.state.operand1 * this.state.operand2 === answer) {
      this.setState(this.reset());
      this.props.correctAnswer(this.state.operand1, this.state.operand2, answer);
    } else {
      this.setState({answer: event.target.value});
    }
  }
}

export default Equation;
