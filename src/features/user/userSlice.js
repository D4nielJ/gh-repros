/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ghInstance from '../../app/axiosInstance';

export const fetchUser = createAsyncThunk('user/fetchUser', async (username) => {
  const response = await ghInstance.get(`/users/${username}`);
  return response.data;
});

export const fetchRepos = createAsyncThunk('user/fetchRepos', async (username) => {
  const response = await ghInstance.get(`/users/${username}/repos`);
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: null,
    user: {},
    repos: [],
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
        state.status = 'idle';
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Error 404';
      })
      .addCase(fetchRepos.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchRepos.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Error';
      });
  },
});

export default userSlice.reducer;
