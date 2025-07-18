import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../Slice/countSlice";
import userSlice from "../Slice/userSlice";

const store = configureStore({
  reducer: {
    count: countSlice,
    user: userSlice,
  },
});

export default store;
