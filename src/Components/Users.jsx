import React, { useState } from 'react';
import UsersList from './Users_List';
import styles from './css/style.css';

const Users = () => {
    console.log(process.env.REACT_APP_USERS_URL);
    const URL = `${process.env.REACT_APP_USERS_URL}`;
    //const URL = 'https://randomuser.me/api/?results=5';
    
    const[isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    
    const fetchList = () => {
        setIsLoading(true);
        fetch(URL)
            .then(res => {
                if (res.ok) {
                    setError(null);
                    return res.json();
                }
                else
                    throw Error(`Error fetching the API!`);
            })
            .then(apiData => {
                const userDataList = [];
                apiData.results.forEach(user => {
                    const userData = {
                        firstName: user.name.first,
                        lastName: user.name.last,
                        city: user.location.city,
                        country: user.location.country,
                        tel: user.phone,
                        email: user.email,
                        pictureURL: user.picture.large,
                        id: user.id.value,
                        key: user.id.value
                    };
                    userDataList.push(userData);
                });
                setUsers(userDataList);
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() =>{
                setIsLoading(false);
            })
    };

    return (
        <div>
            <h1>TEST</h1> 
            <h2>Users</h2>
            <button id="searchButton" onClick={fetchList}>Get users!</button>
            { isLoading 
                ? <p>Loading users...</p>
                : users.length > 0 
                ? <UsersList userList={users} /> 
                : '' 
            }
        </div>
    )
}

export default Users;
