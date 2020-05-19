import React from 'react'
import './style.css'

function Button(props) {
  return (
    <button onClick={() => props.handleUsers()}>Get Users!</button>
  )
}

export default Button