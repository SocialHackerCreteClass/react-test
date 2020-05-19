import React, { useState, useEffect } from "react";
import "./App.css";

import Button from './components/Button'
import UserList from './components/UserList'
import UserCard from "./components/UserCard";

function App() {
  const [usersNames, setUsersNames] = useState([])
  const [users, setUsers] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    handleUsers()
  }, [])

  const handleUsers = async() => {
    setUsersNames([])
    setUsers({})
    setCurrentUser({})
    setIsLoading(true)

    await fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
        .then(data => {
          setUsers(users => data)
          setCurrentUser(currentUser => data.results[0])
          for (let i in data.results) {
            const user = {
              name: `${data.results[i].name.first} ${data.results[i].name.last}`,
            }

            setUsersNames(usersNames => [...usersNames, user])
          }
        })
        .catch(e => console.error(e))
    setIsLoading(false)
  }

  const handleNameClick = (event) => {
    for (let i = 0; i < users.results.length; i++) {
      if (`${users.results[i].name.first} ${users.results[i].name.last}` === event.target.textContent) {
        setCurrentUser(currentUser => users.results[i])
      }
    }
  }

  return (
    <div>
      <Button handleUsers={handleUsers} />
      <UserList users={usersNames} handleNameClick={handleNameClick} />
      <UserCard user={currentUser} isLoading={isLoading} />
    </div>
  )
}

export default App;
