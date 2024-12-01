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
    lesson_set: (state, action) => {
      state.data = null;
    }
  },
});

export const { lessons_data,lesson_set } = lessonsSlice.actions;
export default lessonsSlice.reducer;
