import {configureStore} from '@reduxjs/toolkit'
import postApi from '../Slice/apiSlice'

const store=configureStore({reducer:{
    api:postApi
}})

export default store;