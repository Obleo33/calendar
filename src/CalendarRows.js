import React from 'react'
import Events from './Events'

const CalanderRows = ({ events }) => {
  let rows = []

  for (let i = 5; i < 20; i ++ ) {
    rows.push(`${i}:00`);
    rows.push(`${i}:30`)
  }

  return(
    <tbody>
      {rows.map(time => {
        return (
          <tr id={`row-${ time }`} key={`row-${ time }`}>
            <th className="calendar-row">{ time } </th>
            <Events events={ events } time={ time }/>
          </tr>
        )
      })}
    </tbody>
  )
}

export default CalanderRows
