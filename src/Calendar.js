import React, { Component } from 'react';
import EventForm from './EventForm'
import CalanderRows from './CalendarRows'

class Calendar extends Component {
  constructor(){
    super();
    this.state = {
      events: [],
    }
  }

  submitEvent(event) {
    this.setState({ events: [...this.state.events, event] })
  }

  render() {
    return (
      <div className="calendar-container">
        <EventForm submitEvent={ (event) => this.submitEvent(event) }/>
        <table id="calendar-table">
          <CalanderRows />
        </table>
      </div>
    );
  }
}

export default Calendar;
