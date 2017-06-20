import React, { Component } from 'react';



class EventForm extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      start: '',
      end: '',
    }
  }

  handleSubmit (e){
    e.preventDefault()

  }

  render() {
    return (
      <div className="eventForm-container">
        <form>
          <input id="title-input"
                 type="text"
                 value={this.state.title}
                 onChange={ e => this.setState({ title: e.target.value }) }
          />

          <input id="startTime-input"
                 type="time"
                 step="1800"
                 value={this.state.start}
                 onChange={ e => this.setState({ start: e.target.value }) }
          />

          <input id="endTime-input"
                 type="time"
                 step="1800"
                 value={this.state.end}
                 onChange={ e => this.setState({ end: e.target.value }) }
         />

          <button type="submit" onClick={ (e) => this.handleSubmit(e) }>Submit</button>
        </form>
      </div>
    )
  }
}

export default EventForm;
