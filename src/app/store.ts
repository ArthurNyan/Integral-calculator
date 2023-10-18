// import { configureStore } from '@reduxjs/toolkit'
// import pageState from './slice'
// export const store = configureStore({
//   reducer: {
//     pageState: pageState,
//   },
// })

import { configureStore } from '@reduxjs/toolkit'
import pageStateReducer from './slice1'

export const store = configureStore({
  reducer: {
    pageState: pageStateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch