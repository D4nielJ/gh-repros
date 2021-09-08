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
    user: {},
    repos: [],
    userStatus: 'idle',
    reposStatus: 'idle',
    error: null,
  },
  reducers: {
    resetStatus(state) {
      state.userStatus = 'idle';
      state.reposStatus = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.userStatus = 'pending';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.userStatus = 'fulfilled';
      })
      .addCase(fetchUser.rejected, (state) => {
        state.userStatus = 'rejected';
        state.error = 'Error 404';
      })
      .addCase(fetchRepos.pending, (state) => {
        state.reposStatus = 'pending';
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
        state.reposStatus = 'fulfilled';
      })
      .addCase(fetchRepos.rejected, (state) => {
        state.reposStatus = 'rejected';
        state.error = 'Error';
      });
  },
});

export const { resetStatus } = userSlice.actions;
export default userSlice.reducer;
