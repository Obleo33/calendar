import React, { Component } from 'react';
import './App.css';
import Calendar from './Calendar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Calendar Challenge</h1>
        <Calendar />
      </div>
    );
  }
}

export default App;
