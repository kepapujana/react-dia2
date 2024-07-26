import React from 'react'

function Person(props) {
  return (
    <div>
      <span>{props.name} </span>
      <span>{props.surname} </span>
      <span>, {props.age}</span>
    </div>
  )
}

export default Person