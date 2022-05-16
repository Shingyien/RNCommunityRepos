import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  repos: [],
  error: '',
  query: '',
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    reposRequested(state) {
      state.isLoading = true;
    },
    reposFetched(state, action) {
      state.repos = action.payload;
      state.isLoading = false;
    },
    reposFetchFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {reposRequested, reposFetched, reposFetchFailed} =
  reposSlice.actions;
export default reposSlice.reducer;
