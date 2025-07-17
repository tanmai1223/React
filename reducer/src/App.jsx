import React, { useReducer } from 'react'

function App() {

  const initialState={
    count:0,
    toggle:true,
    data:""
  }

  function reducer(state,action){
    switch(action.type){
      case "INCREMENT" :return {...state,count:state.count+1}
      case "DECREMENT" :return {...state,count:state.count>0?state.count-1:0}
      case "TOGGLE" :return {...state,toggle:!state.toggle}
      case "DATA" : return {...state,data:state.data="Text"}
    }

  }

  const[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
      <button onClick={()=>{dispatch({type:"TOGGLE"})}}>{state.toggle ? "Change" : "Toggle"}</button>
      <h1>{state.data}</h1>
      <button onClick={()=>{dispatch({type:"DATA"})}}>Display</button>
    </div>
  )
}

export default App
