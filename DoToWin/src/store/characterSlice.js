/**
 * File: characterSlice.js
 * Project: DoToWin
 * Description: This file contains the Redux slice for the character state.
 */

import { createSlice } from '@reduxjs/toolkit';

// Slice for character state
const characterSlice = createSlice({
  name: 'character',
  initialState: { level: 1 },
  reducers: {
    levelUp: state => {
      state.level += 1;
    },
  },
});

// Export the actions
export const { levelUp } = characterSlice.actions;

// Export the reducer
export default characterSlice.reducer;
