import React from "react";

import Control from "./Control";
import Display from "./Display";
import * as api from "../api";

class Counter extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    // api.ping().then(response => {
    //   console.log("Server response", response.data.message);
    // });

    api.getInitialCount().then(response => {
      console.log("Server response", response.data.count);

      this.setState({ count: response.data.count });
    });
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Control increment={this.increment} decrement={this.decrement} />
        <Display count={this.state.count} />
      </div>
    );
  }
}

export default Counter;
