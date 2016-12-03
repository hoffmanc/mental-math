import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) { 
    super(props);
    this.state = { time: 0 };
  }

  componentDidMount() { 
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState, props) => ({
      time: prevState.time + 1
    }));
    this.props.updateTime(this.state.time);
  }

  render() {
    return (
      <p className="timer"><b>Time:</b> {this.state.time}</p>
    );
  }
}

export default Timer;
