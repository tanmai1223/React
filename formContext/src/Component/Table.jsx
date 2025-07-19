import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContextProvider'

function Table() {
    const {users,handleDelete,handleEdit}=useContext(UserContext)
  return (
    <div>
      <h1>Data</h1>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.password}</td>
              <td>
                {/* Placeholder for actions */}
                <button onClick={()=>{handleEdit(item.id)}}>Edit</button>
                <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
