/**
 * File: gameSlice.js
 * Project: DoToWin
 * Description: This file contains the Redux slice for the game state.
 */

import { createSlice } from '@reduxjs/toolkit';

// Slice for game state
const gameSlice = createSlice({
  name: 'game',
  initialState: { points: 0, level: 1, buildings: 0 },
  reducers: {
    incrementPoints: (state, action) => {
      state.points += action.payload;
    },
    levelUp: state => {
      state.level += 1;
    },
    addBuilding: state => {
      state.buildings += 1;
    },
  },
});

// Export the actions
export const { incrementPoints, levelUp, addBuilding } = gameSlice.actions;

// Export the reducer
export default gameSlice.reducer;
