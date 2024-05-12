import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UserReducer from './Reducer/UserReducer'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rooterReducer = combineReducers({
  user: UserReducer,
})

const persistConfig={
  key:'Root',
  storage,
  version:1
}

const persistedReducers=persistReducer(persistConfig,rooterReducer)
export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    
  })
})

export const persistor = persistStore(store)