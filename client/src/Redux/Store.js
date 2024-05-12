import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './Reducer/UserReducer'
export const store = configureStore({
  reducer: {
    user: UserReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    
  })
})