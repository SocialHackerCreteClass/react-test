import React from 'react'
import './style.css'

function UserList(props) {
  return (
    <ul>
      {props.users.map((name, index) => <li onClick={props.handleNameClick} key={index}>{props.users[index].name}</li>)}
    </ul>
  )
}

export default UserList