import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userdata: JSON.parse(localStorage.getItem('mainUser')) ? JSON.parse(localStorage.getItem('mainUser')): null,
  },
  reducers: {

    mainUser: (state , action)=>{
      state.userdata = action.payload
    }
   
    
  },
})


export const { mainUser} = userSlice.actions

export default userSlice.reducer
