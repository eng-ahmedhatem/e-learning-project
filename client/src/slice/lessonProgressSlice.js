import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const lessonProgressSlice = createSlice({
  name: 'lessonProgress',
  initialState,
  reducers: {
    lessonsProgress_data: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { lessonsProgress_data } = lessonProgressSlice.actions;
export default lessonProgressSlice.reducer;
