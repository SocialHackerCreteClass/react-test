import React, {useState, useEffect} from 'react';
import UsersChart from './Users_Chart';
import styles from './css/style.css';

const Users_List = (props) => {
    const user = props.userList;
    const [currentUser, setCurrentUser] = useState(0);

    useEffect(() => {
        setCurrentUser(0);
    }, [user]);

    return (
        <div className="div-usersList">
            <ul>
                {user.map((el, index) => 
                <li 
                    onClick={() => { setCurrentUser(index) }} 
                    key={index}>{el.firstName} {el.lastName}
                </li> 
                )}
            </ul>
            <UsersChart person={user[currentUser]}/>
        </div>
    )
}

export default Users_List;
