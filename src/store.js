import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {movieApi} from "./Services/Moviedb"
import  HomeSlice  from './Services/Slices/HomeSlice'

export const store = configureStore({
    reducer: {
      [movieApi.reducerPath]: movieApi.reducer,
      home:HomeSlice
    },
    
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(movieApi.middleware),
  })
  
  setupListeners(store.dispatch)