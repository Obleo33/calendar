import React from 'react'

const Events = ({ events, time }) => {
  events.map( event => {
    if (event.start === time) {
      console.log(event);
      return (
        <td rowspan="3">{event.title}</td>
      )
    }
  })
    return null
}

export default Events
