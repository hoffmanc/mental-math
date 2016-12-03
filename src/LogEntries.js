import React, { Component } from 'react';
var _ = require('underscore');

class LogEntries extends Component {
  render() {
    const entries = this.props.logEntries;
    const listItems = _.map(entries, (entry) =>
      <li key={entry.time}>
        <em className={entry.timeTaken > 5 ? "bad" : ""}>
          {entry.timeTaken}s:
        </em>
        {entry.operand1} * {entry.operand2} = {entry.answer}
      </li>
    )
    return (
      <ul>{listItems}</ul>
    );
  }
}

export default LogEntries;

