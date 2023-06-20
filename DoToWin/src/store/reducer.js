/**
 * File: reducers.js
 * Project: DoToWin
 * Description: This file combines all the Redux slices into a single root reducer.
 */

import { combineReducers } from '@reduxjs/toolkit';

// Import individual reducers
import characterReducer from './characterSlice';
import gameStatsReducer from './gameStatsSlice';
import tasksReducer from './tasksSlice';
import errorReducer from './errorSlice';
import gameReducer from './gameSlice';
import townReducer from './townSlice';

// Combine all reducers into a single root reducer
// Each key here will result in a piece of state in the Redux store
const rootReducer = combineReducers({
  character: characterReducer, // Handles the character state
  gameStats: gameStatsReducer, // Handles the game stats state
  tasks: tasksReducer, // Handles the tasks state
  error: errorReducer, // Handles the error state
  game: gameReducer, // Handles the game state
  town: townReducer, // Handles the town state
});

// Export the root reducer
export default rootReducer;
