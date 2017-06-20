import React from 'react'

const CalanderRows = () => {
  let rows = []

  for (let i = 5; i < 20; i ++ ) {
    rows.push(`${i}`);
    rows.push(`${i}:30`)
  }

  return(
    <tbody>
      {rows.map(time => {
        return (
          <tr id={`row-${time}`} key={`row-${time}`}>
            <th className="calendar-row">{time}</th>
          </tr>
        )
      })}
    </tbody>
  )
}


export default CalanderRows
