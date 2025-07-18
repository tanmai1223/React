import React from 'react'
import { setCountIncrement,setCountDecrement ,setCountIncrementBy5} from '../Redux/Slice/countSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const count=useSelector((state)=>state.count.count)
    const dispatch=useDispatch()
    const handleIncrement=()=>{
        dispatch(setCountIncrement())
    }
    const handleDecrement=()=>{
        dispatch(setCountDecrement())
    }
    const handleIncrementBy5=()=>{
        dispatch(setCountIncrementBy5(5))
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrementBy5}>Increment(+5)</button>
    </div>
  )
}

export default Counter
