import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { increment } = UserSlice.actions;

export default UserSlice.reducer;
