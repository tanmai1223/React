import React from 'react'

function Parent({name : parentName}) {
  return (
    <div>
        <Child number={1} parentName={parentName}/>
        <Child number={2}/>
        <Child number={3}/>
        <Child number={4}/>
        <Child number={5}/>
      
    </div>
  )
}

export default Parent
