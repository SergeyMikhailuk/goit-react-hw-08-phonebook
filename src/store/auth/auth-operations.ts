import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from 'store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: build => ({
    createUser: build.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
    }),
    loginUser: build.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: user,
      }),
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const { useCreateUserMutation, useLoginUserMutation, useLogoutUserMutation } = authApi;
