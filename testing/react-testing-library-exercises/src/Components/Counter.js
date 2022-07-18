import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
  };

  increase = () => this.setState(({ counter }) => ({ counter: counter + 1 }));
  decrease = () => this.setState(({ counter }) => ({ counter: counter - 1 }));
  reset = () => this.setState(({ counter }) => ({ counter: 0 }));

  render() {
    return (
      <div>
        <button onClick={this.increase}>increase</button>
        <button onClick={this.increase}>decrease</button>
        <button onClick={this.increase}>reset</button>
        <h1>Counter:</h1>
        <p>value: {this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;