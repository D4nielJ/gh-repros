/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userPayload from './userFetch';
import repoPayload from './reposFetch';

export const fetchUser = createAsyncThunk('user/fetchUser', async (username) => {
  if (username) {
    const response = {
      data: userPayload,
    };
  }
  setTimeout(() => {}, 1000);
  return response.data;
});

export const fetchRepos = createAsyncThunk('user/fetchRepos', async (username) => {
  if (username) {
    const response = {
      data: repoPayload,
    };
  }
  setTimeout(() => {}, 1000);
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userPayload,
    repos: repoPayload,
    userStatus: 'fulfilled',
    reposStatus: 'fulfilled',
    error: null,
  },
  reducers: {},
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

export default userSlice.reducer;
