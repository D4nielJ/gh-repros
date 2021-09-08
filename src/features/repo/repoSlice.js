/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ghInstance from '../../app/axiosInstance';

export const fetchRepo = createAsyncThunk('repo/fetchRepo', async (owner, name) => {
  console.log('name in slice', name);
  console.log(`/repos/${owner}/${name}`);
  const response = await ghInstance.get(`/repos/${owner}/${name}`);
  return response.data;
});

export const repoSlice = createSlice({
  name: 'repo',
  initialState: {
    repo: {},
    repoStatus: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRepo.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchRepo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchRepo.rejected, (state) => {
        state.status = 'rejected';
        state.error = 'Error';
      });
  },
});

export default repoSlice.reducer;
