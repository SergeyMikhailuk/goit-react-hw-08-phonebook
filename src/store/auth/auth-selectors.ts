import { RootState } from 'store';

export const getIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

export const getUserName = (state: RootState) => state.user.name;
