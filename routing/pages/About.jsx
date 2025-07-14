import React from 'react'
import { Link } from 'react-router'

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/profile">Go to Profile</Link>
    </div>
  )
}

export default About
