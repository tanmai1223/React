import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContextProvider'

export default function () {
    const {user,handleChange,handleSubmit}=useContext(UserContext)
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="text"
          placeholder="Enter Number"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit">{user.id?"Update":"Save"}</button>
      </form>

    </div>
  )
}
