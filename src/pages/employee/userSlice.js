import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },

    addUserRequest: (state) => {
      state.loading = true;
    },
    addUserSuccess: (state, action) => {
      state.list.push(action.payload);
      state.loading = false;
    },
  },
});

export const {
  fetchUsersRequest,
  fetchUsersSuccess,
  addUserRequest,
  addUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
