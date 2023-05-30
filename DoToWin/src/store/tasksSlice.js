import { createSlice } from '@reduxjs/toolkit';

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

export const { addTask, removeTask, completeTask } = tasksSlice.actions;

export default tasksSlice.reducer;