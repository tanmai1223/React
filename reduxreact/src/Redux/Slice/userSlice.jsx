import { createSlice } from "@reduxjs/toolkit"

const initialState={user:null,userList:[],isActive:false}

const userSlice=createSlice({
    name:"userdata",
    initialState,
    reducers:{
        setUserData(state,action){
           state.user=action.payload
        },
        setUserList(state,action){
            state.userList=[...state.userList,action.payload]
        },
        setActive(state){
            state.isActive=!state.isActive
        }
    }
})

export const {setUserData,setUserList,setActive}=userSlice.actions
export default userSlice.reducer