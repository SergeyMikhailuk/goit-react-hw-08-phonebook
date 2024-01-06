import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsApi } from './contactsSlice';
import { filterSlice } from './filterSlice';
import { authSlice } from './auth/auth-slice';
import { authApi } from './auth/auth-operations';

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['user'],
  blacklist: ['filter', 'authApi', 'contacts'],
};

const rootReducer = combineReducers({
  user: authSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterSlice.reducer,
});

const persistReducerContacts = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistReducerContacts,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(contactsApi.middleware, authApi.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
