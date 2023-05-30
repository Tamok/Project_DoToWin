import { createSlice } from '@reduxjs/toolkit';

const gameStatsSlice = createSlice({
  name: 'gameStats',
  initialState: { points: 0 },
  reducers: {
    incrementPoints: (state, action) => {
      state.points += action.payload;
    },
  },
});

export const { incrementPoints } = gameStatsSlice.actions;

export default gameStatsSlice.reducer;
