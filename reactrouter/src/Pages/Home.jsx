import React from 'react'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/service'>Services</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Home
