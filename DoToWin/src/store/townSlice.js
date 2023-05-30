import { createSlice } from '@reduxjs/toolkit';

const townSlice = createSlice({
  name: 'town',
  initialState: { buildings: 0 },
  reducers: {
    addBuilding: state => {
      state.buildings += 1;
    },
  },
});

export const { addBuilding } = townSlice.actions;

export default townSlice.reducer;
