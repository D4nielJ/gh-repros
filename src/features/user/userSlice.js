import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUser = createAsyncThunk('user/fetchUser', (async) => {
  // const response = await axios cb
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
