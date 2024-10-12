import { configureStore } from '@reduxjs/toolkit'
import usserData from './Slices/userSlice'

export default configureStore({
  reducer: {
    info: usserData,
  },
})
