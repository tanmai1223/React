import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Profile from '../pages/Profile'
import Tanmai from '../pages/Tanmai'
import Teju from '../pages/Teju'

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} >
          <Route path="tanmai" element={<Tanmai />} />
          <Route path="teju" element={<Teju />} />
        </Route>


      </Routes>
    </div>
  )
}

export default App
