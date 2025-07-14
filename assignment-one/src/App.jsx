import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './UserCard'
import users from './data/users.json'
function App() {
  return(
    <div style={{width: "1200px",
      height: "auto",
      backgroundColor: "aliceblue",
      border: "5px salmon",
      borderStyle: "groove",
      padding: "10px",
      paddingLeft: "35px"}}>
    <h1 style={{textDecoration: "underline",
  textShadow: "2px 2px 5px salmon",
  marginBottom: "12px",
  fontSize: "3rem"}}>Title</h1>
    <UserCard users={users}/>
    
    </div>
  
  )
}

export default App
