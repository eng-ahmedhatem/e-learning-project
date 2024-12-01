import { createSlice } from '@reduxjs/toolkit';

const initialState = { 
  data: null 
};

export const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    lessons_data: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { lessons_data } = lessonsSlice.actions;
export default lessonsSlice.reducer;
