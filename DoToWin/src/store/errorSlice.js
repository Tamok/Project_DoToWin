/**
 * File: errorSlice.js
 * Project: DoToWin
 * Description: This file contains the Redux slice for the error state.
 */

import { createSlice } from '@reduxjs/toolkit';

// Slice for error state
const errorSlice = createSlice({
  name: 'error',
  initialState: { message: null },
  reducers: {
    setError: (state, action) => {
      state.message = action.payload;
    },
    clearError: state => {
      state.message = null;
    },
  },
});

// Export the actions
export const { setError, clearError } = errorSlice.actions;

// Export the reducer
export default errorSlice.reducer;
