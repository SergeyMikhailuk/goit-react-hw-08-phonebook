import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from './index';

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

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery,
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    addContact: build.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    removeContact: build.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: build.mutation({
      query: ({ contactId, name, number }) => ({
        url: `/contacts/${contactId}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useRemoveContactMutation,
  useAddContactMutation,
  useUpdateContactMutation,
} = contactsApi;
