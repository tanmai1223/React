import React from 'react'
import Fact from './Fact'
import { useState } from 'react'
function App() {
  let [change,setChange]=useState(false);
  return (
    <div  >

      <button style={{ marginLeft:"650px" ,padding: "20px",background:"#87CEFA" }}onClick={()=>setChange(!change)}>Display the List of Users</button>
      { change?<Fact />:<></>}
    </div>
  )
}

export default App
