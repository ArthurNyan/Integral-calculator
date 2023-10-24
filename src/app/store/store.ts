import { configureStore } from '@reduxjs/toolkit'
import intStateReducer from './intSlice'

export const store = configureStore({
  reducer: {
    intState: intStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch