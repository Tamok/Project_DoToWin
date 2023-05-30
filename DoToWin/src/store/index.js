import { configureStore } from '@reduxjs/toolkit';
// import reducers from './reducers';
import tasksReducer from './tasksSlice';
import gameStatsReducer from './gameStatsSlice';
import characterReducer from './characterSlice';
import townReducer from './townSlice';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        gameStats: gameStatsReducer,
        character: characterReducer,
        town: townReducer,
      },
  });
