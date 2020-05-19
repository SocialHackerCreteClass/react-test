import React, { useState } from 'react'
import GetUsers from '../GetUsers'
import Users from '../Users'
import User from '../User'

const RandomUsers = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})

    return (
        <>
            <GetUsers controlUsersState={setUsers} />
            <Users getUsers={users} controlUserState={setUser} />
            <User getUser={user} />
        </>
    )
}

export default RandomUsers