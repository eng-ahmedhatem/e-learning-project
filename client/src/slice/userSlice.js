import { createSlice } from '@reduxjs/toolkit'


const initialState= {
  isLoading:false,
  error:null,
  data:null,
  isLogin:false,
  headers:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    user_isLoaning: (state) => {
      state.isLoading = true
    },
    user_notLoaning: (state) => {
      state.isLoading = false
    },
    user_isLogin: (state) => {
      state.isLogin = true
    },
    user_error: (state,action) => {
      state.isLoading = false
      state.error = action.payload
    },
    user_data: (state,action) => {
      state.data = action.payload
    },
    signOut:(state)=>{
      state.isLogin = false
      state.data = null
      state.error = null
      state.headers = null
      document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      localStorage.removeItem("persist:root")
    }
    
  },
})

export const {signOut, user_isLoaning,user_isLogin, user_error ,user_notLoaning,user_data } = userSlice.actions

export default userSlice.reducer