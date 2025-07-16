import React, { useRef } from 'react'

function USeRef() {

    const count=useRef(10);
    console.log(count.current)
    count.current+=5;
    console.log(count.current)
  return (
    <div>
      <h1>{count.current}</h1>
    </div>
  )
}

export default USeRef
