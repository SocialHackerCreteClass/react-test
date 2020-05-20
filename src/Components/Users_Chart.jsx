import React from 'react';
import styles from './css/style.css';

const Users_Chart = (props) => {
    const user = props.person;

    return (
        <div className="div-chart">
            <img src={user.pictureURL} alt="" />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>{user.email}</p>
            <p>{user.tel}</p>
            <p>{user.city}, {user.country}</p>
        </div>
    )
}

export default Users_Chart;
