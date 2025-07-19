import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import { deleteUser,setUser } from '../Redux/Slices/userSlice';


function Table() {
   const users=useSelector((state)=>state.userdata.users)
   const dispatch=useDispatch()

   const handleDelete=(id)=>{
    dispatch(deleteUser(id))
   }

   const handleEdit=(id)=>{
    const editedData=users.find((item)=>item.id===id)    
    dispatch(setUser(editedData))
   }
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
          {users.map((item,index) => (
            <tr key={item.id}>
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
