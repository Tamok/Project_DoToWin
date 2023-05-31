import { createSlice } from '@reduxjs/toolkit';

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

export const { incrementPoints, levelUp, addBuilding } = gameSlice.actions;

export default gameSlice.reducer;
