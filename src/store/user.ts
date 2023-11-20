import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'src/store/index';

export type User = Record<string, unknown>;

const userSlice = createSlice({
  name: 'user',
  initialState: null as User,
  reducers: {
    set: (_, action) => action.payload,
  },
});
export const userActions = userSlice.actions;

export const userSelectors = {
  get: (state: AppState): AppState['user'] => {
    console.log('userSelectors get');

    return state.user;
  },
};

export const user = userSlice.reducer;
