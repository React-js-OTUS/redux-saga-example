import { createSlice } from '@reduxjs/toolkit';
import { AppState } from 'src/store/index';

export type UserRace = { isFetch: boolean; isCancel: boolean };

export const userRaceSlice = createSlice({
  name: 'userRace',
  initialState: { isFetch: false, isCancel: false },
  reducers: {
    setIsFetch: (state, action) => {
      state.isFetch = action.payload;
    },
    setIsCancel: (state, action) => {
      state.isCancel = action.payload;
    },
  },
});

export const userRace = userRaceSlice.reducer;

export const userRaceActions = userRaceSlice.actions;
