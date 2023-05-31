/**
 * File: tasksSlice.js
 * Project: DoToWin
 * Description: This file contains the Redux slice for the tasks state.
 */

import { createSlice } from '@reduxjs/toolkit';
import { setError } from './errorSlice';

// Slice for tasks state
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    completeTask: (state, action) => {
        const index = state.findIndex(task => task.id === action.payload);
        state.splice(index, 1);
      },
  },
});

// Export the actions
export const { addTask, removeTask, completeTask } = tasksSlice.actions;

// Export the reducer
export default tasksSlice.reducer;
