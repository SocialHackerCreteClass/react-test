import React from 'react'
import './styles.css'

const Users = (props) => {

    const chooseUser = (e) => {
        props.controlUserState(props.getUsers[`${+e.target.value}`])
    }

    return (
        <>
            {
                props.getUsers.length > 2 ? <div className='list_container'><ul onClick={chooseUser}>
                    <li value='0'>{props.getUsers[0].name.first} {props.getUsers[0].name.last}</li>
                    <li value='1'>{props.getUsers[1].name.first} {props.getUsers[1].name.last}</li>
                    <li value='2'>{props.getUsers[2].name.first} {props.getUsers[2].name.last}</li>
                    <li value='3'>{props.getUsers[3].name.first} {props.getUsers[3].name.last}</li>
                    <li value='4'>{props.getUsers[4].name.first} {props.getUsers[4].name.last}</li>
                </ul></div> : ''
            }
        </>
    )
}

export default Users