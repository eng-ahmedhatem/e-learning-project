import { createSlice } from '@reduxjs/toolkit';
import { current } from 'immer';

const initialState = {
  preTest_time : 1800,
  isLoading: false,
  error: null,
  data: null,
  isLogin: false,
  headers: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset_preTest_time: (state) =>{
      state.preTest_time = 1800;
    },
    user_isLoaning: (state) => {
      state.isLoading = true;
    },
    user_notLoaning: (state) => {
      state.isLoading = false;
    },
    user_isLogin: (state) => {
      state.isLogin = true;
    },
    user_error: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    user_data: (state, action) => {
      state.data = action.payload;
    },
    signOut: (state) => {
      state.isLogin = false;
      state.data = null;
      state.error = null;
      state.headers = null;
      state.preTest_time = 1800
      document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      sessionStorage.removeItem('persist:root');
    },
    preTest_edit: (state, action) => {
      if (state.data) {
        state.data.data.preTest_Score = action.payload || 0; // قم بتعيين القيمة من action.payload
        state.data.data.preTest_Status = true
      }
    },
    postTest_edit: (state, action) => {
      if (state.data) {
        state.data.data.postTest_Score= action.payload || 0; // قم بتعيين القيمة من action.payload
        state.data.data.postTest_Status = true
      }
    },
    set_preTest_time : (state,action)=>{
      state.preTest_time = state.preTest_time - 1 
    },
    preScale_edit: (state) => {
      if (state.data) {
        state.data.data.pre_scale = true; // قم بتعيين القيمة من action.payload
      }
    },
    postScale_edit: (state) => {
      if (state.data) {
        state.data.data.post_scale = true; // قم بتعيين القيمة من action.payload
      }
    },
  },
});

export const {reset_preTest_time,  signOut, user_isLoaning, user_isLogin, user_error, user_notLoaning, user_data, preTest_edit ,set_preTest_time , postTest_edit, preScale_edit , postScale_edit} = userSlice.actions;

export default userSlice.reducer;







// export default userSlice.reducer