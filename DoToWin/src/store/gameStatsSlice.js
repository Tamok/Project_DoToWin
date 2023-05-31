/**
 * File: gameStatsSlice.js
 * Project: DoToWin
 * Description: This file contains the Redux slice for the game stats state.
 */

import { createSlice } from '@reduxjs/toolkit';

// Slice for game stats state
const gameStatsSlice = createSlice({
  name: 'gameStats',
  initialState: { points: 0 },
  reducers: {
    incrementPoints: (state, action) => {
      state.points += action.payload;
    },
  },
});

// Export the actions
export const { incrementPoints } = gameStatsSlice.actions;

// Export the reducer
export default gameStatsSlice.reducer;
