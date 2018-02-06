import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    username: "balg"
  }

  userInputHandler = ( event ) => {
    this.setState( { username: event.target.value } );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <UserInput onChange={ this.userInputHandler } userName={ this.state.username } />
        <UserOutput username={ this.state.username } />
        <UserOutput username="jozsika" />
        <UserOutput username="marika" />
      </div>
    );
  }
}

export default App;
