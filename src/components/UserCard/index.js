import React from 'react'
import './style.css'

function UserCard(props) {
  return (
    <>
      {props.isLoading === true ? <p>Loading...</p> : 
        <div className='UserCard'>
          <img src={props.user.picture.large} alt='human' />
          <h1>{`${props.user.name.first} ${props.user.name.last}`}</h1>
          <p>{props.user.email}</p>
          <p>{props.user.cell}</p>
          <p>{`${props.user.location.city}, ${props.user.location.country}`}</p>
        </div>
      }
    </>
  )
}

export default UserCard