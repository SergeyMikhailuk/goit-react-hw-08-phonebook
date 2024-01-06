import { createSlice } from '@reduxjs/toolkit';

import { authApi } from './auth-operations';

type User = {
  token: string | null;
  name: string | null;
  email: string | null;
  isLoggedIn: boolean;
};

const initialState: User = {
  token: null,
  name: null,
  email: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: build => {
    build.addMatcher(authApi.endpoints?.createUser.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.name = payload.user.name;
      state.email = payload.user.email;
      state.isLoggedIn = true;
    });
    build.addMatcher(authApi.endpoints?.createUser.matchRejected, state => {
      state.token = null;
      state.name = null;
      state.email = null;
      state.isLoggedIn = false;
    });
    build.addMatcher(authApi.endpoints?.loginUser.matchFulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.name = payload.user.name;
      state.email = payload.user.email;
      state.isLoggedIn = true;
    });
    build.addMatcher(authApi.endpoints?.loginUser.matchRejected, state => {
      state.token = null;
      state.name = null;
      state.email = null;
      state.isLoggedIn = false;
    });
    build.addMatcher(authApi.endpoints?.logoutUser.matchFulfilled, state => {
      state.token = null;
      state.name = null;
      state.email = null;
      state.isLoggedIn = false;
    });
  },
});

export default authSlice.reducer;
