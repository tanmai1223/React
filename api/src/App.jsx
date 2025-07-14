import React from 'react'
import Fact from './Fact'
import { useState } from 'react'
function App() {
  let [change,setChange]=useState(false);
  return (
    <div>
      <button onClick={()=>setChange(!change)}>Fact Display</button>
      { change?<Fact />:<></>}
    </div>
  )
}

export default App
