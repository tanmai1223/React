import { configureStore } from "@reduxjs/toolkit";
import {postApi} from "../Slice/apiSlice";

const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer
  },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(postApi.middleware)
    
  },
);

export default store;
