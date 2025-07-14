import React from 'react'

function UserList({user}) {
  return (
    <div style={{ height:"auto",
      width:"250px" ,
      padding:"25px" ,
      border : " 2px solid black",
      backgroundColor : "antiquewhite",
      borderRadius : "15px",
      margin : "8px",
      justifyContent : "center",
      textAlign : "center"
  }}>
      <div>
        <img src={user.profileImageUrl} alt={user.Name} />
      </div>
      <h2>{user.Name}</h2>
      <h2>{user.Age}</h2>
      <h2>{user.Location}</h2>
      <h2>{user.Status}</h2>
      {user.Age>18 ? <h3>Adult</h3>: <h3>Minor</h3>}
    </div>
  )
}

export default UserList
