import React, { Component } from "react";

import Counter from "./components/Counter";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <content>
          <Counter />
        </content>
      </div>
    );
  }
}

export default App;
