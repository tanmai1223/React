import React from 'react'
import { useState } from 'react';

function App() {
  let [counter,setCounter]=useState(0);
  const increment=()=>{
    setCounter(counter++);
  }
  const reset=()=>{
    setCounter(0);
  }
  return (
    <div style={{marginTop:"200px",height:"200px",width:"500px",marginLeft:"500px",alignContent:"center",justifyContent:"center"}}>
      <h1 style={{display:"flex",alignContent:"center",justifyContent:"center",fontSize:"3rem",marginBottom:"10px"}}>{counter}</h1>
      <button onClick={increment} style={{height:"50px",width:"200px",marginLeft:"50px",background:"green",fontSize:"1rem",color:"white",borderRadius:"10px"}}>Increment</button>
      <button onClick={reset} style={{height:"50px",width:"200px",marginLeft:"10px",background:"green",fontSize:"1rem",color:"white",borderRadius:"10px"}}>Reset</button>
    </div>
  )
}

export default App
