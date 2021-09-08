import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ghInstance from '../../app/axiosInstance';

export const fetchUser = createAsyncThunk('user/fetchUser', async (username) => {
  const response = await ghInstance.get(`/users/${username}`);
  console.log(response.data);
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
