import React from 'react';
import { useEffect, useState } from "react"

const AsyncAwait = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <table>
        <tr>
        <th><h1>Name</h1></th>
        <th><h1>User</h1></th>
        <th><h1>e-Mail</h1></th>
        </tr>
        <tr>
        <td>
          {users.map(user => (
            <h2>{user.name}</h2>
          ))}
          </td>
          <td>
        
          {users.map(user => (
            <h2>{user.username}</h2>
          ))}
          </td>
          <td>
          {users.map(user => (
            <h2>{user.email}</h2>
          ))}
          </td>
          </tr>
        </table>
      )}
    </div>
  )
}

export default AsyncAwait;