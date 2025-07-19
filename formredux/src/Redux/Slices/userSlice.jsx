import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    phone: "",
    password: "",
  },
  users: [],
};

const userSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setUsers(state, action) {
      state.users = [...state.users, action.payload];
    },
    deleteUser(state, action) {
      state.users = state.users.filter((item) => item.id !== action.payload);
    },
    editUser(state, action) {
      state.users = state.users.map((u) =>
        u.id === action.payload.id ? action.payload : u
      );
    },
  },
});

export const { setUser, setUsers, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
