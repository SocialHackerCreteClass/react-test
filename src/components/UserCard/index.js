import React from 'react'
import './style.css'

import { ClipLoader } from 'react-spinners'

function UserCard(props) {
  const override = `
    margin-left: 100px;
  `;

  return (
    <>
      {props.isLoading === true ? <ClipLoader css={override} /> : 
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