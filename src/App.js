import React, { Component } from 'react';
import './App.css';
import EventForm from './EventForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>main Page</h1>
        <EventForm />
      </div>
    );
  }
}

export default App;
