import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
  name: 'character',
  initialState: { level: 1 },
  reducers: {
    levelUp: state => {
      state.level += 1;
    },
  },
});

export const { levelUp } = characterSlice.actions;

export default characterSlice.reducer;
