import React from 'react'

function Info(props) {
  return (
    <div>
        <h4>
        {props.name}
        <br></br>
        {props.pro}
        <br></br>
        {props.year}
        <br></br>
        {props.com}
      </h4>
    </div>
  )
}

export default Info