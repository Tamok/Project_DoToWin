/**
 * File: townSlice.js
 * Project: DoToWin
 * Description: This file contains the Redux slice for the town state.
 */

import { createSlice } from '@reduxjs/toolkit';

// Slice for town state
const townSlice = createSlice({
  name: 'town',
  initialState: { buildings: 0 },
  reducers: {
    addBuilding: state => {
      state.buildings += 1;
    },
  },
});

// Export the actions
export const { addBuilding } = townSlice.actions;

// Export the reducer
export default townSlice.reducer;
