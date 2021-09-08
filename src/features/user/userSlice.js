/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ghInstance from '../../app/axiosInstance';

export const fetchUser = createAsyncThunk('user/fetchUser', async (username) => {
  const response = await ghInstance.get(`/users/${username}`);
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: null,
    user: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Error 404';
      });
  },
});

export default userSlice.reducer;
