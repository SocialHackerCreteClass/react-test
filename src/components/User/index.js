import React from 'react'
import './styles.css'

const User = (props) => {
    return (
        <>
            {props.getUser.name ?
                <>
                    <img src={props.getUser.picture.large} alt={props.getUser.name.last}></img>
                    <h2>{props.getUser.name.title} {props.getUser.name.first} {props.getUser.name.last}</h2>
                    <p>{props.getUser.email}</p>
                    <p>{props.getUser.phone}</p>
                    <p>{props.getUser.location.city}, {props.getUser.location.country}</p>
                </> : ''}
        </>
    )
}

export default User