import React from 'react'
import { Outlet } from 'react-router'

function Profile() {
  return (
    <div>
      Welcome
      <Outlet></Outlet>
    </div>
  )
}

export default Profile
