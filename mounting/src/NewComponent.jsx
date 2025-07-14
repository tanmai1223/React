import React, { useEffect, useState } from 'react'

function NewComponent() {
    let [count,setCount]=useState(0);
     let [count1,setCount1]=useState(0);
     useEffect(()=>{
        console.log("Mounting phase");
     },[]);
     useEffect(()=>{
        console.log("Rendering/updating phase");
     },[count,count1])
     useEffect(()=>{
        return()=>console.log("Unmount");    
     },[])
  return (
    <div>
      <h2>Hello World</h2><hr />
      <button onClick={()=>setCount(count++)}>Count 1</button>
      <button onClick={()=>setCount1(count1++)}>Count 2</button>
    </div>
  )
}

export default NewComponent
