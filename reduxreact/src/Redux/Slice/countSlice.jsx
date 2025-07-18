import { createSlice } from "@reduxjs/toolkit";

const initialState={count:0}

const countSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        setCountIncrement(state){
            state.count++
        },
        setCountDecrement(state){
            if(state.count>0){
                 state.count--
            }else{
                state.count=0
            }            
        },
        setCountIncrementBy5(state,action){
            state.count=state.count+action.payload
        }
    }
})

export const {setCountIncrement,setCountDecrement,setCountIncrementBy5}=countSlice.actions
export default countSlice.reducer