import { configureStore } from '@reduxjs/toolkit'
import intStateReducer from './intSlice'
import pageSliceReducer from './pageSlice'

export const store = configureStore({
  reducer: {
    intState: intStateReducer,
    pageState: pageSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch