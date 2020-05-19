import React from 'react'

const GetUsers = (props) => {
    let isLoading = false;
    const getUsers = () => {
        isLoading = true;
        fetch(`https://randomuser.me/api/?results=5`)
            .then(response => response.json())
            .then(data => {
                isLoading = false;
                props.controlUsersState(data.results)
            })
            .catch(err => {
                isLoading = false;
                console.log(err)
            })
    }
    return (
        <>
            <button onClick={getUsers}>Get Users!</button>
            {isLoading ? 'Loading...' : ''}
        </>
    )
}

export default GetUsers