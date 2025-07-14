import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to='/about'>Go to about</Link>
      <br />
      <Link to='/profile'>Go to profile</Link>
    </div>
  )
}

export default Home
